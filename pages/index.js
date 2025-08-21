import { useState } from "react";
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  
const MotionImage = motion.create(Image);

  return (
    <div>

      <motion.div
       className="flex items-center justify-between pt-1 md:pt-0 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
       >
        <MotionImage
          src="/home/title.jpg"
          width={400} // or any fixed value
          height={165}
          alt="SAMRIT"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="w-full max-h-[465px] object-cover"
          priority
        />
      </motion.div>

      {/* Text Box */}
      <motion.div
       className="md:absolute md:top-[24rem] bg-white p-4 hover:text-blue-700 md:m-5 w-[100%] md:w-[60%] md:mt-4"
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }}   
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h2 className="text-[28px] font-bold mb-4">Easy summer bowls</h2>
        <p className="hidden md:block text-[18px] mb-4">
          Quick and nourishing, these super bowls deserve a place on your midweek dinner rotation
        </p>
        <span className="uppercase text-sm font-medium">Collection</span>
      </motion.div>
     
      <motion.div
       className="flex flex-col md:flex-row gap-4 p-4 md:pt-8"
       initial={{ opacity: 0, y: 50 }} 
       animate={{ opacity: 1, y: 0 }}   
       transition={{ delay: 0.5, duration: 1 }}
      >

      
      <motion.div 
        className="bg-white w-full md:w-[60%] flex"
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }}   
        transition={{ delay: 0.5, duration: 1 }}
      >
        <Image
          src="/home/Brunch_club.jpg"
          width={400} 
          height={165}
          alt="Brunch club"
          className="w-[40%] md:w-[50%] object-cover max-h-[140px] md:max-h-[265px]"
        />
        <div className="p-3 md:p-4 flex flex-col justify-center md:justify-between md:w-[50%]">
          <h2 className="text-base md:text-xl font-bold">Brunch club</h2>
          <p className="hidden md:block text-gray-600 text-sm mt-1">
            Whether you&apos;re having mates over or feeding the family, these fun brunches will go down a storm
          </p>
          <span className="text-blue-500 font-medium text-xs md:text-sm mt-1 block">COLLECTION</span>
        </div>
      </motion.div>

      
      <motion.div 
        className="bg-white w-full md:w-[20%] flex md:block"
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }}   
        transition={{ delay: 0.5, duration: 1 }}
      >
        <Image
          src="/home/Best_barbecue_sides.jpg"
          width={400} // or any fixed value
          height={165}
          alt="Best barbecue sides"
          className="w-[40%] md:w-full object-cover max-h-[140px] md:max-h-[265px]"
        />
        <div className="p-3 md:p-4 flex flex-col justify-center md:justify-start">
          <h2 className="text-sm md:text-lg font-bold text-blue-500 md:text-black md:hover:text-blue-500 cursor-pointer">
            Best barbecue sides
          </h2>
          <span className="text-blue-500 font-medium text-xs md:text-sm mt-1 block">COLLECTION</span>
        </div>
      </motion.div>

     
      <motion.div 
        className="bg-white w-full md:w-[20%] flex md:block"
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }}   
        transition={{ delay: 0.5, duration: 1 }}
      >
        <Image
          src="/home/New_recipes.jpg"
          width={400} // or any fixed value
          height={165}
          alt="New recipes"
          className="w-[40%] md:w-full object-cover max-h-[140px] md:max-h-[265px]"
        />
        <div className="p-3 md:p-4 flex flex-col justify-center md:justify-start">
          <h2 className="text-sm md:text-lg font-bold">New recipes</h2>
          <span className="text-blue-500 font-medium text-xs md:text-sm mt-1 block">COLLECTION</span>
        </div>
      </motion.div>

    </motion.div>
<section className="py-3 px-2 md:py-6 md:px-4">
  <h2 className="pb-6 text-2xl">Top stories</h2>
  <motion.div 
  className="flex flex-wrap gap-2 md:gap-4" 
  initial={{ opacity: 0, y: 50 }} 
  animate={{ opacity: 1, y: 0 }}   
  transition={{ delay: 0.5, duration: 1 }}
  >
    {[
      {
        img: "story1.jpg",
        title: "Here’s what you need to know if you’re prediabetic",
      },
      {
        img: "story2.jpg",
        title: "I&apos;m a sports nutritionist; it&apos;s time to fall back in love with carbs",
      },
      {
        img: "story3.jpg",
        title: "8 energy-boosting foods you’ll actually want to eat",
      },
      {
        img: "story4.jpg",
        title: "Baked beans, bao buns and pancakes: How footballers stay fuelled",
      },
    ].map((story, index) => (
      <div key={index} className="w-[48.5%] md:w-[23.98%] bg-white">
        <Image src={`/home/${story.img}`} alt="{story.title}" width={400} height={165} className="w-full object-cover max-h-[140px] md:max-h-[150px]" />
        <div className="p-2">
          <h3 className="text-[15px] font-semibold leading-tight pb-8">{story.title}</h3>
          <p className="text-sm pt-1 pb-2">Story</p>
        </div>
      </div>
    ))}
  </motion.div>

  <h2 className="md:py-6 py-4 text-[18px] text-green-700 cursor-pointer">See all stories (662)</h2>
  <hr className="text-[#d5d5d5]" />
</section>
<section className="py-3 px-2 md:px-6 md:pb-8">
  <h2 className="pb-6 text-2xl">Try today&apos;s top recipes</h2>
  <motion.div
  className="flex flex-wrap gap-2 md:gap-4 md:px-14"
  initial={{ opacity: 0, y: 50 }} 
  animate={{ opacity: 1, y: 0 }}   
  transition={{ delay: 0.5, duration: 1 }}
  >
    {[
      {
        img: "Main_Course.jpg",
        title: "Slow cooker pulled chicken tacos",
        middle: "by Justine Pattison",
        footer: "Main Course",
      },
      {
        img: "Marcus_Wareing.jpg",
        title: "Lamb chops with Mediterranean stew",
        middle: "by Marcus Wareing",
        footer: "Main Course",
      },
      {
        img: "Georgina_Hayden.jpg",
        title: "Watermelon and feta salad",
        middle: "by Georgina Hayden",
        footer: "Light Meals & Snacks",
      },
      {
        img: "Wajeha_Husain.jpg",
        title: "Chocolate brownie and raspberry trifles",
        middle: "by Wajeha Husain",
        footer: "Desserts",
      },
      
    ].map((story, index) => (
      <div key={index} className="w-[48.5%] md:w-[23.5%] bg-white">
        <Image src={`/home/${story.img}`} alt="{story.title}" width={400} height={165} className="w-full object-cover max-h-[140px] md:max-h-[265px]" />
        <div className="p-2">
          <h3 className="text-[15px] font-semibold leading-tight pb-2">{story.title}</h3>
          <p className="text-sm pt-1 pb-8">{story.middle}</p>
          <p className="text-sm pt-1 pb-2">{story.footer}</p>
        </div>
      </div>
    ))}
  </motion.div> 
</section>
<section className="pb4-3 px-3 md:px-6 md:pb-8">
  <h2 className="pb-6 text-2xl">Recipes from programmes</h2>
  <motion.div 
  className="flex flex-wrap gap-2 md:gap-4"
  initial={{ opacity: 0, y: 50 }} 
  animate={{ opacity: 1, y: 0 }}   
  transition={{ delay: 0.5, duration: 1 }}
  >
    {[
      {
        img: "Saturday_Kitchen.jpg",
        title: "Saturday Kitchen",
        middle: "Sat 5th Jul",
      },
      {
        img: "Food_Tour.jpg",
        title: "Anna Haugh’s Big Irish Food Tour",
        middle: "Fri 23rd May",
      },
      {
        img: "Celebration_Kitchen.jpg",
        title: "Celebration Kitchen",
        middle: "Sun 11th May",
      },
    ].map((story, index) => (
      <div key={index} className="md:flex w-[48.9%] bg-white md:w-[32.46%]">
        <Image src={`/home/${story.img}`} alt="{story.title}" width={400} height={165} className="w-ful md:w-[45%] object-cover" />
        <div className="p-3 flex flex-col justify-center">
          <h3 className="text-[15px] font-semibold leading-tight pb-2">{story.title}</h3>
          <p className="text-sm">{story.middle}</p>
        </div>
      </div>
    ))}
  </motion.div>
  <hr className="text-[#d5d5d5] mt-8" />
</section>

<section className="px-2 py-3 md:py-6 md:px-4">
  <h2 className="pb-6 text-2xl">In season: Sardine</h2>
  <motion.div 
  className="flex flex-wrap gap-2 md:gap-4"
  initial={{ opacity: 0, y: 50 }} 
  animate={{ opacity: 1, y: 0 }}   
  transition={{ delay: 0.5, duration: 1 }}
  >
    {[
      {
        img: "Nadiya_Hussain.jpg",
        title: "Salsa verde side of salmon",
        middle: "by Nadiya Hussain",
        footer: "Main Course",
      },
      {
        img: "Adam_Byatt.jpg",
        title: "Sardine bolognese",
        middle: "by Adam Byatt",
        footer: "Main Course",
      },
      {
        img: "Priya_Tew.jpg",
        title: "Tinned sardines on toast",
        middle: "by Priya Tew",
        footer: "Light Meals & Snacks",
      },
      {
        img: "Hairy_Bikers.jpg",
        title: ">Sardines on toast with pickled onion",
        middle: "by The Hairy Bikers",
        footer: "Light Meals & Snacks",
      },
    ].map((story, index) => (
      <div key={index} className="w-[48.9%] md:w-[24%] bg-white">
        <Image src={`/home/${story.img}`} alt="{story.title}" width={400} height={165} className="w-full object-cover max-h-[140px] md:max-h-[265px]" />
        <div className="p-2">
          <h3 className="text-[15px] font-semibold leading-tight pb-2">{story.title}</h3>
          <p className="text-sm pt-1 pb-8">{story.middle}</p>
          <p className="text-sm pt-1 pb-2">{story.footer}</p>
        </div>
      </div>
    ))}
  </motion.div>
  <h2 className="md:py-6 text-[18px] text-green-700 cursor-pointer">See all sardine recipes (19)</h2>
</section>

{/* Meet the Chefs Section */}
<section className="px-2 py-3 md:py-6 md:px-4 mt-10">
  <h2 className="text-[25px] pb-4">Meet the chefs</h2>
  <motion.div 
  className="flex flex-wrap gap-2 md:gap-4 md:px-24"
  initial={{ opacity: 0, y: 50 }} 
  animate={{ opacity: 1, y: 0 }}   
  transition={{ delay: 0.5, duration: 1 }}
  >
    {[
      { name: "Karla Zazueta", img: "Karla_Zazueta.jpg" },
      { name: "Gizzi Erskine", img: "Gizzi_Erskine.jpg" },
      { name: "Karen Law", img: "Karen_Law.jpg" },
      { name: "Hasan Semay", img: "Hasan_Semay.jpg" },
    ].map((chef, index) => (
      <div key={index} className="w-[48.9%] md:w-[23.7%] bg-white">
        <Image src={`/home/${chef.img}`} width={400} height={165} alt={chef.name} className="w-full object-cover max-h-[200px]" />
        <p className="font-semibold mt-2 pb-8">{chef.name}</p>
        <p className="text-xs text-gray-500 pb-2">CHEFS</p>
      </div>
    ))}
  </motion.div>
</section>

{/* Nutritional Advice Section */}

<section className="pb-4 px-3 md:px-6 md:pb-8 pt-10">
  <h2 className="pb-6 text-2xl">Get nutritional advice and recipes</h2>
  <motion.div 
  className="flex flex-wrap gap-2 md:gap-4"
  initial={{ opacity: 0, y: 50 }} 
  animate={{ opacity: 1, y: 0 }}   
  transition={{ delay: 0.5, duration: 1 }}
  >
    {[
      { name: "Vegan", img: "Vegan.jpg" },
      { name: "Low calorie diet", img: "Low_calorie_diet.jpg" },
      { name: "Vegetarian", img: "Vegetarian.jpg" },
      { name: "Gluten free", img: "Gluten_free.jpg" },
      { name: "Healthy", img: "Healthy.jpg" },
      { name: "Dairy free", img: "Dairy_free.jpg" },
    ].map((item, index) => (
      <div key={index} className="md:flex w-[48.9%] bg-white md:w-[32.46%] h-[100px]">
        <Image src={`/home/${item.img}`} alt="{story.title}" width={400}  height={100} className="w-full h-[100px] md:w-[50%]  object-cover" />
        <div className="px-3 py-3 flex flex-col justify-between  flex-1">
          <h3 className="text-[15px] font-semibold leading-tight">{item.name}</h3>
          <p className="text-sm">DIETS</p>
        </div>
      </div>
    ))}
  </motion.div>
  <h2 className="py-6 mt-8 text-[18px] text-green-700 cursor-pointer">See all diets</h2>
</section>

{/* Learn how to cook */}
<section className="px-2 md:px-[20px] py-2 md:py-[30px] bg-black text-white">
  <h2 className="text-[22px] font-bold mb-[20px]">Learn how to cook</h2>

  <motion.div 
  className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-[16px]"
  initial={{ opacity:0,y:50 }}
  animate = {{ opacity:1,y:0 }}
  transition={{ delay:0.5,duration:1 }}
  >
    {/* Card */}
    {[
      {
        img: "How_to_boil_an_egg.jpg",
        title: "How to boil an egg",
      },
      {
        img: "How_to_cook_lentils.png",
        title: "How to cook lentils",
      },
      {
        img: "How_to_cook_pak_choi.jpg",
        title: "How to cook pak choi",
      },
      {
        img: "How_deglaze_a_pan.jpg",
        title: "How to deglaze a pan",
      },
    ].map((item, i) => (
      <div key={i} className="bg-white text-black">
        <div className="relative">
          <Image src={`/home/${item.img}`} alt="{story.title}" width={400} height={165}
            alt={item.title}
            className="w-full md:h-[160px] object-cover"
          />
          <button className="absolute bottom-0 left-0 bg-white text-black text-xl p-6 pt-4">
            ▶
          </button>
        </div>
        <div className="p-[12px]">
          <h3 className="text-[16px] font-bold pb-6">{item.title}</h3>
          <p className="text-[13px] text-gray-500 mt-[6px]">EASY</p>
        </div>
      </div>
    ))}
  </motion.div>

  <p className="mt-[18px] text-[14px]">
    See <span className="font-bold">all cooking techniques</span> (203)
  </p>
</section>

{/* Summer Recipes Banner */}
<motion.section
  className="text-white md:flex md:flex-col md:flex-row items-center p-[20px] bg-cover bg-center md:gap-48"
  initial={{ opacity:0,y:50 }}
  animate={{ opacity:1,y:0 }}
  transition={{ delay:0.5,duration:1}}
  style={{
    backgroundImage:
      "url(/home/summer.jpg)",
  }}
>
  <div className="mt-5 mb-5">
    <h2 className="text-[28px] font-bold">Summer</h2>
    <p className="text-[22px] leading-[28px]">Recipes</p>
    <p className="text-[12px] mt-[6px]">COLLECTION</p>
  </div>

  <button className="bg-white text-green-900 font-bold py-[8px] px-[16px] rounded">
    Get recipes
  </button>
</motion.section>



    </div>
  );
}
