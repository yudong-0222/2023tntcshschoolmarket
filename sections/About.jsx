'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| ABOUT US 關於我們" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">2023 南大附中園遊會🎯</span> 
        <br/>我們一年10班在<span className="font-extrabold text-white">攤位29號</span> 
        <br/>為你製作美味的 <span className="font-extrabold text-white">吐司串!</span>🍞
        <br/>還有精美製作的 <span className="font-extrabold text-white">手工餅乾 吐司邊棒棒糖!</span>🍪
        <br/><span className="font-extrabold text-white">吐司串!</span>🍞有多種口味!
        <br/>往下預覽不同的口味! 震撼你的味蕾🛒
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
