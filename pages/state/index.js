import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import path from "path";
import fs from "fs";
import StateMap from "@/components/StateMap";

const MotionImage = motion(Image);

export default function StateList({ states }) {
  return (
    <div className="p-2 md:p-4">
      <h1 className="text-3xl font-bold mb-6">Explore Indian States</h1>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        {states.map((state, index) => (
          <motion.div
            key={state.slug}
            className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* State Map Preview */}
            <div className="w-full">
              <StateMap stateName={state.slug} showLabels={true} />

            </div>


            {/* Content */}
            <div className="flex flex-col justify-between flex-grow p-4">
              <div>
                <h2 className="text-xl font-semibold mb-2">{state.label}</h2>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {state.cuisines}
                </p>
              </div>
              <Link
                href={`/state/${state.slug}`}
                className="text-green-600 hover:underline mt-4 font-medium"
              >
                View Details →
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

// ✅ Server-side load (no hydration issue)
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "states.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const states = JSON.parse(jsonData);

  return {
    props: { states },
  };
}
