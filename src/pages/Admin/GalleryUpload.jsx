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
      setPreview(URL.createObjectURL(file));
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

      const formData = new FormData();

      formData.append("title", title);
      formData.append("category", category);
      formData.append("image", image);

      await api.post("/gallery/add", formData);

      alert("Gallery uploaded successfully ✅");

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
     STYLES
  ========================= */

  const styles = {

    container: {
      minHeight: "100vh",
      background: "#f8f5ef",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
    },

    card: {
      width: "100%",
      maxWidth: "500px",
      background: "#fff",
      padding: "40px",
      borderRadius: "16px",
      boxShadow: "0px 8px 25px rgba(0,0,0,0.1)",
    },

    input: {
      width: "100%",
      padding: "12px",
      marginBottom: "20px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      outline: "none",
      fontSize: "15px",
    },

    button: {
      width: "100%",
      padding: "14px",
      background: "black",
      color: "white",
      border: "none",
      borderRadius: "10px",
      cursor: "pointer",
      fontWeight: "600",
      fontSize: "15px",
    },
  };

  /* =========================
     RETURN
  ========================= */

  return (
    <div style={styles.container}>

      <div style={styles.card}>

        {/* TITLE */}

        <h2
          style={{
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Gallery Upload
        </h2>

        {/* FORM */}

        <form onSubmit={handleSubmit}>

          {/* TITLE INPUT */}

          <input
            style={styles.input}
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
          />

          {/* CATEGORY */}

          <select
            style={styles.input}
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
          >

            <option value="">
              Select Category
            </option>

            {/* WEDDING */}

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

            {/* UPDATED */}

            <option value="outdoor-shoot">
              Outdoor Shoot
            </option>

            {/* NEW MODEL SHOOTS */}

            <option value="model-shoots">
              Model Shoots
            </option>

            {/* ENGAGEMENT */}

            <option value="engagement">
              Engagement Photography
            </option>

            {/* BIRTHDAY */}

            <option value="birthday">
              Birthday Photography
            </option>

            {/* MATERNITY */}

            <option value="maternity">
              Maternity Photography
            </option>

            {/* BABY */}

            <option value="baby-shoots">
              Baby Photography
            </option>

            {/* PORTRAIT */}

            <option value="bridal">
              Portrait Photography
            </option>

          </select>

          {/* IMAGE */}

          <input
            style={styles.input}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />

          {/* PREVIEW */}

          {preview && (
            <img
              src={preview}
              alt="preview"
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
                borderRadius: "10px",
                marginBottom: "20px",
              }}
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
