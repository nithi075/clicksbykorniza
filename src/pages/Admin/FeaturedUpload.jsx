import React, {
  useState
} from "react";

import api from "../../services/api";

export default function FeaturedUpload() {

  const [items, setItems] =
    useState([]);

  /* =========================================
     IMAGE CHANGE
  ========================================= */

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
          title: "",
          category: ""
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

  /* =========================================
     TITLE CHANGE
  ========================================= */

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

  /* =========================================
     CATEGORY CHANGE
  ========================================= */

  const handleCategoryChange = (
    index,
    value
  ) => {

    setItems((prev) =>
      prev.map((item, i) =>
        i === index
          ? {
              ...item,
              category: value
            }
          : item
      )
    );

  };

  /* =========================================
     REMOVE IMAGE
  ========================================= */

  const handleRemoveImage = (
    index
  ) => {

    setItems((prev) =>
      prev.filter(
        (_, i) => i !== index
      )
    );

  };

  /* =========================================
     SUBMIT
  ========================================= */

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      const formData =
        new FormData();

      formData.append(
        "title",
        "Featured Works"
      );

      items.forEach(
        (item) => {

          formData.append(
            "images",
            item.image
          );

          formData.append(
            "itemTitles",
            item.title
          );

          formData.append(
            "categories",
            item.category
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

    <>

      <style>

        {`

        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=Montserrat:wght@300;400&display=swap');

        *{

          margin:0;

          padding:0;

          box-sizing:border-box;

        }

        body{

          background:#000;

          font-family:'Montserrat', sans-serif;

        }

        /* =========================================
           CONTAINER
        ========================================= */

        .featured-container{

          min-height:100vh;

          display:flex;

          justify-content:center;

          align-items:center;

          padding:60px 20px;

          background:
          linear-gradient(
            180deg,
            #000000 0%,
            #090909 45%,
            #121212 100%
          );

          position:relative;

          overflow:hidden;

        }

        /* =========================================
           AMBIENT GLOW
        ========================================= */

        .featured-container::before{

          content:"";

          position:absolute;

          width:500px;
          height:500px;

          top:-180px;
          right:-140px;

          background:
          radial-gradient(
            circle,
            rgba(255,255,255,.05),
            transparent 70%
          );

          filter:blur(10px);

        }

        .featured-container::after{

          content:"";

          position:absolute;

          width:350px;
          height:350px;

          bottom:-120px;
          left:-120px;

          background:
          radial-gradient(
            circle,
            rgba(255,255,255,.03),
            transparent 70%
          );

        }

        /* =========================================
           FORM
        ========================================= */

        .featured-form{

          width:100%;

          max-width:520px;

          background:
          rgba(255,255,255,.03);

          border:
          1px solid
          rgba(255,255,255,.06);

          backdrop-filter:
          blur(16px);

          border-radius:28px;

          padding:38px;

          position:relative;

          z-index:2;

          box-shadow:
          0 20px 60px
          rgba(0,0,0,.45);

        }

        /* =========================================
           TITLE
        ========================================= */

        .featured-title{

          text-align:center;

          margin-bottom:30px;

          font-family:
          'Cormorant Garamond',
          serif;

          font-size:42px;

          font-weight:500;

          background:
          linear-gradient(
            135deg,
            #ffffff 0%,
            #cfcfcf 50%,
            #7d7d7d 100%
          );

          -webkit-background-clip:text;

          -webkit-text-fill-color:transparent;

        }

        /* =========================================
           FILE INPUT
        ========================================= */

        .file-input{

          width:100%;

          padding:14px;

          border:
          1px dashed
          rgba(255,255,255,.15);

          border-radius:14px;

          background:
          rgba(255,255,255,.02);

          color:white;

          margin-bottom:18px;

        }

        .file-input::file-selector-button{

          border:none;

          background:
          linear-gradient(
            135deg,
            #1f1f1f,
            #2d2d2d
          );

          color:#fff;

          padding:10px 18px;

          border-radius:8px;

          cursor:pointer;

          margin-right:14px;

          font-weight:600;

        }

        /* =========================================
           COUNT
        ========================================= */

        .count{

          color:
          rgba(255,255,255,.65);

          margin-bottom:24px;

          font-size:14px;

        }

        /* =========================================
           ITEMS
        ========================================= */

        .items{

          display:flex;

          flex-direction:column;

          gap:24px;

          margin-bottom:24px;

        }

        .item-card{

          background:
          rgba(255,255,255,.03);

          border:
          1px solid
          rgba(255,255,255,.06);

          border-radius:22px;

          padding:18px;

          transition:.4s ease;

        }

        .item-card:hover{

          border-color:
          rgba(255,255,255,.12);

          transform:
          translateY(-3px);

        }

        /* =========================================
           IMAGE
        ========================================= */

        .preview-image{

          width:100%;

          height:220px;

          object-fit:cover;

          border-radius:14px;

        }

        /* =========================================
           INPUT
        ========================================= */

        .input{

          width:100%;

          padding:14px 16px;

          margin-top:14px;

          border-radius:12px;

          border:
          1px solid
          rgba(255,255,255,.08);

          background:
          rgba(255,255,255,.03);

          color:white;

          outline:none;

          transition:.35s ease;

        }

        .input:focus{

          border-color:
          rgba(255,255,255,.18);

          box-shadow:
          0 0 0 3px
          rgba(255,255,255,.04);

        }

        .input::placeholder{

          color:
          rgba(255,255,255,.38);

        }

        /* =========================================
           REMOVE BUTTON
        ========================================= */

        .remove-btn{

          margin-top:14px;

          border:none;

          background:
          rgba(255,255,255,.05);

          color:#d1d1d1;

          padding:10px 16px;

          border-radius:10px;

          cursor:pointer;

          transition:.35s ease;

        }

        .remove-btn:hover{

          background:
          rgba(255,255,255,.10);

        }

        /* =========================================
           SUBMIT BUTTON
        ========================================= */

        .submit-btn{

          width:100%;

          padding:16px;

          border:none;

          border-radius:14px;

          cursor:pointer;

          font-size:15px;

          font-weight:600;

          background:
          linear-gradient(
            135deg,
            #1a1a1a,
            #2c2c2c
          );

          color:#fff;

          transition:.4s ease;

        }

        .submit-btn:hover{

          transform:
          translateY(-3px);

          box-shadow:
          0 12px 30px
          rgba(255,255,255,.08);

        }

        /* =========================================
           MOBILE
        ========================================= */

        @media(max-width:768px){

          .featured-form{

            padding:28px 22px;

            border-radius:22px;

          }

          .featured-title{

            font-size:34px;

          }

          .preview-image{

            height:180px;

          }

        }

        @media(max-width:480px){

          .featured-title{

            font-size:28px;

          }

          .featured-form{

            padding:24px 18px;

          }

          .preview-image{

            height:160px;

          }

        }

        `}

      </style>

      <div className="featured-container">

        <form
          onSubmit={
            handleSubmit
          }
          className="featured-form"
        >

          <h2 className="featured-title">

            Featured Upload

          </h2>

          <input
            type="file"
            multiple
            accept="image/*"
            onChange={
              handleImageChange
            }
            className="file-input"
          />

          <p className="count">

            Selected Images:
            {items.length}/5

          </p>

          <div className="items">

            {items.map(
              (
                item,
                index
              ) => (

                <div
                  key={index}
                  className="item-card"
                >

                  <img
                    src={URL.createObjectURL(
                      item.image
                    )}
                    alt=""
                    className="preview-image"
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
                    className="input"
                  />

                  <input
                    type="text"
                    placeholder="Enter Category"
                    value={
                      item.category
                    }
                    onChange={(e) =>
                      handleCategoryChange(
                        index,
                        e.target.value
                      )
                    }
                    className="input"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      handleRemoveImage(
                        index
                      )
                    }
                    className="remove-btn"
                  >

                    Remove

                  </button>

                </div>

              )
            )}

          </div>

          <button
            type="submit"
            className="submit-btn"
          >

            Upload Featured Works

          </button>

        </form>

      </div>

    </>

  );

}