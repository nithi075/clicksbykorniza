import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
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

  // Fetch testimonials from backend
  const getTestimonials =
    async () => {
      try {
        const response =
          await axios.get(
            "http://localhost:5000/testimonial/all"
          );

        const formattedData =
          response.data.map(
            (item) => ({
              img: item.imageUrl,
              title:
                item.clientName,
              author:
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

  // Auto-slide every 4 seconds
  useEffect(() => {
    if (
      reviews.length === 0
    )
      return;

    const timer =
      setInterval(() => {
        nextStep();
      }, 4000);

    return () =>
      clearInterval(timer);
  }, [index, reviews]);

  const nextStep = () => {
    setDirection(1);

    setIndex((prev) =>
      prev + 1 ===
      reviews.length
        ? 0
        : prev + 1
    );
  };

  // Animation variants
  const variants = {
    enter: (
      direction
    ) => ({
      x:
        direction > 0
          ? 1000
          : -1000,
      opacity: 0,
      scale: 0.9
    }),

    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },

    exit: (
      direction
    ) => ({
      zIndex: 0,
      x:
        direction < 0
          ? 1000
          : -1000,
      opacity: 0,
      scale: 0.9
    })
  };

  return (
    <section
      className="testimonials"
      id="testimonials"
    >
      <motion.div
        className="testimonials-header"
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
        <p>
          TESTIMONIALS
        </p>

        <h2>
          Client{" "}
          <span>
            Stories
          </span>
        </h2>
      </motion.div>

      <div className="slider-container">
        <div className="slider-content">
          {reviews.length >
            0 && (
            <AnimatePresence
              initial={
                false
              }
              custom={
                direction
              }
              mode="wait"
            >
              <motion.div
                key={index}
                custom={
                  direction
                }
                variants={
                  variants
                }
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: {
                    type:
                      "spring",
                    stiffness: 300,
                    damping: 30
                  },
                  opacity: {
                    duration: 0.6
                  }
                }}
                className="journal-card featured-slide"
              >
                <div className="journal-img-box">
                  <img
                    src={
                      reviews[
                        index
                      ].img
                    }
                    alt={
                      reviews[
                        index
                      ].title
                    }
                  />

                  <div className="floating-title-box">
                    <h3 className="card-title">
                      {
                        reviews[
                          index
                        ]
                          .title
                      }
                    </h3>

                    <span className="card-author">
                      {
                        reviews[
                          index
                        ]
                          .author
                      }
                    </span>
                  </div>
                </div>

                <div className="card-body">
                  <p className="card-text">
                    "
                    {
                      reviews[
                        index
                      ].text
                    }
                    "
                  </p>

                  <div className="card-footer">
                    <div className="dots">
                      {reviews.map(
                        (
                          _,
                          i
                        ) => (
                          <span
                            key={
                              i
                            }
                            className={`dot ${
                              i ===
                              index
                                ? "active"
                                : ""
                            }`}
                          />
                        )
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </section>
  );
}