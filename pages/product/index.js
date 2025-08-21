// pages/product/index.js

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const MotionImage = motion.create(Image);

const products = [
  {
    slug: 'Indian-Rustic-Food',
    name: 'Indian Rustic Food',
    image: 'title.jpg',
    description: 'Indian rustic food emphasizes fresh, locally sourced ingredients and simple cooking techniques, often highlighting traditional flavors passed down through generations.',
  },
  {
    slug: 'Nutrition-Consultancy',
    name: 'Nutrition Consultancy',
    image: 'title.jpg',
    description: 'Discover the power of traditional Indian ingredients in boosting your immunity naturally. Rooted in Ayurveda and regional wisdom, these recipes blend taste and health for everyday wellness.',
  },
  {
    slug: 'Indian-Immunity-Boasting-Recipes',
    name: 'Indian Immunity Boasting Recipes',
    image: 'title.webp',
    description: 'Promote a healthy heart the Indian way with wholesome recipes crafted to support cardiovascular wellness. Enjoy the richness of Indian cuisine with ingredients that are as good for your heart as they are for your taste buds.',
  },
  {
    slug: 'Indian-Heart-Healthy-Recipes',
    name: 'Indian Heart Healthy Recipes',
    image: 'title.jpg',
    description: 'Achieve your fitness goals with flavorful and nutritious Indian recipes tailored for weight loss. These meals are light, satisfying, and crafted to support fat-burning and portion control—without giving up on taste.',
  },
  {
    slug: 'Indian-Weight-Loss-Food-Recipes',
    name: 'Indian Weight Loss Food Recipes',
    image: 'title.jpg',
    description: 'Indian gluten-free diet recipes focus on naturally gluten-free ingredients like rice, lentils, chickpea flour, millet, and fresh vegetables, offering a rich blend of spices and regional flavors suitable for gluten-sensitive individuals.',
  },
  {
    slug: 'Indian-Gluten-Free-Dite-Food-Recipe',
    name: 'Indian Gluten Free Dite Food Recipe',
    image: 'title.jpg',
    description: 'Indian lactose-free desserts are made without dairy products like milk, cream, or ghee, using plant-based alternatives and naturally dairy-free ingredients to create traditional sweets that are safe for lactose-intolerant individuals.',
  },
  {
    slug: 'Indian-Lactic-Free-Desserts',
    name: 'Indian Lactic Free Desserts',
    image: 'title.jpg',
    description: 'Indian eatable raw foods are natural, unprocessed ingredients like fruits, vegetables, nuts, seeds, and certain sprouted legumes, often consumed for their high nutritional value and digestive benefits in holistic diets.',
  },
  {
    slug: 'Indian-Eatable-Raw-Foods',
    name: 'Indian Eatable Raw Foods',
    image: 'title.webp',
    description: 'Indian healthy meals combine balanced nutrition with traditional flavors, emphasizing whole grains, legumes, vegetables, and spices to support wellness without compromising on taste.',
  },
  {
    slug: 'Indian-Healthy-Meals',
    name: 'Indian Healthy Meals',
    image: 'title.jpg',
    description: "Indian kids' lunch box ideas focus on fun, tasty, and nutritious meals that are easy to eat, balanced in nutrients, and appeal to young taste buds, ensuring energy and concentration through the school day.",
  },
  {
    slug: 'Indian-Kids-Lunch-Box-Ideas',
    name: 'Indian Kids Lunch Box Ideas',
    image: 'title.webp',
    description: 'Creamy tomato-based paneer curry.',
  },
  {
    slug: 'Indian-Quick-Easy-Meal',
    name: 'Indian Quick-Easy Meal',
    image: 'title.jpg',
    description: 'Indian quick and easy meals are simple, time-saving dishes made with minimal ingredients and effort—perfect for busy schedules without compromising on authentic flavor.',
  },
  {
    slug: 'Indian-Healthy-Salads',
    name: 'Indian Healthy Salads',
    image: 'title.jpg',
    description: 'Indian healthy salads are nutrient-rich, flavorful combinations of fresh vegetables, sprouts, fruits, herbs, and spices that promote wellness and complement traditional meals.',
  },
  {
    slug: "World's-Soups",
    name: "World's Soups",
    image: 'title.jpg',
    description: 'Soups from around the world reflect diverse culinary traditions—ranging from light broths to hearty stews—made with local ingredients, cultural spices, and traditional cooking methods.',
  }
  
];

export default function ProductList() {
  return (
    <div className="p-2 md:p-4">
      <h1 className="text-3xl font-bold mb-6">Our Products List</h1>
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {products.map((product,index) => (
          <motion.div
  key={product.slug}
  className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: index * 0.1 }}
>
  <MotionImage
    src={`/products/${product.slug}/${product.image}`}
    width={400} // or any fixed value
    height={165}
    alt={product.name}
    className="w-full h-48 object-cover"
    whileHover={{ scale: 1.1 }}
    transition={{ duration: 0.5, ease: 'easeInOut' }}
  />
  <div className="flex flex-col justify-between flex-grow p-4">
    <div>
      <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
      <p className="text-gray-600">{product.description}</p>
    </div>
    <Link
      href={`/product/${product.slug}`}
      className="text-blue-600 hover:underline mt-4"
    >
      View Details
    </Link>
  </div>
</motion.div>

        ))}
      </motion.div>
    </div>
  );
}
