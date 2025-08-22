'use client';

import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from "react";

export default function StatePage() {
  const router = useRouter();
  const { slug } = router.query;

  const MotionImage = motion.create(Image);

  const [productData, setProductData] = useState(null);

  const [error, setError] = useState(null); // ✅ error product added
  const [loading, setLoading] = useState(true); // ✅ loading product

  useEffect(() => {
    if (typeof slug === 'string') {
      setLoading(true);
      fetch(`/api/product-details/${slug}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Product not found");
          }
          return res.json();
        })
        .then((data) => {
          setProductData(data);
          setError(null);
        })
        .catch((err) => {
          console.error(err.message);
          setError(err.message);
          setProductData(null);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-700 text-lg font-medium">Loading content...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <div className="text-center space-y-2 px-4">
          <p className="text-2xl text-red-600 font-bold">Oops!</p>
          <p className="text-gray-700 font-medium">{error}</p>
          <p className="text-sm text-gray-500">Please check the URL or try again.</p>
        </div>
      </div>
    );
  }


  return (
    <section className="md:p-4 p-2">
      <h1 className="text-3xl font-bold mb-4">Let`s discover {productData.label}</h1>

      <motion.div
         key={slug}
        className="md:flex md:gap-2 bg-white shadow-md overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Image Section */}
        <div className="relative overflow-hidden md:w-[65%] h-[250px] md:h-auto">
        
          <MotionImage
            src={`/${productData.category}/${productData.img}`}
            width={400} // or any fixed value
            height={165}
            alt={productData.title}
            className="w-full object-cover h-[250px] md:h-[400px]"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          />
        </div>

        {/* Text Content Section */}
        <div className="p-6 flex flex-col md:w-[35%] justify-center">
          <h2 className="text-green-700 text-2xl font-bold mb-2">
            {productData.label}
          </h2>
          <p className="text-gray-700 mb-4">
            {productData.description}
          </p>
          {/*<h3 className="text-gray-900 font-semibold mb-2">
            {productData.label} recipes
          </h3>

          <ul className="mb-4 space-y-1">
            {productData.recipes?.slice(0, 5).map((recipe, index) => (
              <li key={index}>
                <Link href="#" className="text-green-700 hover:underline">
                  {recipe}
                </Link>
              </li>
            ))}
          </ul>*/}

         {/* <Link href="#" className="font-semibold text-green-800 hover:underline">
            See all {productData.label} recipes ({productData.recipes?.length})
          </Link>*/}
           <h3 className="text-black-700 font-bold mb-2">
            About of {productData.label}
          </h3>
          <h3 className="text-green-700 font-medium mb-2">
            {productData.cuisines}
          </h3>
        </div>
      </motion.div>

      {/* product details */}
      <motion.div
        key={slug}
        className="md:flex md:gap-4 mt-4 bg-white shadow-md overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Ingredients Section */}
        <div className="md:w-1/3 p-4 border-r border-gray-200">
          <h3 className="text-xl font-bold text-green-700 mb-3">Ingredients</h3>
          <div className="grid grid-cols-2 gap-x-4 text-sm text-gray-800">
            <div className="space-y-1">
              <p className="font-semibold text-gray-600">Item Name</p>
              <ul className="space-y-1">
                {productData?.ingredients?.map((ing, index) => (
                  <li key={index}>{ing.item}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-gray-600">Quantity</p>
              <ul className="space-y-1">
                {productData?.ingredients?.map((ing, index) => (
                  <li key={index}>{ing.quantity}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Method Section */}
        <div className="md:w-2/3 p-4">
          <h3 className="text-xl font-bold text-green-700 mb-3">Method</h3>
          <ol className="list-decimal list-inside text-sm text-gray-800 space-y-1">
            {productData?.method?.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </motion.div>

      <motion.div
        key={slug}
        className="md:flex md:gap-4 mt-4 bg-white shadow-md overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
      <div className="md:w-1/3 p-4">
        <h3 className="text-xl font-bold text-green-700 mb-3">Nutrition Value</h3>
        <ol className="list-decimal list-inside text-sm text-gray-800 space-y-1">
            {productData?.nutrition?.map((item, index) => (
              <li key={index}>
                {item.label}
              </li>
            ))}
        </ol>
        </div>
      </motion.div>

      <h1 className="text-3xl font-bold mb-2 mt-4">Related recipes</h1>
      {/* product cards  */}
      <motion.div
        key={slug + "-cities"}
        className="flex flex-wrap gap-2 md:gap-4 md:py-4 py-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >

        {productData?.cities?.map((story, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden w-[calc(50%-4px)] md:w-[calc(25%-12px)] bg-white shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Link key={index} href={`/product-details/${story.title.replace(/\s+/g, '-')}`}>
              <div className="h-[100px] md:h-[165px] overflow-hidden">
                <MotionImage
                  src={`/${productData.category}/${story.img}`}
                  width={400} // or any fixed value
                  height={165}
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
                <p className="text-sm pt-1 pb-2 text-gray-600">FOOD</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}