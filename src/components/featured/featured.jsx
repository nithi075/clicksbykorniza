import React, {
  useEffect,
  useState
} from "react";

import { motion } from "framer-motion";

import axios from "axios";

import "./featured.css";

const Featured = () => {
  const [items, setItems] =
    useState([]);

  // Fetch featured data
  const getFeatured =
    async () => {
      try {
        const response =
          await axios.get(
            "http://localhost:5000/featured/all"
          );

        // Backend returns:
        // {
        //   title,
        //   images:[]
        // }

        const data =
          response.data;

        if (
          data.images &&
          data.images.length >
            0
        ) {
          const formatted =
            data.images.map(
              (
                img,
                index
              ) => ({
                id:
                  index + 1,
                title:
                  data.title,
                img,
                class: `item-${
                  index + 1
                }`
              })
            );

          setItems(
            formatted
          );
        }
      } catch (error) {
        console.log(error);
      }
    };

  useEffect(() => {
    getFeatured();
  }, []);

  // Parent Animation
  const containerVariants =
    {
      hidden: {
        opacity: 0
      },

      visible: {
        opacity: 1,

        transition: {
          staggerChildren: 0.2
        }
      }
    };

  // Card Animation
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.8,
        ease: [
          0.16,
          1,
          0.3,
          1
        ]
      }
    }
  };

  return (
    <section className="featured-section">
      <motion.div
        className="portfolio-header"
        initial={{
          opacity: 0,
          y: -20
        }}
        whileInView={{
          opacity: 1,
          y: 0
        }}
        viewport={{
          once: true
        }}
        transition={{
          duration: 1
        }}
      >
        <span className="tagline">
          Portfolio
        </span>

        <h2>
          Our Recent Works
        </h2>
      </motion.div>

      <div className="bento-container">
        <motion.div
          className="bento-grid"
          variants={
            containerVariants
          }
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2
          }}
        >
          {items.map(
            (item) => (
              <motion.div
                key={item.id}
                className={`bento-item ${item.class}`}
                variants={
                  cardVariants
                }
                whileHover={{
                  scale: 0.98
                }}
              >
                <div className="img-wrapper">
                  <motion.img
                    src={
                      item.img
                    }
                    alt={
                      item.title
                    }
                    whileHover={{
                      scale: 1.1
                    }}
                    transition={{
                      duration: 0.6
                    }}
                  />
                </div>

                <div className="overlay">
                  <div className="text-content">
                    <p>
                      {
                        item.title
                      }
                    </p>
                  </div>

                  <div className="arrow-btn">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line
                        x1="7"
                        y1="17"
                        x2="17"
                        y2="7"
                      ></line>

                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                </div>
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Featured;