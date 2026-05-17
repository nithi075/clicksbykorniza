import React, { useState } from "react";
import api from "../../services/api";

export default function TestimonialUpload() {
  const [clientName, setClientName] = useState("");
  const [review, setReview] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please upload image");
      return;
    }

    try {
      const formData = new FormData();

      formData.append("clientName", clientName);
      formData.append("review", review);
      formData.append("image", image);

      await api.post("/testimonial/add", formData);

      alert("Testimonial uploaded successfully ✅");

      setClientName("");
      setReview("");
      setImage(null);

    } catch (error) {
      console.log(error);
      alert("Upload failed ❌");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8f5ef",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "500px",
          background: "#fff",
          padding: "40px",
          borderRadius: "15px",
          boxShadow: "0px 8px 20px rgba(0,0,0,0.1)"
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "20px"
          }}
        >
          Testimonial Upload
        </h2>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "20px" }}>
            <label>Client Name</label>
            <input
              type="text"
              value={clientName}
              onChange={(e) =>
                setClientName(e.target.value)
              }
              placeholder="Enter client name"
              style={{
                width: "100%",
                padding: "12px",
                marginTop: "8px"
              }}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label>Review</label>
            <textarea
              value={review}
              onChange={(e) =>
                setReview(e.target.value)
              }
              placeholder="Enter review"
              rows="5"
              style={{
                width: "100%",
                padding: "12px",
                marginTop: "8px"
              }}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label>Upload Image</label>
            <input
              type="file"
              onChange={(e) =>
                setImage(e.target.files[0])
              }
              style={{ marginTop: "8px" }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "14px",
              background: "black",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer"
            }}
          >
            Upload Testimonial
          </button>
        </form>
      </div>
    </div>
  );
}