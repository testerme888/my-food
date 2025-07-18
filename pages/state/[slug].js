'use client';

import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import IndiaMap from "@/components/IndiaMap";
import UttarPradeshMap from "@/components/UttarPradeshMap";

export default function StatePage() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <section className="md:p-4 p-2">
      <h1 className="text-3xl font-bold mb-4">Food around the { slug }</h1>

      <motion.div
        className="md:flex md:gap-2 bg-white shadow-md overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Image Section */}
        <div className="relative md:w-[65%] h-[250px] md:h-auto">
       {/*  <Image
          src="/Uttar.png"
          alt="Thai and South-East Asian ingredients"
          width={800} // set any base width in px
          height={450} // maintain aspect ratio
          className="w-full h-auto object-cover"
        />  */ }
      
<UttarPradeshMap stateName={slug} />
      </div>

        {/* Text Content Section */}
        <div className="p-6 flex flex-col md:w-[35%] justify-center">
          <h2 className="text-green-700 text-2xl font-bold mb-2">
            { slug }
          </h2>
          <p className="text-gray-700 mb-4">
            Recipes for rich and traditional dishes from Awadhi, Mughlai, and Bhojpuri kitchens — including kebabs, curries, and festive sweets.
          </p>

          <h3 className="text-gray-900 font-semibold mb-2">
            Uttar Pradesh recipes
          </h3>

          <ul className="mb-4 space-y-1">
            <li>
              <Link href="#" className="text-green-700 hover:underline">
                Galouti kebab with ulta tawa paratha
              </Link>
            </li>
            <li>
              <Link href="#" className="text-green-700 hover:underline">
                Aloo tamatar curry with poori
              </Link>
            </li>
            <li>
              <Link href="#" className="text-green-700 hover:underline">
                Nimona (spiced green peas curry) with rice
              </Link>
            </li>
          </ul>

          <Link href="#" className="font-semibold text-green-800 hover:underline">
            See all Uttar Pradesh recipes (228)
          </Link>

        </div>
      </motion.div>
      <motion.div
        className="flex flex-wrap gap-2 md:gap-4 md:py-4 py-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {[
          {
            img: "https://ichef.bbci.co.uk/food/ic/food_16x9_320/cuisines/african_16x9.jpg",
            title: "Lucknow",
          },
          {
            img: "https://ichef.bbci.co.uk/food/ic/food_16x9_320/cuisines/american_16x9.jpg",
            title: "Kanpur",
          },
          {
            img: "https://ichef.bbci.co.uk/food/ic/food_16x9_320/cuisines/british_16x9.jpg",
            title: "varansi",
          },
          {
            img: "https://ichef.bbci.co.uk/food/ic/food_16x9_320/cuisines/caribbean_16x9.jpg",
            title: "Mirzapur",
          },
        ].map((story, index) => (
          <motion.div
            key={index}
            className="w-[calc(50%-4px)] md:w-[calc(25%-12px)] bg-white shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <img
              src={story.img}
              alt={story.title}
              className="w-full object-cover max-h-[140px] md:max-h-[265px]"
            />
            <div className="p-2">
              <h3 className="text-[15px] font-semibold leading-tight pb-8">{story.title}</h3>
              <p className="text-sm pt-1 pb-2 text-gray-600">CUISINE</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
}