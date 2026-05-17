import React from "react";
import { motion } from "framer-motion";

import videoSrc from "../../assets/video2.mp4";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="cinematic-banner">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="banner-video"
      >
        <source
          src={videoSrc}
          type="video/mp4"
        />
      </video>

      {/* Overlay Content */}
      <div className="banner-overlay">

        {/* Small Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut"
          }}
        >
          Social Media Management Company
        </motion.p>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: "easeOut"
          }}
        >
          Let's Make Every Pixel Count
        </motion.h2>

        {/* Description */}
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.4,
            ease: "easeOut"
          }}
        >
          Working for 10+ Brands <br />
          Few slots available! <br />
          Work Together & Grow Together ⬇️
        </motion.span>

        {/* Button */}
        <motion.a
          href="https://yourwebsite.com"
          target="_blank"
          rel="noreferrer"

          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.6,
            ease: "easeOut"
          }}

          whileHover={{
            scale: 1.05,
            y: -2
          }}

          whileTap={{
            scale: 0.96
          }}
        >
          Let's Work Together
        </motion.a>

      </div>

    </section>
  );
};

export default Banner;