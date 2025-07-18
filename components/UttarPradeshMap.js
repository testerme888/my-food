import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { geoMercator, geoPath } from "d3-geo";
import { useEffect, useState } from "react";

const districtGeoUrl =
  "https://raw.githubusercontent.com/geohacker/india/master/district/india_district.geojson";

export default function UttarPradeshMap({ stateName }) {
  const formattedName = stateName?.replace(/-/g, " ").toLowerCase();
  const [filteredGeos, setFilteredGeos] = useState([]);
  const [projection, setProjection] = useState(null);

  useEffect(() => {
    fetch(districtGeoUrl)
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.features.filter(
          (geo) => geo.properties.NAME_1.toLowerCase() === formattedName
        );

        if (filtered.length) {
          const proj = geoMercator();
          const path = geoPath().projection(proj);
          proj.fitExtent(
            [
              [0, 0],
              [800, 500], // adjust dimensions as needed
            ],
            {
              type: "FeatureCollection",
              features: filtered,
            }
          );

          setProjection(() => proj);
          setFilteredGeos(filtered);
        }
      });
  }, [formattedName]);

  if (!projection) return <div>Loading map...</div>;

  return (
    <ComposableMap
      projection={projection}
      width={800}
      height={500}
    >
      <Geographies geography={{ type: "FeatureCollection", features: filteredGeos }}>
        {({ geographies }) => (
          <>
            {geographies.map((geo) => {
                const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    style={{
                      default: {
                        fill: randomColor,
                        stroke: "#00796B",
                        strokeWidth: 0.5,
                        outline: "none",
                      },
                      hover: { fill: "#4DD0E1", cursor: "pointer", stroke:"white" },
                      pressed: { fill: "#00ACC1" },
                    }}
                  />
                );
              })}
            {geographies.map((geo, idx) => {
              const [x, y] = geoPath().centroid(geo);
              return (
                <Marker key={`label-${idx}`} coordinates={[x, y]}>
                  <text
                    textAnchor="middle"
                    fill="#004D40"
                    fontSize={12}        
                    fontWeight="800"
                    fontWeight="bold"
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
