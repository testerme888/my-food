import { ComposableMap, Geographies, Geography,Marker } from "react-simple-maps";

const geoUrl =
  "https://gist.githubusercontent.com/jbrobst/56c13bbbf9d97d187fea01ca62ea5112/raw/india_states.geojson";

export default function IndiaMap() {
  return (
    <ComposableMap
      projection="geoMercator"
      projectionConfig={{
        scale: 2500,
        center: [81, 27], // Center on UP
      }}
      width={800}
      height={800}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies
            .filter((geo) => geo.properties.ST_NM)
            .map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: {
                    fill: "#E0F7FA",
                    stroke: "#00796B",
                    strokeWidth: 1,
                    outline: "1",
                  },
                  hover: {
                    fill: "#4DD0E1",
                    cursor: "pointer",
                  },
                  pressed: {
                    fill: "#00ACC1",
                  },
                }}
              />
            ))
        }
      </Geographies>
        <Marker coordinates={[81, 27]}>
        <text
          textAnchor="middle"
          fill="#00796B"
          fontSize={16}
          fontWeight="bold"
        >
          Uttar Pradesh
        </text>
      </Marker>
    </ComposableMap>
  );
}