'use client';

import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import IndiaMap from "@/components/IndiaMap";
import UttarPradeshMap from "@/components/UttarPradeshMap";
import { useEffect, useState } from "react";

export default function StatePage() {
  const router = useRouter();
  const { slug } = router.query;

  const [stateData, setStateData] = useState(null);

  useEffect(() => {
    if (typeof slug === 'string') {
      fetch(`/api/states/${slug}`)
        .then((res) => res.json())
        .then((data) => setStateData(data));
    }
  }, [slug]);

  if (!stateData) return <p className="p-4">Loading...</p>;


  return (
    <section className="md:p-4 p-2">
      <h1 className="text-3xl font-bold mb-4">Food around the { slug }</h1>

      <motion.div
         key={slug}
        className="md:flex md:gap-2 bg-white shadow-md overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Image Section */}
        <div className="relative md:w-[65%] h-[250px] md:h-auto">
       
      
<UttarPradeshMap stateName={slug} />
      </div>

        {/* Text Content Section */}
        <div className="p-6 flex flex-col md:w-[35%] justify-center">
          <h2 className="text-green-700 text-2xl font-bold mb-2">
            {stateData.slug}
          </h2>
          <p className="text-gray-700 mb-4">
            {stateData.description}
          </p>

          <h3 className="text-gray-900 font-semibold mb-2">
            {stateData.label} recipes
          </h3>

          <ul className="mb-4 space-y-1">
            {stateData.recipes?.slice(0, 3).map((recipe, index) => (
              <li key={index}>
                <Link href="#" className="text-green-700 hover:underline">
                  {recipe}
                </Link>
              </li>
            ))}
          </ul>

         {/* <Link href="#" className="font-semibold text-green-800 hover:underline">
            See all {stateData.label} recipes ({stateData.recipes?.length})
          </Link>*/}
           <h3 className="text-black-700 font-bold mb-2">
            Main cuisine of {stateData.slug}
          </h3>
          <h3 className="text-green-700 font-medium mb-2">
            {stateData.cuisines}
          </h3>

        </div>
      </motion.div>
      <motion.div
        key={slug + "-cities"}
        className="flex flex-wrap gap-2 md:gap-4 md:py-4 py-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {stateData?.cities?.map((story, index) => (

          <motion.div
      key={index}
      className="w-[calc(50%-4px)]  md:w-[calc(25%-12px)] bg-white shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
    <div className="relative overflow-hidden">
      <motion.img
        src={story.img}
        alt={story.title}
        className="w-full object-cover h-[100px] md:h-[165px]"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      />
      </div>
      <div className="p-2">
        <h3 className="text-[15px] font-semibold leading-tight pb-8">
          {story.title}
        </h3>
        <p className="text-sm pt-1 pb-2 text-gray-600">CUISINE</p>
      </div>
    </motion.div>
        ))}
      </motion.div>

    </section>
  );
}