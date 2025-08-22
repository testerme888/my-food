import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { geoMercator, geoPath } from "d3-geo";
import { useEffect, useState } from "react";

const districtGeoUrl = "/india_district.geojson";
const regions = {
  Braj: ["Agra", "Mathura", "Firozabad", "Mainpuri", "Hathras", "Aligarh", "Etah","Kasganj"],
  Awadhi: [
    "Lucknow","Barabanki","Ayodhya","Sultanpur","Raebareli","Pratapgarh","Amethi",
    "Unnao","Hardoi","Sitapur","Lakhimpur Kheri","Bahraich","Shravasti",
    "Gonda","Balrampur"
  ],
  Kannauji: ["Kannauj","Farrukhabad","Etawah","Auraiya"],
  Kaurvi: [
    "Meerut","Ghaziabad","Bulandshahr","Baghpat","Muzaffarnagar",
    "Shamli","Hapur","Gautam Buddha Nagar"
  ],
  Bundeli: ["Jhansi","Lalitpur","Jalaun","Hamirpur","Mahoba","Banda","Chitrakoot"],
  Bagheli: ["Mirzapur","Sonbhadra","Prayagraj"],
  Bhojpuri: [
    "Varanasi","Chandauli","Ghazipur","Ballia","Mau","Deoria","Gorakhpur",
    "Kushinagar","Maharajganj","Azamgarh","Jaunpur","Sant Kabir Nagar",
    "Basti","Siddharth Nagar"
  ],
  Mughlai: ["Agra","Fatehpur","Etawah","Mainpuri"]
  
 };
export default function UttarPradeshMap({ stateName, region = null }) {
  const formattedName = stateName?.replace(/-/g, " ").toLowerCase();
  const [filteredGeos, setFilteredGeos] = useState([]);
  const [projection, setProjection] = useState(null);

  useEffect(() => {
    fetch(districtGeoUrl)
      .then((res) => res.json())
      .then((data) => {
        let filtered = data.features.filter(
          (geo) => geo.properties.NAME_1.toLowerCase() === formattedName
        );
        if (region && regions[region]) {
          filtered = filtered.filter((geo) =>
            regions[region].includes(geo.properties.NAME_2)
          );
        }
        if (filtered.length) {
          const proj = geoMercator();
          const path = geoPath().projection(proj);
          proj.fitExtent(
            [
              [0, 0],
              [800, 300], // adjust dimensions as needed
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

  if (!projection){
    return (<div className="flex items-center justify-center h-[60vh]">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-700 text-lg font-medium">Loading content...</p>
        </div>
      </div>);
  } 

  return (
    <ComposableMap
      projection={projection}
      width={800}
      height={300}
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
