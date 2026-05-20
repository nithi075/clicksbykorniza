import React, {
  useState
} from "react";

import api from "../../services/api";

export default function FeaturedUpload() {

  const [items, setItems] =
    useState([]);

  // Add Images
  const handleImageChange = (
    e
  ) => {

    const selectedFiles =
      Array.from(
        e.target.files
      );

    const formatted =
      selectedFiles.map(
        (file) => ({
          image: file,
          title: ""
        })
      );

    setItems((prev) => {

      let updated = [
        ...prev,
        ...formatted
      ];

      // Max 5 images
      if (
        updated.length > 5
      ) {
        updated =
          updated.slice(-5);
      }

      return updated;
    });
  };

  // Remove Image
  const handleRemoveImage = (
    index
  ) => {

    setItems((prev) =>
      prev.filter(
        (_, i) =>
          i !== index
      )
    );
  };

  // Change Title
  const handleTitleChange = (
    index,
    value
  ) => {

    setItems((prev) =>
      prev.map((item, i) =>
        i === index
          ? {
              ...item,
              title: value
            }
          : item
      )
    );
  };

  // Submit
  const handleSubmit =
    async (e) => {

      e.preventDefault();

      const formData =
        new FormData();

      items.forEach(
        (item) => {

          formData.append(
            "images",
            item.image
          );

          formData.append(
            "titles",
            item.title
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

        setItems([]);

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
          width: "450px"
        }}
      >

        <h2>
          Featured Upload
        </h2>

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
          {items.length}/5
        </p>

        {/* Preview */}
        <div
          style={{
            display: "flex",
            flexDirection:
              "column",
            gap: "20px",
            marginBottom:
              "20px"
          }}
        >

          {items.map(
            (
              item,
              index
            ) => (

              <div
                key={index}
                style={{
                  border:
                    "1px solid #ddd",
                  padding:
                    "10px",
                  borderRadius:
                    "8px",
                  position:
                    "relative"
                }}
              >

                <img
                  src={URL.createObjectURL(
                    item.image
                  )}
                  alt=""
                  width="100%"
                  height="200"
                  style={{
                    objectFit:
                      "cover",
                    borderRadius:
                      "5px",
                    marginBottom:
                      "10px"
                  }}
                />

                <input
                  type="text"
                  placeholder="Enter Title"
                  value={
                    item.title
                  }
                  onChange={(e) =>
                    handleTitleChange(
                      index,
                      e.target.value
                    )
                  }
                  style={{
                    width: "100%",
                    padding:
                      "10px"
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
                    top: "-8px",
                    right:
                      "-8px",
                    background:
                      "red",
                    color:
                      "#fff",
                    border:
                      "none",
                    borderRadius:
                      "50%",
                    width: "25px",
                    height:
                      "25px",
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