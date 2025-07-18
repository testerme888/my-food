import { useState } from "react";
import Image from 'next/image';

export default function Home() {
  

  return (
    <div>

      <div className="flex items-center justify-between pt-4 md:pt-0">
        <img
          src="https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/miso_salmon_rice_bowl_77368_16x9.jpg"
          alt="SAMRIT"
          className="w-full max-h-[465px] object-cover"
        />
      </div>

      {/* Text Box */}
      <div className="md:absolute md:top-[27rem] bg-white p-4 hover:text-blue-700 md:m-5 w-[100%] md:w-[60%] md:mt-4">
        <h2 className="text-[28px] font-bold mb-4">Easy summer bowls</h2>
        <p className="hidden md:block text-[18px] mb-4">
          Quick and nourishing, these super bowls deserve a place on your midweek dinner rotation
        </p>
        <span className="uppercase text-sm font-medium">Collection</span>
      </div>
     
      <div className="flex flex-col md:flex-row gap-4 p-4 md:pt-8">

      
      <div className="bg-white w-full md:w-[60%] flex">
        <img
          src="https://ichef.bbci.co.uk/food/ic/food_16x9_608/recipes/breakfast_quesadilla_37513_16x9.jpg"
          alt="Brunch club"
          className="w-[40%] md:w-[50%] object-cover max-h-[140px] md:max-h-[265px]"
        />
        <div className="p-3 md:p-4 flex flex-col justify-center md:justify-between md:w-[50%]">
          <h2 className="text-base md:text-xl font-bold">Brunch club</h2>
          <p className="hidden md:block text-gray-600 text-sm mt-1">
            Whether you're having mates over or feeding the family, these fun brunches will go down a storm
          </p>
          <span className="text-blue-500 font-medium text-xs md:text-sm mt-1 block">COLLECTION</span>
        </div>
      </div>

      
      <div className="bg-white w-full md:w-[20%] flex md:block">
        <img
          src="https://ichef.bbci.co.uk/food/ic/food_16x9_320/recipes/potato_green_bean_salad_67001_16x9.jpg"
          alt="Best barbecue sides"
          className="w-[40%] md:w-full object-cover max-h-[140px] md:max-h-[265px]"
        />
        <div className="p-3 md:p-4 flex flex-col justify-center md:justify-start">
          <h2 className="text-sm md:text-lg font-bold text-blue-500 md:text-black md:hover:text-blue-500 cursor-pointer">
            Best barbecue sides
          </h2>
          <span className="text-blue-500 font-medium text-xs md:text-sm mt-1 block">COLLECTION</span>
        </div>
      </div>

     
      <div className="bg-white w-full md:w-[20%] flex md:block">
        <img
          src="https://ichef.bbci.co.uk/food/ic/food_16x9_320/recipes/creamy_gochujang_pasta_59347_16x9.jpg"
          alt="New recipes"
          className="w-[40%] md:w-full object-cover max-h-[140px] md:max-h-[265px]"
        />
        <div className="p-3 md:p-4 flex flex-col justify-center md:justify-start">
          <h2 className="text-sm md:text-lg font-bold">New recipes</h2>
          <span className="text-blue-500 font-medium text-xs md:text-sm mt-1 block">COLLECTION</span>
        </div>
      </div>

    </div>
<section className="py-3 px-2 md:py-6 md:px-4">
  <h2 className="pb-6 text-2xl">Top stories</h2>
  <div className="flex flex-wrap gap-2 md:gap-4">
    {[
      {
        img: "https://ichef.bbci.co.uk/images/ic/320xn/p0lmm5jp.jpg",
        title: "Here’s what you need to know if you’re prediabetic",
      },
      {
        img: "https://ichef.bbci.co.uk/images/ic/320xn/p0ll83bk.jpg",
        title: "I'm a sports nutritionist; it's time to fall back in love with carbs",
      },
      {
        img: "https://ichef.bbci.co.uk/images/ic/320xn/p0ll87d3.jpg",
        title: "8 energy-boosting foods you’ll actually want to eat",
      },
      {
        img: "https://ichef.bbci.co.uk/images/ic/320xn/p0ljx8s6.jpg",
        title: "Baked beans, bao buns and pancakes: How footballers stay fuelled",
      },
    ].map((story, index) => (
      <div key={index} className="w-[48.5%] md:w-[23.98%] bg-white">
        <img src={story.img} className="w-full object-cover max-h-[140px] md:max-h-[265px]" />
        <div className="p-2">
          <h3 className="text-[15px] font-semibold leading-tight pb-8">{story.title}</h3>
          <p className="text-sm pt-1 pb-2">Story</p>
        </div>
      </div>
    ))}
  </div>

  <h2 className="md:py-6 py-4 text-[18px] text-green-700 cursor-pointer">See all stories (662)</h2>
  <hr className="text-[#d5d5d5]" />
</section>
<section className="py-3 px-2 md:px-6 md:pb-8">
  <h2 className="pb-6 text-2xl">Try today's top recipes</h2>
  <div className="flex flex-wrap gap-2 md:gap-4 md:px-14">
    {[
      {
        img: "https://ichef.bbci.co.uk/food/ic/food_16x9_320/recipes/slow_cooker_chicken_36183_16x9.jpg",
        title: "Slow cooker pulled chicken tacos",
        middle: "by Justine Pattison",
        footer: "Main Course",
      },
      {
        img: "https://ichef.bbci.co.uk/food/ic/food_16x9_320/recipes/lamb_chops_with_08914_16x9.jpg",
        title: "Lamb chops with Mediterranean stew",
        middle: "by Marcus Wareing",
        footer: "Main Course",
      },
      {
        img: "https://ichef.bbci.co.uk/food/ic/food_16x9_320/recipes/watermelonandfetasal_86516_16x9.jpg",
        title: "Watermelon and feta salad",
        middle: "by Georgina Hayden",
        footer: "Light Meals & Snacks",
      },
      {
        img: "https://ichef.bbci.co.uk/food/ic/food_16x9_320/recipes/chocolate_brownie_and_97513_16x9.jpg",
        title: "Chocolate brownie and raspberry trifles",
        middle: "by Wajeha Husain",
        footer: "Desserts",
      },
      
    ].map((story, index) => (
      <div key={index} className="w-[48.5%] md:w-[23.5%] bg-white">
        <img src={story.img} className="w-full object-cover max-h-[140px] md:max-h-[265px]" />
        <div className="p-2">
          <h3 className="text-[15px] font-semibold leading-tight pb-2">{story.title}</h3>
          <p className="text-sm pt-1 pb-8">{story.middle}</p>
          <p className="text-sm pt-1 pb-2">{story.footer}</p>
        </div>
      </div>
    ))}
  </div> 
</section>
<section className="pb4-3 px-3 md:px-6 md:pb-8">
  <h2 className="pb-6 text-2xl">Recipes from programmes</h2>
  <div className="flex flex-wrap gap-2 md:gap-4">
    {[
      {
        img: "https://ichef.bbci.co.uk/images/ic/320xn/p0lp3fg9.jpg",
        title: "Saturday Kitchen",
        middle: "Sat 5th Jul",
      },
      {
        img: "https://ichef.bbci.co.uk/images/ic/320xn/p0kbv81l.jpg",
        title: "Anna Haugh’s Big Irish Food Tour",
        middle: "Fri 23rd May",
      },
      {
        img: "https://ichef.bbci.co.uk/images/ic/320xn/p0l9qklv.jpg",
        title: "Celebration Kitchen",
        middle: "Sun 11th May",
      },
    ].map((story, index) => (
      <div key={index} className="md:flex w-[48.9%] bg-white md:w-[32.46%]">
        <img src={story.img} className="w-ful md:w-[45%] object-cover" />
        <div className="p-3 flex flex-col justify-center">
          <h3 className="text-[15px] font-semibold leading-tight pb-2">{story.title}</h3>
          <p className="text-sm">{story.middle}</p>
        </div>
      </div>
    ))}
  </div>
  <hr className="text-[#d5d5d5] mt-8" />
</section>

<section className="px-2 py-3 md:py-6 md:px-4">
  <h2 className="pb-6 text-2xl">In season: Sardine</h2>
  <div className="flex flex-wrap gap-2 md:gap-4">
    {[
      {
        img: "https://ichef.bbci.co.uk/food/ic/food_16x9_320/recipes/salsa_verde_side_of_06408_16x9.jpg",
        title: "Salsa verde side of salmon",
        middle: "by Nadiya Hussain",
        footer: "Main Course",
      },
      {
        img: "https://ichef.bbci.co.uk/food/ic/food_16x9_320/recipes/sardine_bolognese_26520_16x9.jpg",
        title: "Sardine bolognese",
        middle: "by Adam Byatt",
        footer: "Main Course",
      },
      {
        img: "https://ichef.bbci.co.uk/food/ic/food_16x9_320/recipes/tinned_sardines_on_toast_64022_16x9.jpg",
        title: "Tinned sardines on toast",
        middle: "by Priya Tew",
        footer: "Light Meals & Snacks",
      },
      {
        img: "https://ichef.bbci.co.uk/food/ic/food_16x9_320/recipes/fresh_sardines_on_toast_31826_16x9.jpg",
        title: ">Sardines on toast with pickled onion",
        middle: "by The Hairy Bikers",
        footer: "Light Meals & Snacks",
      },
    ].map((story, index) => (
      <div key={index} className="w-[48.9%] md:w-[24%] bg-white">
        <img src={story.img} className="w-full object-cover max-h-[140px] md:max-h-[265px]" />
        <div className="p-2">
          <h3 className="text-[15px] font-semibold leading-tight pb-2">{story.title}</h3>
          <p className="text-sm pt-1 pb-8">{story.middle}</p>
          <p className="text-sm pt-1 pb-2">{story.footer}</p>
        </div>
      </div>
    ))}
  </div>
  <h2 className="md:py-6 text-[18px] text-green-700 cursor-pointer">See all sardine recipes (19)</h2>
</section>

{/* Meet the Chefs Section */}
<section className="px-2 py-3 md:py-6 md:px-4 mt-10">
  <h2 className="text-[25px] pb-4">Meet the chefs</h2>
  <div className="flex flex-wrap gap-2 md:gap-4 md:px-24">
    {[
      { name: "Karla Zazueta", img: "https://ichef.bbci.co.uk//food/ic/food_16x9_320/chefs/karla_zazueta_16x9.jpg" },
      { name: "Gizzi Erskine", img: "https://ichef.bbci.co.uk//food/ic/food_16x9_320/chefs/gizzi_erskine_16x9.jpg" },
      { name: "Karen Law", img: "https://ichef.bbci.co.uk//food/ic/food_16x9_320/chefs/karen_ka_yan_law_16x9.jpg" },
      { name: "Hasan Semay", img: "https://ichef.bbci.co.uk//food/ic/food_16x9_320/chefs/hasan_semay_16x9.jpg" },
    ].map((chef, index) => (
      <div key={index} className="w-[48.9%] md:w-[23.7%] bg-white">
        <img src={chef.img} alt={chef.name} className="w-full object-cover max-h-[200px]" />
        <p className="font-semibold mt-2 pb-8">{chef.name}</p>
        <p className="text-xs text-gray-500 pb-2">CHEFS</p>
      </div>
    ))}
  </div>
</section>

{/* Nutritional Advice Section */}

<section className="pb-4 px-3 md:px-6 md:pb-8 pt-10">
  <h2 className="pb-6 text-2xl">Get nutritional advice and recipes</h2>
  <div className="flex flex-wrap gap-2 md:gap-4">
    {[
      { name: "Vegan", img: "https://ichef.bbci.co.uk/images/ic/320xn/p0bh2ln5.jpg" },
      { name: "Low calorie diet", img: "https://ichef.bbci.co.uk/images/ic/320xn/p0819m19.jpg" },
      { name: "Vegetarian", img: "https://ichef.bbci.co.uk/images/ic/320xn/p0bh2kkm.jpg" },
      { name: "Gluten free", img: "https://ichef.bbci.co.uk/images/ic/320xn/p0bh2ppy.jpg" },
      { name: "Healthy", img: "https://ichef.bbci.co.uk/images/ic/320xn/p0bh29s6.jpg" },
      { name: "Dairy free", img: "https://ichef.bbci.co.uk/images/ic/320xn/p085rz72.jpg" },
    ].map((item, index) => (
      <div key={index} className="md:flex w-[48.9%] bg-white md:w-[32.46%]">
        <img src={item.img} className="w-full md:w-[50%] object-cover" />
        <div className="px-3 py-3 flex flex-col justify-between  flex-1">
          <h3 className="text-[15px] font-semibold leading-tight">{item.name}</h3>
          <p className="text-sm">DIETS</p>
        </div>
      </div>
    ))}
  </div>
  <h2 className="py-6 text-[18px] text-green-700 cursor-pointer">See all diets</h2>
</section>

{/* Learn how to cook */}
<section className="px-2 md:px-[20px] py-2 md:py-[30px] bg-black text-white">
  <h2 className="text-[22px] font-bold mb-[20px]">Learn how to cook</h2>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-[16px]">
    {/* Card */}
    {[
      {
        img: "https://ichef.bbci.co.uk/images/ic/320xn/p0btckdr.jpg",
        title: "How to boil an egg",
      },
      {
        img: "https://ichef.bbci.co.uk/images/ic/320xn/p0k70ns8.png",
        title: "How to cook lentils",
      },
      {
        img: "https://ichef.bbci.co.uk/images/ic/320xn/p0k8d0ks.jpg",
        title: "How to cook pak choi",
      },
      {
        img: "https://ichef.bbci.co.uk/images/ic/320xn/p01lrhhj.jpg",
        title: "How to deglaze a pan",
      },
    ].map((item, i) => (
      <div key={i} className="bg-white text-black">
        <div className="relative">
          <img
            src={item.img}
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
  </div>

  <p className="mt-[18px] text-[14px]">
    See <span className="font-bold">all cooking techniques</span> (203)
  </p>
</section>

{/* Summer Recipes Banner */}
<section
  className="text-white md:flex md:flex-col md:flex-row items-center p-[20px] bg-cover bg-center md:gap-48"
  style={{
    backgroundImage:
      "url(https://food-images.files.bbci.co.uk/food/timed_promos/summer.jpg)",
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
</section>



    </div>
  );
}
