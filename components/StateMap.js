"use client";

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { geoMercator, geoCentroid } from "d3-geo";
import { useEffect, useMemo, useState } from "react";

const GEO_URL = "/india_district.geojson";

// 🔥 Global caches (ek hi request / compute)
let GEOJSON_CACHE = null;
let GEOJSON_PROMISE = null;
const STATE_FEATURES_CACHE = new Map();

// deterministic color (no Math.random)
function hashColor(str = "") {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) | 0;
  return ("#" + ((h >>> 0) % 0xffffff).toString(16).padStart(6, "0")).toUpperCase();
}

export default function StateMap({
  stateName,
  width = 400,
  height = 165,
  showLabels = true, // list view me false pass karenge
}) {
  const formattedName = useMemo(
    () => stateName?.replace(/-/g, " ").toLowerCase() ?? "",
    [stateName]
  );

  const [features, setFeatures] = useState([]);
  const [projection, setProjection] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      // 1) GeoJSON ek hi baar fetch
      if (!GEOJSON_CACHE) {
        if (!GEOJSON_PROMISE) {
          GEOJSON_PROMISE = fetch(GEO_URL)
            .then((r) => {
              if (!r.ok) throw new Error("Failed to load geojson");
              return r.json();
            })
            .then((d) => {
              GEOJSON_CACHE = d;
              return d;
            })
            .finally(() => {
              GEOJSON_PROMISE = null;
            });
        }
        await GEOJSON_PROMISE; // parallel calls bhi isi promise ko await karenge
      }
      if (cancelled) return;

      // 2) Per-state filtered features + fitted projection cache
      const cacheKey = `${formattedName}:${width}x${height}`;
      let stateFeatures = STATE_FEATURES_CACHE.get(cacheKey);
      if (!stateFeatures) {
        stateFeatures = GEOJSON_CACHE.features.filter(
          (g) => g.properties.NAME_1.toLowerCase() === formattedName
        );
        STATE_FEATURES_CACHE.set(cacheKey, stateFeatures);
      }
      if (cancelled) return;

      // 3) Projection fit (dimensions ke hisaab se)
      const proj = geoMercator();
      proj.fitExtent(
        [
          [0, 0],
          [width, height],
        ],
        {
          type: "FeatureCollection",
          features: stateFeatures,
        }
      );

      setFeatures(stateFeatures);
      setProjection(() => proj);
    }

    if (formattedName) load();
    return () => {
      cancelled = true;
    };
  }, [formattedName, width, height]);

  if (!projection) {
    return (
      <div className="flex items-center justify-center h-40">
        <div className="w-6 h-6 border-2 border-green-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <ComposableMap projection={projection} width={width} height={height}>
      <Geographies
        geography={{ type: "FeatureCollection", features }}
      >
        {({ geographies }) => (
          <>
            {geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: {
                    fill: hashColor(geo.properties.NAME_2 || geo.properties.NAME_1),
                    stroke: "#00796B",
                    strokeWidth: 0.5,
                    outline: "none",
                  },
                  hover: { fill: "#4DD0E1", cursor: "pointer", stroke: "white" },
                  pressed: { fill: "#00ACC1" },
                }}
              />
            ))}

            {showLabels &&
              geographies.map((geo, idx) => {
                const [lon, lat] = geoCentroid(geo); // lon/lat
                return (
                  <Marker key={`label-${idx}`} coordinates={[lon, lat]}>
                    <text
                      textAnchor="middle"
                      fill="#004D40"
                      fontSize={8}
                      fontWeight="600"
                    >
                      {geo.properties.NAME_2}
                    </text>
                  </Marker>
                );
              })}
          </>
        )}
      </Geographies>
    </ComposableMap>
  );
}
