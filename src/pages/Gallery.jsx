import React, {
  useEffect,
  useState
} from "react";

import {
  motion,
  AnimatePresence
} from "framer-motion";

import {
  useNavigate
} from "react-router-dom";

import "./Gallery.css";

import wedding from "../assets/img2.jpg";
import wedding2 from "../assets/img6.jpg";
import couple from "../assets/img3.jpg";
import portrait from "../assets/img4.jpg";
import candid from "../assets/img5.jpg";

export default function Gallery() {

  const navigate =
    useNavigate();

  /* =========================================
     DATA
  ========================================= */

  const items = [

    {
      title:
        "Baby Shower",

      category:
        "Celebrations",

      route:
        "baby-shoots",

      img:
        wedding2,

      description:
        "Beautiful baby shower memories filled with joy, love, and family emotions."
    },

    {
      title:
        "Wedding Moments",

      category:
        "Luxury Weddings",

      route:
        "traditional-wedding",

      img:
        wedding,

      description:
        "Capturing timeless wedding rituals, emotions, and luxurious celebrations."
    },

    {
      title:
        "Couple Moments",

      category:
        "Love Stories",

      route:
        "outdoor-shoot",

      img:
        couple,

      description:
        "Romantic outdoor couple stories crafted with cinematic elegance."
    },

    {
      title:
        "Portrait Studio",

      category:
        "Portraits",

      route:
        "model-shoots",

      img:
        portrait,

      description:
        "Creative portrait sessions with premium lighting and editorial styling."
    },

    {
      title:
        "Bride Photography",

      category:
        "Moments",

      route:
        "bridal-photography",

      img:
        candid,

      description:
        "Elegant bridal portraits capturing grace, beauty, and emotions."
    }

  ];

  /* =========================================
     ACTIVE CARD
  ========================================= */

  const [
    activeIndex,
    setActiveIndex
  ] = useState(1);

  /* =========================================
     AUTO SLIDE
  ========================================= */

  useEffect(() => {

    const interval =
      setInterval(() => {

        setActiveIndex((prev) =>

          prev ===
          items.length - 1

            ? 0

            : prev + 1
        );

      }, 4000);

    return () =>
      clearInterval(interval);

  }, [items.length]);

  /* =========================================
     POSITION LOGIC
  ========================================= */

  const getPosition = (
    index
  ) => {

    const total =
      items.length;

    let position =
      index - activeIndex;

    /* loop effect */

    if (
      position <
      -total / 2
    ) {

      position += total;
    }

    if (
      position >
      total / 2
    ) {

      position -= total;
    }

    return position;
  };

  /* =========================================
     NAVIGATION
  ========================================= */

  const handleNavigate = (
    route
  ) => {

    navigate(
      `/galleryDetails/${route}`
    );
  };

  return (

    <section
      className="portfolio"
      id="portfolio"
    >

      <div className="portfolio-wrapper">

        {/* =========================================
           HEADER
        ========================================= */}

        <motion.div

          className="portfolio-header"

          initial={{
            opacity: 0,
            y: 40
          }}

          whileInView={{
            opacity: 1,
            y: 0
          }}

          transition={{
            duration: 1.2,
            ease: [
              0.16,
              1,
              0.3,
              1
            ]
          }}

          viewport={{
            once: true
          }}

        >

          <span className="p-tag">

            CURATED MOMENTS

          </span>

          <h2 className="portfolio-title">

            Timeless Frames &
            <br />

            <span>

              Editorial Stories

            </span>

          </h2>

          <p className="p-sub">

            Explore our curated
            collection of cinematic
            wedding storytelling,
            luxury celebrations,
            and emotional moments.

          </p>

        </motion.div>

        {/* =========================================
           SLIDER
        ========================================= */}

        <div className="portfolio-slider">

          {items.map(
            (
              item,
              index
            ) => {

              const position =
                getPosition(
                  index
                );

              const isActive =
                index ===
                activeIndex;

              return (

                <motion.div

                  key={index}

                  className={`portfolio-card ${
                    isActive
                      ? "active"
                      : ""
                  }`}

                  drag="x"

                  dragConstraints={{
                    left: 0,
                    right: 0
                  }}

                  dragElastic={0.08}

                  onDragEnd={(
                    event,
                    info
                  ) => {

                    if (
                      info.offset.x < -80
                    ) {

                      setActiveIndex(
                        (prev) =>

                          prev ===
                          items.length - 1

                            ? 0

                            : prev + 1
                      );
                    }

                    if (
                      info.offset.x > 80
                    ) {

                      setActiveIndex(
                        (prev) =>

                          prev === 0

                            ? items.length - 1

                            : prev - 1
                      );
                    }

                  }}

                  animate={{

                    x:

                      position ===
                      0

                        ? "0%"

                        : position <
                          0

                        ? "-105%"

                        : "105%",

                    scale:

                      isActive
                        ? 1
                        : 0.82,

                    rotate:

                      position < 0
                        ? -6
                        : position >
                          0
                        ? 6
                        : 0,

                    opacity:

                      Math.abs(
                        position
                      ) > 1
                        ? 0
                        : 1,

                    filter:

                      isActive
                        ? "blur(0px)"
                        : "blur(1px)"
                  }}

                  transition={{

                    duration: 1.2,

                    ease: [
                      0.16,
                      1,
                      0.3,
                      1
                    ]
                  }}

                  style={{

                    zIndex:

                      isActive
                        ? 10
                        : 1
                  }}

                  onClick={() => {

                    if (
                      isActive
                    ) {

                      handleNavigate(
                        item.route
                      );

                    } else {

                      setActiveIndex(
                        index
                      );
                    }
                  }}

                >

                  {/* =========================================
                     IMAGE
                  ========================================= */}

                  <div className="card-image-wrap">

                    <img
                      src={
                        item.img
                      }
                      alt={
                        item.title
                      }
                    />

                    <div className="card-overlay"></div>

                  </div>

                </motion.div>
              );
            }
          )}

        </div>

        {/* =========================================
           DETAILS
        ========================================= */}

        <AnimatePresence
          mode="wait"
        >

          <motion.div

            key={activeIndex}

            className="active-details"

            initial={{
              opacity: 0,
              y: 40
            }}

            animate={{
              opacity: 1,
              y: 0
            }}

            exit={{
              opacity: 0,
              y: -20
            }}

            transition={{
              duration: 0.8,
              ease: [
                0.16,
                1,
                0.3,
                1
              ]
            }}

          >

            <span className="active-category">

              {
                items[
                  activeIndex
                ].category
              }

            </span>

            <h3>

              {
                items[
                  activeIndex
                ].title
              }

            </h3>

            <p>

              {
                items[
                  activeIndex
                ].description
              }

            </p>

            <button

              className="portfolio-btn"

              onClick={() =>
                handleNavigate(
                  items[
                    activeIndex
                  ].route
                )
              }

            >

              VIEW FULL GALLERY

            </button>

          </motion.div>

        </AnimatePresence>

      </div>

    </section>

  );
}