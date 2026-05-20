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

import Testimonials from "../../components/testimonials/Testimonials";

import "./gallerypage.css";

const GalleryPage = () => {

  const { category } = useParams();

  const navigate = useNavigate();

  const location = useLocation();

  const [allImages, setAllImages] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [selectedImage, setSelectedImage] =
    useState(null);

  /* FIRST 8 IMAGES */

  const [visibleCount, setVisibleCount] =
    useState(8);

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

    "outdoor-shoot": {
      title:
        "Outdoor Shoot",

      desc:
        "Creative outdoor cinematic photography sessions.",
    },

    "model-shoots": {
      title:
        "Model Shoots",

      desc:
        "Stylish and professional model photography.",
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

    birthday: {
      title:
        "Birthday Photography",

      desc:
        "Capturing joyful birthday celebrations.",
    },

  };

  /* ================= SCROLL ================= */

  useEffect(() => {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setVisibleCount(8);

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

      : allImages;

  /* ================= LOAD MORE ================= */

  const handleViewMore = () => {

    setVisibleCount(
      (prev) => prev + 8
    );
  };

  return (

    <div className="gallery-page-container">

      <Navbar />

      <div className="gallery-main-wrapper">

        {/* ================= FILTER TABS ================= */}

        <div className="text-tabs-wrapper">

          <div className="text-tabs-scroll">

            {Object.keys(categoryData).map(
              (key) => (

                <div
                  key={key}

                  className={`nav-text-item ${
                    category === key
                      ? "active"
                      : ""
                  }`}

                  onClick={() =>
                    navigate(
                      `/galleryDetails/${key}`
                    )
                  }
                >

                  {key
                    .replace(/-/g, " ")
                    .toUpperCase()}

                </div>
              )
            )}

          </div>

        </div>

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
              categoryData.all.title}
          </h2>

          <div className="accent-line"></div>

          <p className="category-desc">
            {categoryData[category]
              ?.desc ||
              categoryData.all.desc}
          </p>

        </motion.header>

        {/* ================= LOADING ================= */}

        {loading ? (

          <div className="loader-container">

            <p>
              Curating your experience...
            </p>

          </div>

        ) : category === "all" ? (

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

                      onClick={() =>
                        setSelectedImage(
                          image.imageUrl
                        )
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
              View More
            </button>

          </motion.div>
        )}

        {/* ================= TESTIMONIALS ================= */}

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

          <Testimonials />

        </motion.div>

      </div>

      {/* ================= IMAGE OVERLAY ================= */}

      {
        selectedImage && (

          <div
            className="image-overlay"

            onClick={() =>
              setSelectedImage(null)
            }
          >

            <button
              className="overlay-close-btn"

              onClick={() =>
                setSelectedImage(null)
              }
            >

              ✕

            </button>

            <img
              src={selectedImage}

              alt="Preview"

              className="overlay-image"
            />

          </div>
        )
      }

      <Footer />

    </div>
  );
};

export default GalleryPage;