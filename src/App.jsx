import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import "./App.css";

// Components
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Featured from "./components/featured/featured";
import About from "./components/About/About";
import Packages from "./components/packages/Packages";
import Testimonials from "./components/testimonials/Testimonials";
import Instagram from "./components/instagram/Instagram";
import Footer from "./components/footer/footer";
import Location from "./components/location/Location";
import FloatingChat from "./components/floating/floating";

// Pages
import Gallery from "./pages/Gallery";
import GalleryDetails from "./pages/gallerypage/gallerypage";

// Admin Pages
import GalleryUpload from "./pages/Admin/GalleryUpload";
import FeaturedUpload from "./pages/Admin/FeaturedUpload";
import TestimonialUpload from "./pages/Admin/TestimonialUpload";
import InstagramUpload from "./pages/Admin/InstagramUpload";
import Dashboard from "./pages/Admin/Dashboard";
import Banner from "./components/banner/Banner";
import OverlayForm from "./components/OverlayForm/OverlayForm";

function HomePage() {

  const [
    menuOpen,
    setMenuOpen,
  ] = useState(false);

  const [
  showForm,
  setShowForm
] = useState(false);

  return (
    <>

      {/* ================= HOME ================= */}

      <section id="home">

        <Navbar
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />

        <Hero />

      </section>

      {/* ================= GALLERY ================= */}

      <section id="gallery">

        <Gallery />

      </section>

      {/* ================= FEATURED ================= */}

      <section id="featured">

        <Featured />

      </section>

      {/* ================= ABOUT ================= */}

      <section id="about">

        <About />

        <Banner />

      </section>

      {/* ================= PACKAGES ================= */}

      <section id="packages">

        <Packages />

      </section>

      {/* ================= TESTIMONIALS ================= */}

      <section id="testimonials">

        <Testimonials />

      </section>

      {/* ================= INSTAGRAM ================= */}

      <section id="instagram">

        <Instagram />

      </section>

      {/* ================= LOCATION ================= */}

      <section id="location">

        <Location />

      </section>

      {/* ================= CONTACT ================= */}

      <section id="contact">

        <Footer />

      </section>

      {/* ================= FLOATING ================= */}

      <FloatingChat />

    </>
  );
}

function App() {

  return (

    <Routes>

      {/* ================= USER ROUTES ================= */}

      <Route
        path="/"
        element={<HomePage />}
      />

      <Route
        path="/gallery"
        element={<Gallery />}
      />

      {/* UPDATED ROUTES */}

      <Route
        path="/galleryDetails/:category"
        element={<GalleryDetails />}
      />

      

      {/* ================= ADMIN ROUTES ================= */}

      <Route
        path="/admin"
        element={<Dashboard />}
      />

      <Route
        path="/gallery-upload"
        element={<GalleryUpload />}
      />

      <Route
        path="/featured-upload"
        element={<FeaturedUpload />}
      />

      <Route
        path="/instagram-upload"
        element={<InstagramUpload />}
      />

      <Route
        path="/testimonial-upload"
        element={<TestimonialUpload />}
      />

    </Routes>
  );
}

export default App;
