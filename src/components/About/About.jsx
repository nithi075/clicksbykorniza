import "./About.css";
import coupleImg from "../../assets/about1.jpg";

import { motion } from "framer-motion";
import { useState } from "react";

export default function About() {

  const [showImage, setShowImage] = useState(false);

  return (
    <>

      <section className="about">

        {/* LEFT IMAGE */}
        <motion.div
          className="about-left"
          initial={{
            opacity: 0,
            x: -80,
            scale: 0.95
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            scale: 1
          }}
          transition={{
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1]
          }}
          viewport={{ once: true }}
        >

          <img
            src={coupleImg}
            alt="Clicks By Korniza"
            className="clickable-image"
            onClick={() => setShowImage(true)}
          />

          <div className="fade-overlay"></div>

        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          className="about-right"
          initial={{
            opacity: 0,
            y: 60
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 1.2,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1]
          }}
          viewport={{ once: true }}
        >

          <motion.span
            className="about-small"
            initial={{
              opacity: 0,
              letterSpacing: "20px"
            }}
            whileInView={{
              opacity: 1,
              letterSpacing: "8px"
            }}
            transition={{
              duration: 1
            }}
            viewport={{ once: true }}
          >
            ABOUT US
          </motion.span>

          <motion.h2
            className="about-title"
            initial={{
              opacity: 0,
              y: 40
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 1,
              delay: 0.3
            }}
            viewport={{ once: true }}
          >
            Every Frame Tells a <span>Story</span>
          </motion.h2>

          <motion.p
            className="about-sub"
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 1,
              delay: 0.5
            }}
            viewport={{ once: true }}
          >
            Timeless, heartfelt photography that celebrates love in its purest form.
          </motion.p>

          <motion.p
            className="about-text"
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 1,
              delay: 0.7
            }}
            viewport={{ once: true }}
          >
            At Clicks By Korniza, we specialize in creating soulful imagery that
            captures the essence of love and emotion. Whether it’s a wedding,
            engagement, or a special celebration, our passion lies in preserving
            the real, raw, and beautiful moments that make your story unforgettable.

            <br /><br />

            We don’t just take photographs — we craft visual stories that reflect
            the romance, happiness, and connection shared between two hearts.
            With an artistic approach and a personal touch, every image is designed
            to feel authentic, elegant, and uniquely yours.

            <br /><br />

            Our mission is simple: to celebrate your love story through stunning,
            timeless photography that you will cherish for a lifetime.
          </motion.p>

        </motion.div>

      </section>

      {/* IMAGE OVERLAY */}
      {showImage && (
        <div
          className="image-modal"
          onClick={() => setShowImage(false)}
        >
          <img
            src={coupleImg}
            alt="Fullscreen"
            className="modal-image"
          />
        </div>
      )}

    </>
  );
}