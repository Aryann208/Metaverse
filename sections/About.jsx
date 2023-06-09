'use client';
import { motion } from 'framer-motion';
import styles from '../styles';
import { TypingText } from '../components';
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
      <TypingText title="| About Metaverse" textStyles="text-center" />
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white "
      >
        <span className="font-extrabold text-white">Metaverse</span> is a new
        thing in the future, where you can <br /> enjoy the virtual world by
        feeling like its really
        <br /> real, you can feel what you feel in this <br /> metaverse world,
        because this is really the
        <br />
        <span className="font-extrabold text-white">
          madness of the metaverse
        </span>
        of today, using only
        <br />
        <span className="font-extrabold text-white">VR</span> devices you can
        easily explore <br />
        the metaverse world you want, turn <br /> your dreams into reality. Lets
        explore the madness
        <br /> of the metaverse by scrolling down
      </motion.p>
      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px] "
      />
    </motion.div>
  </section>
);

export default About;
