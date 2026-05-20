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

  const getFeatured =
    async () => {

      try {

        const response =
          await axios.get(
            "https://korniza-backend.onrender.com/featured/all"
          );

        const data =
          response.data;

        if (
          data &&
          data.items &&
          data.items.length > 0
        ) {

          const formatted =
            data.items.map(
              (
                item,
                index
              ) => ({

                id:
                  index + 1,

                title:
                  item.title,

                img:
                  item.image,

                class:
                  `item-${index + 1}`
              })
            );

          setItems(formatted);
        }

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }
    };

  useEffect(() => {

    getFeatured();

  }, []);

  return (

    <section className="featured-section">

      <div className="bento-container">

        <motion.div
          className="bento-grid"
        >

          {items.map(
            (item) => (

              <motion.div
                key={item.id}
                className={`bento-item ${item.class}`}
              >

                <div className="img-wrapper">

                  <img
                    src={item.img}
                    alt={item.title}
                  />

                </div>

                <div className="overlay">

                  <div className="text-content">

                    <h3>
                      {item.title}
                    </h3>

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