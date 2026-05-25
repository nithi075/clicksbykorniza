import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import "./Testimonials.css";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [selectedReview, setSelectedReview] = useState(null); // Overlay state

  const getTestimonials = async () => {
    try {
      const response = await axios.get("https://korniza-backend.onrender.com/testimonial/all");
      const formattedData = response.data.map((item) => ({
        img: item.imageUrl,
        name: item.clientName,
        text: item.review,
      }));
      setReviews(formattedData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTestimonials();
  }, []);

  useEffect(() => {
    if (reviews.length === 0) return;
    const timer = setInterval(() => nextSlide(), 10000);
    return () => clearInterval(timer);
  }, [index, reviews]);

  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1 === reviews.length ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleCardClick = (e) => {
    const cardWidth = e.currentTarget.offsetWidth;
    const clickX = e.nativeEvent.offsetX;
    
    // Naan right click-la irunthu, overlay open aaguratha "Shift" panna, 
    // Card-oda center part click panna mattum overlay open aagum
    // Left/Right side click panna slide aagum.
    if (clickX > (cardWidth / 3) && clickX < (cardWidth * 2 / 3)) {
        setSelectedReview(reviews[index]); // Center-la click panna Overlay open
    } else if (clickX > cardWidth / 2) {
        nextSlide();
    } else {
        prevSlide();
    }
  };

  const variants = {
    enter: (direction) => ({ x: direction > 0 ? 100 : -100, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({ x: direction < 0 ? 100 : -100, opacity: 0 })
  };

  return (
    <section className="testimonials-section" id="testimonials">
      <motion.h2 className="testimonial-heading">Trusted by Our Clients</motion.h2>

      <motion.div className="testimonial-wrapper" layout>
        <button className="arrow left-arrow" onClick={prevSlide}><FaChevronLeft /></button>
        
        <AnimatePresence mode="wait" custom={direction}>
          {reviews.length > 0 && (
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="testimonial-card"
              onClick={handleCardClick}
              style={{ cursor: "pointer" }}
            >
              <div className="client-image">
                <img src={reviews[index].img} alt={reviews[index].name} />
              </div>
              <h3>{reviews[index].name}</h3>
              <div className="quote">“</div>
              <p>{reviews[index].text}</p>
            </motion.div>
          )}
        </AnimatePresence>

        <button className="arrow right-arrow" onClick={nextSlide}><FaChevronRight /></button>
      </motion.div>

      {/* FULL SCREEN OVERLAY */}
      <AnimatePresence>
        {selectedReview && (
          <motion.div 
            className="testimonial-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedReview(null)}
          >
            <motion.div 
              className="overlay-card"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-btn" onClick={() => setSelectedReview(null)}><FaTimes /></button>
              <img src={selectedReview.img} alt={selectedReview.name} />
              <h3>{selectedReview.name}</h3>
              <p>{selectedReview.text}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="dots">
        {reviews.map((_, i) => (
          <span key={i} className={`dot ${i === index ? "active-dot" : ""}`} />
        ))}
      </div>
    </section>
  );
}