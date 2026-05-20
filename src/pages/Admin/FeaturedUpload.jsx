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

      if (
        updated.length > 5
      ) {
        updated =
          updated.slice(-5);
      }

      return updated;
    });
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

  // Remove
  const handleRemoveImage = (
    index
  ) => {

    setItems((prev) =>
      prev.filter(
        (_, i) => i !== index
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
          width: "400px"
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

        <div
          style={{
            display: "flex",
            flexDirection:
              "column",
            gap: "15px",
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
              >

                <img
                  src={URL.createObjectURL(
                    item.image
                  )}
                  alt=""
                  width="100"
                  height="100"
                  style={{
                    objectFit:
                      "cover",
                    borderRadius:
                      "5px"
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
                      "10px",
                    marginTop:
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
                >
                  Remove
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