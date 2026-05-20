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

  const [loading, setLoading] =
    useState(true);

  /* ================= FETCH ================= */

  const getFeatured =
    async () => {

      try {

        const response =
          await axios.get(
            "https://korniza-backend.onrender.com/featured/all"
          );

        console.log(
          "FEATURED RESPONSE:",
          response.data
        );

        const data =
          response.data;

        /* ONLY TITLE FIXED */

        if (
          data &&
          data.featured &&
          data.featured.length > 0
        ) {

          const formatted =
            data.featured.map(
              (item, index) => ({

                id: index + 1,

                title:
                  item.title ||
                  "Featured Work",

                img:
                  item.image,

                class:
                  `item-${index + 1}`

              })
            );

          setItems(formatted);
        }

      } catch (error) {

        console.log(
          "Featured Fetch Error:",
          error
        );

      } finally {

        setLoading(false);
      }
    };

  useEffect(() => {

    getFeatured();

  }, []);

  /* ================= ANIMATION ================= */

  const containerVariants = {

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

      {loading ? (

        <div className="featured-loader">

          <p>
            Loading...
          </p>

        </div>

      ) : items.length === 0 ? (

        <div className="featured-loader">

          <p>
            No featured images found
          </p>

        </div>

      ) : (

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
                      src={item.img}

                      alt={item.title}

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
                        {item.title}
                      </p>

                    </div>

                  </div>

                </motion.div>
              )
            )}

          </motion.div>

        </div>
      )}

    </section>
  );
};

export default Featured;