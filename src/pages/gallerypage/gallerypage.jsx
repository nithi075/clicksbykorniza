import React, {
  useEffect,
  useState,
} from "react";

import {
  useParams,
  useNavigate,
  useLocation,
} from "react-router-dom";

import { motion } from "framer-motion";

import api from "../../services/api";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/footer";
import Packages from "../../components/packages/Packages";

import "./gallerypage.css";

const GalleryPage = () => {

  const { category } = useParams();

  const navigate = useNavigate();

  const location = useLocation();

  const [allImages, setAllImages] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [visibleCount, setVisibleCount] =
    useState(12);

  const queryParams =
    new URLSearchParams(
      location.search
    );

  const isClientView =
    queryParams.get("view") ===
    "client";

  /* ================= ANIMATION ================= */

  const fadeUp = {

    hidden: {
      opacity: 0,
      y: 40,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.7,
      },
    },
  };

  const staggerContainer = {

    hidden: {},

    visible: {

      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  /* ================= CATEGORY DATA ================= */

  const categoryData = {

    all: {
      title:
        "The Master Collection",

      desc:
        "Explore our premium photography stories.",
    },

    "traditional-wedding": {
      title:
        "Traditional Wedding",

      desc:
        "Beautiful traditional rituals captured forever.",
    },

    "destination-wedding": {
      title:
        "Destination Wedding",

      desc:
        "Luxury destination wedding memories.",
    },

    reception: {
      title: "Reception",

      desc:
        "Grand reception celebrations documented.",
    },

    "bridal-photography": {
      title:
        "Bridal Photography",

      desc:
        "Capturing timeless bridal elegance and beauty.",
    },

    "pre-wedding": {
      title:
        "Pre Wedding",

      desc:
        "Romantic cinematic love stories.",
    },

    maternity: {
      title:
        "Maternity Photography",

      desc:
        "Celebrating motherhood beautifully.",
    },

    "baby-shoots": {
      title:
        "Baby Photography",

      desc:
        "Capturing little smiles forever.",
    },

    bridal: {
      title:
        "Portrait Photography",

      desc:
        "Elegant portrait sessions.",
    },

    birthday: {
      title:
        "Birthday Photography",

      desc:
        "Capturing joyful birthday celebrations.",
    },

    engagement: {
      title:
        "Engagement Photography",

      desc:
        "Beautiful engagement moments captured forever.",
    },
  };

  /* ================= PACKAGE CHECK ================= */

  const showPackages = [

    "traditional-wedding",

    "destination-wedding",

    "reception",

    "bridal-photography",

    "pre-wedding",

    "birthday",

    "engagement",

  ].includes(category);

  /* ================= SCROLL ================= */

  useEffect(() => {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setVisibleCount(12);

  }, [category]);

  /* ================= FETCH ================= */

  useEffect(() => {

    const fetchGallery =
      async () => {

        try {

          setLoading(true);

          const res =
            await api.get(
              "/gallery/all"
            );

          setAllImages(
            res.data
          );

        } catch (error) {

          console.error(
            "Gallery Fetch Error:",
            error
          );

        } finally {

          setLoading(false);
        }
      };

    fetchGallery();

  }, []);

  /* ================= FILTER ================= */

  const filteredImages =

    category &&
    category !== "all"

      ? allImages.filter(
          (img) =>
            img.category
              ?.toLowerCase()
              .trim() ===
            category
              ?.toLowerCase()
              .trim()
        )

      : [];

  /* ================= LOAD MORE ================= */

  const handleViewMore = () => {

    setVisibleCount(
      (prev) => prev + 12
    );
  };

  return (

    <div className="gallery-page-container">

      <Navbar />

      <div className="gallery-main-wrapper">

        {/* ================= HEADER ================= */}

        <motion.header
          className="category-info"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >

          <span className="premium-label">
            Portfolio Collection
          </span>

          <h2>
            {categoryData[category]
              ?.title ||
              categoryData.all
                .title}
          </h2>

          <div className="accent-line"></div>

          <p className="category-desc">
            {categoryData[category]
              ?.desc ||
              categoryData.all
                .desc}
          </p>

        </motion.header>

        {/* ================= LOADING ================= */}

        {loading ? (

          <div className="loader-container">

            <p>
              Curating your experience...
            </p>

          </div>

        ) : !category ||
          category === "all" ? (

          /* ================= ALL COLLECTIONS ================= */

          <motion.div
            className="luxury-grid"

            variants={
              staggerContainer
            }

            initial="hidden"

            animate="visible"
          >

            {Object.keys(
              categoryData
            ).map(
              (key) =>
                key !== "all" && (

                  <motion.div
                    key={key}

                    className="collection-card"

                    variants={fadeUp}

                    whileHover={{
                      scale: 1.03,
                    }}

                    onClick={() =>
                      navigate(
                        `/galleryDetails/${key}`
                      )
                    }
                  >

                    <div className="img-box">

                      {allImages.find(
                        (img) =>
                          img.category
                            ?.toLowerCase()
                            .trim() ===
                          key
                            .toLowerCase()
                            .trim()
                      )?.imageUrl ? (

                        <img
                          src={
                            allImages.find(
                              (img) =>
                                img.category
                                  ?.toLowerCase()
                                  .trim() ===
                                key
                                  .toLowerCase()
                                  .trim()
                            )?.imageUrl
                          }
                          alt={key}
                        />

                      ) : (

                        <div className="empty-category-box">

                          <h4>
                            Coming Soon
                          </h4>

                        </div>
                      )}

                    </div>

                  </motion.div>
                )
            )}

          </motion.div>

        ) : (

          /* ================= DETAIL VIEW ================= */

          <motion.div
            className="luxury-grid"

            variants={
              staggerContainer
            }

            initial="hidden"

            animate="visible"
          >

            {filteredImages
              .slice(
                0,
                visibleCount
              )
              .map((image) => (

                <motion.div
                  key={image._id}

                  className="grid-item-detail"

                  variants={fadeUp}

                  whileHover={{
                    scale: 1.02,
                  }}
                >

                  <div className="img-wrapper">

                    <img
                      src={
                        image.imageUrl
                      }
                      alt={
                        image.title
                      }
                    />

                  </div>

                </motion.div>
              ))}

          </motion.div>
        )}

        {/* ================= LOAD MORE ================= */}

        {visibleCount <
          filteredImages.length && (

          <motion.div
            className="view-more-container"

            initial={{
              opacity: 0,
            }}

            animate={{
              opacity: 1,
            }}
          >

            <button
              className="view-more-btn"
              onClick={
                handleViewMore
              }
            >
              Load More
            </button>

          </motion.div>
        )}

        {/* ================= PACKAGES ================= */}

        {showPackages && (

          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.7,
            }}
          >

            <Packages
              category={category}
              showPrice={true}
            />

          </motion.div>
        )}

      </div>

      <Footer />

    </div>
  );
};

export default GalleryPage;