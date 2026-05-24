import React, {
  useEffect,
  useState
} from "react";

import {
  motion
} from "framer-motion";

import {
  useNavigate
} from "react-router-dom";

import axios from "axios";

import "./featured.css";

const Featured = () => {

  const [items, setItems] =
    useState([]);

  const navigate =
    useNavigate();

  /* =========================================
     FETCH FEATURED
  ========================================= */

  const getFeatured =
    async () => {

      try {

        const response =
          await axios.get(
            "https://korniza-backend.onrender.com/featured/all"
          );

        if (
          response.data &&
          response.data.items
        ) {

          const formatted =
            response.data.items.map(
              (
                item,
                index
              ) => ({

                id:
                  index + 1,

                title:
                  item.title ||
                  "Untitled",

                image:
                  item.image,

                category:
                  item.category ||
                  "all"

              })
            );

          setItems(
            formatted
          );

        }

      } catch (error) {

        console.log(
          "Featured Fetch Error:",
          error
        );

      }

    };

  useEffect(() => {

    getFeatured();

  }, []);

  /* =========================================
     NAVIGATE
  ========================================= */

  const goToCategory =
    (category) => {

      if (!category) return;

      navigate(
        `/galleryDetails/${encodeURIComponent(
          category
        )}`
      );

    };

  /* =========================================
     FORMAT CATEGORY
  ========================================= */

  const formatCategory =
    (text) => {

      return text

        ?.replaceAll(
          "-",
          " "
        )

        ?.replace(
          /\b\w/g,
          (char) =>
            char.toUpperCase()
        );

    };

  return (

    <section className="featured-section">

      {/* HEADER */}

      <div className="portfolio-header">

        <span className="tagline">

          Featured Stories

        </span>

        <h2>

          Cinematic Moments

        </h2>

      </div>

      {/* GRID */}

      <div className="bento-container">

        <motion.div

          className="bento-grid"

          initial={{
            opacity: 0,
            y: 40
          }}

          whileInView={{
            opacity: 1,
            y: 0
          }}

          transition={{
            duration: 0.7
          }}

          viewport={{
            once: true
          }}

        >

          {items.map(
            (
              item,
              index
            ) => (

              <motion.div

                key={item.id}

                className={`bento-item item-${index + 1}`}

                whileHover={{
                  scale: 1.02
                }}

                transition={{
                  duration: 0.35
                }}

              >

                {/* CLICKABLE CARD */}

                <div

                  className="featured-click"

                  onClick={() =>

                    goToCategory(
                      item.category
                    )

                  }

                >

                  {/* IMAGE */}

                  <div className="img-wrapper">

                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                    />

                  </div>

                  {/* OVERLAY */}

                  <div className="overlay">

                    <div className="text-content">

                      <div>

                        {/* TITLE */}

                        <h3>

                          {item.title}

                        </h3>

                        {/* CATEGORY */}

                        

                      </div>

                    </div>

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