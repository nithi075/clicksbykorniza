import React, {
  useState
} from "react";

import api from "../../services/api";

export default function TestimonialUpload() {

  const [clientName,
    setClientName] =
    useState("");

  const [review,
    setReview] =
    useState("");

  const [image,
    setImage] =
    useState(null);

  const [preview,
    setPreview] =
    useState("");

  const [loading,
    setLoading] =
    useState(false);

  /* =========================
     IMAGE CHANGE
  ========================= */

  const handleImageChange = (
    e
  ) => {

    const file =
      e.target.files[0];

    if (file) {

      setImage(file);

      setPreview(
        URL.createObjectURL(file)
      );

    }

  };

  /* =========================
     SUBMIT
  ========================= */

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      if (!image) {

        alert(
          "Please upload image"
        );

        return;

      }

      try {

        setLoading(true);

        const formData =
          new FormData();

        formData.append(
          "clientName",
          clientName
        );

        formData.append(
          "review",
          review
        );

        formData.append(
          "image",
          image
        );

        await api.post(
          "/testimonial/add",
          formData
        );

        alert(
          "Testimonial uploaded successfully ✅"
        );

        setClientName("");

        setReview("");

        setImage(null);

        setPreview("");

      } catch (error) {

        console.log(error);

        alert(
          "Upload failed ❌"
        );

      } finally {

        setLoading(false);

      }

    };

  /* =========================
     DARK LUXURY STYLES
  ========================= */

  const styles = {

    container: {

      minHeight: "100vh",

      background:
        "linear-gradient(180deg,#000000 0%,#090909 45%,#121212 100%)",

      display: "flex",

      justifyContent: "center",

      alignItems: "center",

      padding: "20px",

    },

    card: {

      width: "100%",

      maxWidth: "520px",

      background:
        "rgba(255,255,255,.03)",

      padding: "40px",

      borderRadius: "28px",

      backdropFilter:
        "blur(16px)",

      border:
        "1px solid rgba(255,255,255,.06)",

      boxShadow:
        "0 20px 60px rgba(0,0,0,.45)",

    },

    title: {

      textAlign: "center",

      marginBottom: "10px",

      fontSize: "42px",

      fontWeight: "500",

      fontFamily:
        "'Cormorant Garamond', serif",

      background:
        "linear-gradient(135deg,#ffffff 0%,#cfcfcf 50%,#7d7d7d 100%)",

      WebkitBackgroundClip:
        "text",

      WebkitTextFillColor:
        "transparent",

    },

    subtitle: {

      textAlign: "center",

      marginBottom: "30px",

      color:
        "rgba(255,255,255,.55)",

      fontSize: "14px",

      lineHeight: "1.7",

    },

    input: {

      width: "100%",

      padding: "14px 16px",

      marginBottom: "20px",

      border:
        "1px solid rgba(255,255,255,.08)",

      borderRadius: "14px",

      outline: "none",

      fontSize: "15px",

      background:
        "rgba(255,255,255,.03)",

      color: "white",

    },

    textarea: {

      width: "100%",

      padding: "14px 16px",

      marginBottom: "20px",

      border:
        "1px solid rgba(255,255,255,.08)",

      borderRadius: "14px",

      outline: "none",

      fontSize: "15px",

      background:
        "rgba(255,255,255,.03)",

      color: "white",

      resize: "none",

    },

    button: {

      width: "100%",

      padding: "16px",

      background:
        "linear-gradient(135deg,#1a1a1a,#2c2c2c)",

      color: "white",

      border: "none",

      borderRadius: "14px",

      cursor: "pointer",

      fontWeight: "600",

      fontSize: "15px",

      transition:
        ".4s ease",

    },

    preview: {

      width: "100%",

      height: "260px",

      objectFit: "cover",

      borderRadius: "16px",

      marginBottom: "20px",

    },

    label: {

      display: "block",

      marginBottom: "10px",

      color: "rgba(255,255,255,.75)",

      fontSize: "14px",

    },

  };

  /* =========================
     RETURN
  ========================= */

  return (

    <div style={styles.container}>

      <div style={styles.card}>

        {/* TITLE */}

        <h2 style={styles.title}>

          Testimonial Upload

        </h2>

        <p style={styles.subtitle}>

          Upload client memories
          and luxury experiences
          beautifully.

        </p>

        {/* FORM */}

        <form
          onSubmit={handleSubmit}
        >

          {/* CLIENT NAME */}

          <label style={styles.label}>

            Client Name

          </label>

          <input
            type="text"
            value={clientName}
            onChange={(e) =>
              setClientName(
                e.target.value
              )
            }
            placeholder="Enter client name"
            style={styles.input}
          />

          {/* REVIEW */}

          <label style={styles.label}>

            Review

          </label>

          <textarea
            value={review}
            onChange={(e) =>
              setReview(
                e.target.value
              )
            }
            placeholder="Enter review"
            rows="5"
            style={styles.textarea}
          />

          {/* IMAGE */}

          <label style={styles.label}>

            Upload Image

          </label>

          <input
            type="file"
            onChange={
              handleImageChange
            }
            style={styles.input}
          />

          {/* PREVIEW */}

          {preview && (

            <img
              src={preview}
              alt="preview"
              style={styles.preview}
            />

          )}

          {/* BUTTON */}

          <button
            type="submit"
            style={styles.button}
          >

            {loading
              ? "Uploading..."
              : "Upload Testimonial"}

          </button>

        </form>

      </div>

    </div>

  );

}