import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import "./Hero.css";
// import hero1 from "../../assets/hero1.jpg";
import hero2 from "../../assets/hero2.jpg";
import OverlayForm from "../OverlayForm/OverlayForm";

export default function Hero() {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const heroImages = [hero2];

  /* Premium Cinematic Slider */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
    }, 10000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  /* Animations */
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.18, delayChildren: 0.3 } }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
  };

  const titleReveal = {
    hidden: { opacity: 0, y: 120 },
    show: { opacity: 1, y: 0, transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <>
      <section className="hero" id="hero">
        {/* Background */}
        <div className="hero-bg-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImage}
              className="hero-slide"
              style={{ backgroundImage: `url(${heroImages[currentImage]})` }}
              initial={{ scale: 1.08, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            />
          </AnimatePresence>
          <div className="hero-overlay"></div>
        </div>

        {/* Content */}
        <div className="hero-content">
          <motion.div className="content-inner" variants={container} initial="hidden" animate="show">
            <motion.span className="sub-title" variants={fadeUp}>
              Light, Legacy, Love
            </motion.span>

            <h1 className="main-heading">
              <motion.div className="title-line" variants={titleReveal}>Crafting Beautiful</motion.div>
              <motion.div className="title-line" variants={titleReveal}>
                <span className="italic-text">Memories</span> for your big day!
              </motion.div>
            </h1>

            <motion.p className="hero-description" variants={fadeUp}>
              Luxury wedding photography & cinematic films documenting emotions, traditions, and timeless love stories.
            </motion.p>

            {/* BUTTONS WITH STARS */}
            <motion.div className="hero-btns" variants={fadeUp}>
              
              {/* Stars added here */}
   {/* RATING SECTION */}
<div className="rating-container">
  <div className="stars-wrapper">
    {[...Array(5)].map((_, i) => (
      <FaStar key={i} size={16} />
    ))}
  </div>
  <span className="rating-text">Trusted by 100+ Clients</span>
</div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="btn-primary"
                onClick={() => document.getElementById("featured")?.scrollIntoView({ behavior: "smooth" })}
              >
                Explore Work <ArrowRight size={18} />
              </motion.button>

              <motion.button
                whileHover={{ opacity: 0.7 }}
                whileTap={{ scale: 0.96 }}
                className="btn-secondary"
                onClick={() => setShowForm(true)}
              >
                Book Consultation
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {showForm && <OverlayForm setShowForm={setShowForm} />}
    </>
  );
}