// pages/budget/index.js

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ProductList() {
  return (
  		<div>
  			<motion.section 
  				className="p-2 md:p-4 bg-white"
  				initial={{ opacity: 0, y: 30 }}
		        animate={{ opacity: 1, y: 0 }}
		        transition={{ duration: 0.8, ease: 'easeOut' }}
  			>
	  			<h2 className="text-4xl text-black/800 font-medium">
	  			Budget recipes and advice
	  			</h2>
  			</motion.section>
  		</div>
  	);
}