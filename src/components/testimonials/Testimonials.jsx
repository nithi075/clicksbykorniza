import { useState, useEffect } from "react";

import {
  motion,
  AnimatePresence
} from "framer-motion";

import axios from "axios";

import {
  FaChevronLeft,
  FaChevronRight,
  FaStar
} from "react-icons/fa";

import "./Testimonials.css";

export default function Testimonials() {

  const [index, setIndex] =
    useState(0);

  const [
    direction,
    setDirection
  ] = useState(0);

  const [reviews, setReviews] =
    useState([]);

  /* =========================================
     FETCH DATA
  ========================================= */

  const getTestimonials =
    async () => {

      try {

        const response =
          await axios.get(
            "https://korniza-backend.onrender.com/testimonial/all"
          );

        const formattedData =
          response.data.map(
            (item) => ({
              img:
                item.imageUrl,

              name:
                item.clientName,

              text:
                item.review
            })
          );

        setReviews(
          formattedData
        );

      } catch (error) {

        console.log(error);
      }
    };

  useEffect(() => {

    getTestimonials();

  }, []);

  /* =========================================
     AUTO SLIDE
  ========================================= */

  useEffect(() => {

    if (
      reviews.length === 0
    )
      return;

    const timer =
      setInterval(() => {

        nextSlide();

      }, 4000);

    return () =>
      clearInterval(timer);

  }, [index, reviews]);

  /* =========================================
     NEXT
  ========================================= */

  const nextSlide = () => {

    setDirection(1);

    setIndex((prev) =>

      prev + 1 ===
      reviews.length

        ? 0

        : prev + 1
    );
  };

  /* =========================================
     PREV
  ========================================= */

  const prevSlide = () => {

    setDirection(-1);

    setIndex((prev) =>

      prev === 0

        ? reviews.length - 1

        : prev - 1
    );
  };

  /* =========================================
     ANIMATION
  ========================================= */

  const variants = {

    enter: (direction) => ({

      x:
        direction > 0
          ? 200
          : -200,

      opacity: 0
    }),

    center: {

      x: 0,

      opacity: 1
    },

    exit: (direction) => ({

      x:
        direction < 0
          ? 200
          : -200,

      opacity: 0
    })
  };

  return (

    <section
      className="testimonials-section"
      id="testimonials"
    >

      {/* HEADING */}

      <motion.h2

        className="testimonial-heading"

        initial={{
          opacity: 0,
          y: 30
        }}

        whileInView={{
          opacity: 1,
          y: 0
        }}

        transition={{
          duration: 1
        }}

        viewport={{
          once: true
        }}

      >

      Trusted by Our Clients

      </motion.h2>

      {/* WRAPPER */}

      <div className="testimonial-wrapper">

        {/* LEFT ARROW */}

        <button
          className="arrow left-arrow"
          onClick={prevSlide}
        >

          <FaChevronLeft />

        </button>

        {/* CARD */}

        {reviews.length > 0 && (

          <AnimatePresence
            mode="wait"
            custom={direction}
          >

            <motion.div

              key={index}

              custom={direction}

              variants={variants}

              initial="enter"

              animate="center"

              exit="exit"

              transition={{
                duration: 0.6
              }}

              className="testimonial-card"
            >

              {/* IMAGE */}

              <div className="client-image">

                <img
                  src={
                    reviews[index]
                      .img
                  }
                  alt={
                    reviews[index]
                      .name
                  }
                />

              </div>

              {/* NAME */}

              <h3>

                {
                  reviews[index]
                    .name
                }

              </h3>

              {/* STARS */}

             
              {/* QUOTE */}

              <div className="quote">

                “

              </div>

              {/* TEXT */}

              <p>

                {
                  reviews[index]
                    .text
                }

              </p>

            </motion.div>

          </AnimatePresence>
        )}

        {/* RIGHT ARROW */}

        <button
          className="arrow right-arrow"
          onClick={nextSlide}
        >

          <FaChevronRight />

        </button>

      </div>

      {/* DOTS */}

      <div className="dots">

        {reviews.map(
          (_, i) => (

            <span

              key={i}

              className={`dot ${
                i === index
                  ? "active-dot"
                  : ""
              }`}

            />

          )
        )}

      </div>

    </section>
  );
}