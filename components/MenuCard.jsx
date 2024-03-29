'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const MenuCard = ({ id, imgUrl, index, active }) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 1.0, 0.75)}
    className={`relative ${
      active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
    } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex`}
  >
    <img
      src={imgUrl}
      alt="planet-04"
      className="absolute w-full h-full object-cover rounded-[24px]"
    />
  </motion.div>
);

export default MenuCard;
