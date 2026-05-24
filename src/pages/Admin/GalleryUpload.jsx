import React, { useState } from "react";
import api from "../../services/api";

export default function GalleryUpload() {

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  /* =========================
     IMAGE PREVIEW
  ========================= */

  const handleImageChange = (e) => {

    const file = e.target.files[0];

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

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!image) {

      alert("Please select image");

      return;

    }

    if (!category) {

      alert("Please select category");

      return;

    }

    try {

      setLoading(true);

      const formData =
        new FormData();

      formData.append(
        "title",
        title
      );

      formData.append(
        "category",
        category
      );

      formData.append(
        "image",
        image
      );

      await api.post(
        "/gallery/add",
        formData
      );

      alert(
        "Gallery uploaded successfully ✅"
      );

      /* RESET */

      setTitle("");

      setCategory("");

      setImage(null);

      setPreview("");

    } catch (error) {

      console.log(error);

      alert("Upload failed ❌");

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

  };

  /* =========================
     RETURN
  ========================= */

  return (

    <div style={styles.container}>

      <div style={styles.card}>

        {/* TITLE */}

        <h2 style={styles.title}>

          Gallery Upload

        </h2>

        <p style={styles.subtitle}>

          Upload premium cinematic
          moments to your luxury
          gallery collection.

        </p>

        {/* FORM */}

        <form
          onSubmit={handleSubmit}
        >

          {/* TITLE */}

          <input
            style={styles.input}
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) =>
              setTitle(
                e.target.value
              )
            }
          />

          {/* CATEGORY */}

          <select
            style={styles.input}
            value={category}
            onChange={(e) =>
              setCategory(
                e.target.value
              )
            }
          >

            <option value="">
              Select Category
            </option>

            <option value="traditional-wedding">
              Traditional Wedding
            </option>

            <option value="destination-wedding">
              Destination Wedding
            </option>

            <option value="reception">
              Reception
            </option>

            <option value="bridal-photography">
              Bridal Photography
            </option>

            <option value="outdoor-shoot">
              Outdoor Shoot
            </option>

            <option value="model-shoots">
              Model Shoots
            </option>

            <option value="engagement">
              Engagement Photography
            </option>

            <option value="birthday">
              Birthday Photography
            </option>

            <option value="maternity">
              Maternity Photography
            </option>

            <option value="baby-shoots">
              Baby Photography
            </option>

            <option value="bridal">
              Portrait Photography
            </option>

          </select>

          {/* IMAGE */}

          <input
            style={styles.input}
            type="file"
            accept="image/*"
            onChange={
              handleImageChange
            }
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
              : "Upload Gallery"}

          </button>

        </form>

      </div>

    </div>

  );
}