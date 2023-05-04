'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { menupng } from '../constants';
import { staggerContainer } from '../utils/motion';
import { MenuCard, TitleText, TypingText } from '../components';

const Menu = () => {
  const [active, setActive] = useState('world-2');

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="|想吃點什麼呢?" textStyles="text-center" />
        <TitleText
          title={<><br className="md:block hidden" />我們的主菜單</>}
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row lg:justify-center flex-col min-h-[70vh] gap-5">
          {menupng.map((world, index) => (
            <MenuCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Menu;
