// pages/product/index.js

import Link from 'next/link';
import { motion } from 'framer-motion';

const products = [
  {
    slug: 'Indian-Rustic-Food',
    name: 'Indian Rustic Food',
    image: 'https://images.slurrp.com/prod/articles/ikkt9s08w3a.webp',
    description: 'Indian rustic food emphasizes fresh, locally sourced ingredients and simple cooking techniques, often highlighting traditional flavors passed down through generations.',
  },
  {
    slug: 'Nutrition-Consultancy',
    name: 'Nutrition Consultancy',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRPARKOu430g4OlxWDwK7vgNNW43JCW-XUbQ&s',
    description: 'Discover the power of traditional Indian ingredients in boosting your immunity naturally. Rooted in Ayurveda and regional wisdom, these recipes blend taste and health for everyday wellness.',
  },
  {
    slug: 'Indian-Immunity-Boasting-Recipes',
    name: 'Indian Immunity Boasting Recipes',
    image: 'https://img.delicious.com.au/6HzlqtaR/del/2016/07/vermouth-mussels-with-olives-and-nettle-butter-33190-1.jpg',
    description: 'Promote a healthy heart the Indian way with wholesome recipes crafted to support cardiovascular wellness. Enjoy the richness of Indian cuisine with ingredients that are as good for your heart as they are for your taste buds.',
  },
  {
    slug: 'Indian-Heart-Healthy-Recipes',
    name: 'Indian Heart Healthy Recipes',
    image: 'https://www.mealpro.net/wp-content/uploads/2022/11/Chicken-Fajita-Plated.jpg',
    description: 'Achieve your fitness goals with flavorful and nutritious Indian recipes tailored for weight loss. These meals are light, satisfying, and crafted to support fat-burning and portion control—without giving up on taste.',
  },
  {
    slug: 'Indian-Weight-Loss-Food-Recipes',
    name: 'Indian Weight Loss Food Recipes',
    image: 'https://www.eatingwell.com/thmb/088YHsNmHkUQ7iNGP4375MiAXOY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/article_7866255_foods-you-should-eat-every-week-to-lose-weight_-04-d58e9c481bce4a29b47295baade4072d.jpg',
    description: 'Indian gluten-free diet recipes focus on naturally gluten-free ingredients like rice, lentils, chickpea flour, millet, and fresh vegetables, offering a rich blend of spices and regional flavors suitable for gluten-sensitive individuals.',
  },
  {
    slug: 'Indian-Gluten-Free-Dite-Food-Recipe',
    name: 'Indian Gluten Free Dite Food Recipe',
    image: 'https://www.thedailymeal.com/img/gallery/which-indian-dish-do-you-most-want-to-try-exclusive-survey/intro-1674072240.jpg',
    description: 'Indian lactose-free desserts are made without dairy products like milk, cream, or ghee, using plant-based alternatives and naturally dairy-free ingredients to create traditional sweets that are safe for lactose-intolerant individuals.',
  },
  {
    slug: 'Indian-Lactic-Free-Desserts',
    name: 'Indian Lactic Free Desserts',
    image: 'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/flourless_chocolate_cake_43623_16x9.jpg',
    description: 'Indian eatable raw foods are natural, unprocessed ingredients like fruits, vegetables, nuts, seeds, and certain sprouted legumes, often consumed for their high nutritional value and digestive benefits in holistic diets.',
  },
  {
    slug: 'Indian-Eatable-Raw-Foods',
    name: 'Indian Eatable Raw Foods',
    image: 'https://grazia.wwmindia.com/content/2019/oct/food41571904279.jpg',
    description: 'Indian healthy meals combine balanced nutrition with traditional flavors, emphasizing whole grains, legumes, vegetables, and spices to support wellness without compromising on taste.',
  },
  {
    slug: 'Indian-Healthy-Meals',
    name: 'Indian Healthy Meals',
    image: 'https://leaf.nutrisystem.com/wp-content/uploads/2017/01/indian-food.jpg',
    description: "Indian kids' lunch box ideas focus on fun, tasty, and nutritious meals that are easy to eat, balanced in nutrients, and appeal to young taste buds, ensuring energy and concentration through the school day.",
  },
  {
    slug: 'Indian-Kids-Lunch-Box-Ideas',
    name: 'Indian Kids Lunch Box Ideas',
    image: 'https://i0.wp.com/stanzaliving.wpcomstaging.com/wp-content/uploads/2022/04/1f6a1-shutterstock_1520215046-min.jpg',
    description: 'Creamy tomato-based paneer curry.',
  },
  {
    slug: 'Indian-Quick-Easy-Meal',
    name: 'Indian Quick-Easy Meal',
    image: 'https://www.tastingtable.com/img/gallery/strawberry-chicken-salad-recipe/l-intro-1638823285.jpg',
    description: 'Indian quick and easy meals are simple, time-saving dishes made with minimal ingredients and effort—perfect for busy schedules without compromising on authentic flavor.',
  },
  {
    slug: 'Indian-Healthy-Salads',
    name: 'Indian Healthy Salads',
    image: 'https://insanelygoodrecipes.com/wp-content/uploads/2021/07/Lentil-Salad-with-Cherry-Tomatoes-and-Onions.jpg',
    description: 'Indian healthy salads are nutrient-rich, flavorful combinations of fresh vegetables, sprouts, fruits, herbs, and spices that promote wellness and complement traditional meals.',
  },
  {
    slug: "World's-Soups",
    name: "World's Soups",
    image: 'https://media.cnn.com/api/v1/images/stellar/prod/210219165951-03-world-best-soups.jpg',
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
  <motion.img
    src={product.image}
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
