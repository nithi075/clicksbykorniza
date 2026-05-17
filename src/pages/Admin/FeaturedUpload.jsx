import React, {
  useState
} from "react";

import api from "../../services/api";

export default function FeaturedUpload() {
  const [title, setTitle] =
    useState("");

  const [images, setImages] =
    useState([]);

  // Add Images
  const handleImageChange = (
    e
  ) => {
    const selectedFiles =
      Array.from(
        e.target.files
      );

    setImages(
      (prevImages) => {
        let updatedImages = [
          ...prevImages,
          ...selectedFiles
        ];

        // Keep only latest 5 images
        if (
          updatedImages.length >
          5
        ) {
          updatedImages =
            updatedImages.slice(
              -5
            );
        }

        return updatedImages;
      }
    );
  };

  // Remove Image
  const handleRemoveImage = (
    index
  ) => {
    setImages(
      (prevImages) =>
        prevImages.filter(
          (_, i) =>
            i !== index
        )
    );
  };

  // Submit
  const handleSubmit =
    async (e) => {
      e.preventDefault();

      const formData =
        new FormData();

      formData.append(
        "title",
        title
      );

      images.forEach(
        (image) => {
          formData.append(
            "images",
            image
          );
        }
      );

      try {
        const res =
          await api.post(
            "/featured/add",
            formData,
            {
              headers: {
                "Content-Type":
                  "multipart/form-data"
              }
            }
          );

        console.log(
          res.data
        );

        alert(
          "Featured uploaded successfully"
        );

        setTitle("");
        setImages([]);
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent:
          "center",
        alignItems:
          "center",
        background:
          "#f8f5ef"
      }}
    >
      <form
        onSubmit={
          handleSubmit
        }
        style={{
          background:
            "#fff",
          padding: "30px",
          borderRadius:
            "10px",
          width: "400px"
        }}
      >
        <h2>
          Featured Upload
        </h2>

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) =>
            setTitle(
              e.target.value
            )
          }
          style={{
            width: "100%",
            padding: "10px",
            marginBottom:
              "15px"
          }}
        />

        <input
          type="file"
          multiple
          accept="image/*"
          onChange={
            handleImageChange
          }
          style={{
            marginBottom:
              "20px"
          }}
        />

        <p>
          Selected Images:
          {
            images.length
          }
          /5
        </p>

        {/* Preview */}
        <div
          style={{
            display: "flex",
            flexWrap:
              "wrap",
            gap: "10px",
            marginBottom:
              "20px"
          }}
        >
          {images.map(
            (
              img,
              index
            ) => (
              <div
                key={index}
                style={{
                  position:
                    "relative"
                }}
              >
                <img
                  src={URL.createObjectURL(
                    img
                  )}
                  alt=""
                  width="80"
                  height="80"
                  style={{
                    objectFit:
                      "cover",
                    borderRadius:
                      "5px"
                  }}
                />

                <button
                  type="button"
                  onClick={() =>
                    handleRemoveImage(
                      index
                    )
                  }
                  style={{
                    position:
                      "absolute",
                    top: "-5px",
                    right:
                      "-5px",
                    background:
                      "red",
                    color:
                      "#fff",
                    border:
                      "none",
                    borderRadius:
                      "50%",
                    width: "20px",
                    height:
                      "20px",
                    cursor:
                      "pointer"
                  }}
                >
                  ×
                </button>
              </div>
            )
          )}
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            border: "none",
            background:
              "#000",
            color: "#fff",
            cursor:
              "pointer",
            borderRadius:
              "5px"
          }}
        >
          Upload
        </button>
      </form>
    </div>
  );
}