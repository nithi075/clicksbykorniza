import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import "./Hero.css";

import hero1 from "../../assets/hero1.jpg";
import hero2 from "../../assets/hero2.jpg";
import hero3 from "../../assets/hero3.jpg";

import OverlayForm from "../OverlayForm/OverlayForm";

export default function Hero() {

  const navigate = useNavigate();

  /* =========================================
     OVERLAY FORM STATE
  ========================================= */

  const [showForm, setShowForm] = useState(false);

  const [currentImage, setCurrentImage] = useState(0);

  const heroImages = [
    hero1,
    hero2,
    hero3
  ];

  /* =========================================
     PREMIUM CINEMATIC SLIDER
  ========================================= */

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentImage((prev) =>
        prev === heroImages.length - 1
          ? 0
          : prev + 1
      );

    }, 6500);

    return () => clearInterval(interval);

  }, [heroImages.length]);

  /* =========================================
     STAGGER ANIMATION
  ========================================= */

  const container = {

    hidden: {},

    show: {

      transition: {

        staggerChildren: 0.18,
        delayChildren: 0.3

      }

    }

  };

  const fadeUp = {

    hidden: {

      opacity: 0,
      y: 40

    },

    show: {

      opacity: 1,
      y: 0,

      transition: {

        duration: 1.2,
        ease: [0.16, 1, 0.3, 1]

      }

    }

  };

  const titleReveal = {

    hidden: {

      opacity: 0,
      y: 120

    },

    show: {

      opacity: 1,
      y: 0,

      transition: {

        duration: 1.5,
        ease: [0.16, 1, 0.3, 1]

      }

    }

  };

  return (

    <>

      <section className="hero" id="hero">

        {/* =========================================
            BACKGROUND
        ========================================= */}

        <div className="hero-bg-container">

          <AnimatePresence mode="wait">

            <motion.div

              key={currentImage}

              className="hero-slide"

              style={{
                backgroundImage:
                `url(${heroImages[currentImage]})`
              }}

              initial={{
                scale: 1.08,
                opacity: 0
              }}

              animate={{
                scale: 1,
                opacity: 1
              }}

              exit={{
                opacity: 0
              }}

              transition={{
                duration: 2,
                ease: [0.16, 1, 0.3, 1]
              }}

            />

          </AnimatePresence>

          <div className="hero-overlay"></div>

        </div>

        {/* =========================================
            CONTENT
        ========================================= */}

        <div className="hero-content">

          <motion.div

            className="content-inner"

            variants={container}

            initial="hidden"

            animate="show"

          >

            {/* SUB TITLE */}

            <motion.span

              className="sub-title"

              variants={fadeUp}

            >

              Light, Legacy, Love

            </motion.span>

            {/* MAIN TITLE */}

            <h1 className="main-heading">

              <motion.div
                className="title-line"
                variants={titleReveal}
              >

                Crafting Beautiful

              </motion.div>

              <motion.div
                className="title-line"
                variants={titleReveal}
              >

                <span className="italic-text">
                  Memories
                </span>

                {" "}for a big day!

              </motion.div>

            </h1>

            {/* DESCRIPTION */}

            <motion.p

              className="hero-description"

              variants={fadeUp}

            >

              Luxury wedding photography &
              cinematic films documenting
              emotions, traditions, and timeless love stories.

            </motion.p>

            {/* BUTTONS */}

            <motion.div

              className="hero-btns"

              variants={fadeUp}

            >

              {/* PRIMARY BUTTON */}

           <motion.button

  whileHover={{
    scale: 1.05
  }}

  whileTap={{
    scale: 0.96
  }}

  className="btn-primary"

  onClick={() => {

    const section =
      document.getElementById("featured");

    section?.scrollIntoView({
      behavior: "smooth"
    });

  }}

>

  Explore Work

  <ArrowRight size={18} />

</motion.button>

              {/* BOOK CONSULTATION */}

              <motion.button

                whileHover={{
                  opacity: 0.7
                }}

                whileTap={{
                  scale: 0.96
                }}

                className="btn-secondary"

                onClick={() =>
                  setShowForm(true)
                }

              >

                Book Consultation

              </motion.button>

            </motion.div>

          </motion.div>

        </div>

      </section>

      {/* =========================================
          OVERLAY FORM
      ========================================= */}

      {
        showForm && (

          <OverlayForm
            setShowForm={setShowForm}
          />

        )
      }

    </>

  );
}