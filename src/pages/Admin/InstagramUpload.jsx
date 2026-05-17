import React, { useState } from "react";
import api from "../../services/api";

export default function InstagramUpload() {
  const [title, setTitle] = useState("");
  const [postLink, setPostLink] =
    useState("");
  const [image, setImage] =
    useState(null);
  const [preview, setPreview] =
    useState("");

  const handleImageChange = (e) => {
    const file =
      e.target.files[0];

    if (file) {
      setImage(file);
      setPreview(
        URL.createObjectURL(file)
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert(
        "Please upload image"
      );
      return;
    }

    if (
      !postLink.includes(
        "instagram.com"
      )
    ) {
      alert(
        "Please enter valid Instagram link"
      );
      return;
    }

    try {
      const formData =
        new FormData();

      formData.append(
        "title",
        title
      );
      formData.append(
        "postLink",
        postLink
      );
      formData.append(
        "image",
        image
      );

      await api.post(
        "/instagram/add",
        formData
      );

      alert(
        "Instagram post uploaded ✅"
      );

      setTitle("");
      setPostLink("");
      setImage(null);
      setPreview("");
    } catch (error) {
      console.log(error);
      alert("Upload failed ❌");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "#f8f5ef",
        display: "flex",
        justifyContent:
          "center",
        alignItems:
          "center"
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "500px",
          background:
            "#fff",
          padding: "40px",
          borderRadius:
            "15px",
          boxShadow:
            "0px 8px 20px rgba(0,0,0,0.1)"
        }}
      >
        <h2
          style={{
            textAlign:
              "center",
            marginBottom:
              "20px"
          }}
        >
          Instagram Upload
        </h2>

        <form
          onSubmit={
            handleSubmit
          }
        >
          <div
            style={{
              marginBottom:
                "20px"
            }}
          >
            <label>
              Post Title
            </label>

            <input
              type="text"
              value={title}
              onChange={(e) =>
                setTitle(
                  e.target.value
                )
              }
              placeholder="Enter title"
              style={{
                width:
                  "100%",
                padding:
                  "12px",
                marginTop:
                  "8px"
              }}
            />
          </div>

          <div
            style={{
              marginBottom:
                "20px"
            }}
          >
            <label>
              Instagram Post
              Link
            </label>

            <input
              type="text"
              value={postLink}
              onChange={(e) =>
                setPostLink(
                  e.target.value
                )
              }
              placeholder="Paste Instagram post link"
              style={{
                width:
                  "100%",
                padding:
                  "12px",
                marginTop:
                  "8px"
              }}
            />
          </div>

          <div
            style={{
              marginBottom:
                "20px"
            }}
          >
            <label>
              Upload Image
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={
                handleImageChange
              }
              style={{
                marginTop:
                  "8px"
              }}
            />
          </div>

          {/* Preview */}
          {preview && (
            <div
              style={{
                marginBottom:
                  "20px"
              }}
            >
              <img
                src={
                  preview
                }
                alt="preview"
                style={{
                  width:
                    "100%",
                  height:
                    "250px",
                  objectFit:
                    "cover",
                  borderRadius:
                    "10px"
                }}
              />
            </div>
          )}

          <button
            type="submit"
            style={{
              width:
                "100%",
              padding:
                "14px",
              background:
                "black",
              color:
                "white",
              border:
                "none",
              borderRadius:
                "8px"
            }}
          >
            Upload
            Instagram Post
          </button>
        </form>
      </div>
    </div>
  );
}