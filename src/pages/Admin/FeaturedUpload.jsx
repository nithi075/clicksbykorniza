import React, {
  useState
} from "react";

import api from "../../services/api";

export default function FeaturedUpload() {

  const [items, setItems] =
    useState([]);

  /* ================= ADD IMAGES ================= */

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

      let updatedItems = [
        ...prev,
        ...formatted
      ];

      /* KEEP ONLY 5 */

      if (
        updatedItems.length >
        5
      ) {

        updatedItems =
          updatedItems.slice(
            -5
          );
      }

      return updatedItems;
    });
  };

  /* ================= REMOVE IMAGE ================= */

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

  /* ================= TITLE CHANGE ================= */

  const handleTitleChange = (
    index,
    value
  ) => {

    setItems((prev) =>
      prev.map(
        (
          item,
          i
        ) =>
          i === index
            ? {
                ...item,
                title: value
              }
            : item
      )
    );
  };

  /* ================= SUBMIT ================= */

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

        {/* FILE INPUT */}

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

        {/* PREVIEW */}

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

                {/* IMAGE */}

                <img
                  src={URL.createObjectURL(
                    item.image
                  )}
                  alt=""
                  width="100%"
                  height="220"
                  style={{
                    objectFit:
                      "cover",
                    borderRadius:
                      "5px",
                    marginBottom:
                      "10px"
                  }}
                />

                {/* TITLE */}

                <input
                  type="text"
                  placeholder="Enter title"

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
                      "10px",
                    border:
                      "1px solid #ccc",
                    borderRadius:
                      "5px"
                  }}
                />

                {/* REMOVE BUTTON */}

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

        {/* SUBMIT */}

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