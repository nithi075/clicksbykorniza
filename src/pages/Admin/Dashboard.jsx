import React from "react";

import { Link } from "react-router-dom";

import {

  Image,

  Camera,

  Star,

  MessageCircle,

  LayoutDashboard

} from "lucide-react";

export default function Dashboard() {

  const menuItems = [

    {

      title:
        "Gallery Upload",

      subtitle:
        "Manage gallery images",

      path:
        "/gallery-upload",

      icon:
        <Image size={28} />

    },

   

    {

      title:
        "Featured Upload",

      subtitle:
        "Manage featured works",

      path:
        "/featured-upload",

      icon:
        <Star size={28} />

    },

    {

      title:
        "Testimonial Upload",

      subtitle:
        "Manage client reviews",

      path:
        "/testimonial-upload",

      icon:
        <MessageCircle size={28} />

    }

  ];

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

          background:#050505;

          font-family:'Montserrat', sans-serif;

        }

        /* =========================================
           CONTAINER
        ========================================= */

        .dashboard-container{

          min-height:100vh;

          background:
          linear-gradient(
            180deg,
            #050505 0%,
            #0b0b0b 45%,
            #111111 100%
          );

          color:white;

          position:relative;

          overflow:hidden;

        }

        /* =========================================
           AMBIENT GLOW
        ========================================= */

        .dashboard-container::before{

          content:"";

          position:absolute;

          width:500px;
          height:500px;

          top:-200px;
          right:-150px;

          background:
          radial-gradient(
            circle,
            rgba(212,175,55,.12),
            transparent 70%
          );

          filter:blur(10px);

          pointer-events:none;

        }

        .dashboard-container::after{

          content:"";

          position:absolute;

          width:350px;
          height:350px;

          bottom:-120px;
          left:-100px;

          background:
          radial-gradient(
            circle,
            rgba(212,175,55,.06),
            transparent 70%
          );

          pointer-events:none;

        }

        /* =========================================
           NAVBAR
        ========================================= */

        .dashboard-navbar{

          display:flex;

          justify-content:space-between;

          align-items:center;

          padding:24px 50px;

          border-bottom:
          1px solid
          rgba(255,255,255,.06);

          background:
          rgba(255,255,255,.02);

          backdrop-filter:
          blur(10px);

          position:relative;

          z-index:2;

        }

        .logo-box{

          display:flex;

          align-items:center;

          gap:12px;

        }

        .logo-box h1{

          font-family:
          'Cormorant Garamond',
          serif;

          font-size:34px;

          font-weight:500;

          letter-spacing:2px;

          color:white;

        }

        /* =========================================
           WELCOME
        ========================================= */

        .welcome-section{

          text-align:center;

          padding:80px 20px 40px;

          position:relative;

          z-index:2;

        }

        .welcome-section h2{

          font-family:
          'Cormorant Garamond',
          serif;

          font-size:58px;

          font-weight:500;

          margin-bottom:14px;

          background:
          linear-gradient(
            135deg,
            #d4af37 0%,
            #f2c94c 50%,
            #fff3c4 100%
          );

          -webkit-background-clip:text;

          -webkit-text-fill-color:transparent;

          text-shadow:
          0 0 18px rgba(212,175,55,.18);

        }

        .welcome-section p{

          font-size:14px;

          color:
          rgba(255,255,255,.65);

          letter-spacing:1px;

        }

        /* =========================================
           CARD GRID
        ========================================= */

        .card-grid{

          display:grid;

          grid-template-columns:
          repeat(auto-fit,minmax(260px,1fr));

          gap:30px;

          padding:40px;

          max-width:1200px;

          margin:auto;

          position:relative;

          z-index:2;

        }

        /* =========================================
           CARD
        ========================================= */

        .card{

          background:
          rgba(255,255,255,.03);

          border:
          1px solid
          rgba(255,255,255,.06);

          text-decoration:none;

          color:white;

          padding:36px 30px;

          text-align:center;

          border-radius:24px;

          backdrop-filter:
          blur(14px);

          box-shadow:
          0 15px 40px
          rgba(0,0,0,.35);

          transition:
          .45s ease;

          overflow:hidden;

          position:relative;

        }

        .card::before{

          content:"";

          position:absolute;

          inset:0;

          background:
          linear-gradient(
            135deg,
            rgba(212,175,55,.08),
            transparent 40%
          );

          opacity:0;

          transition:.45s ease;

        }

        .card:hover{

          transform:
          translateY(-10px);

          border-color:
          rgba(212,175,55,.22);

          box-shadow:
          0 25px 60px
          rgba(0,0,0,.45);

        }

        .card:hover::before{

          opacity:1;

        }

        /* =========================================
           ICON
        ========================================= */

        .icon-box{

          width:74px;
          height:74px;

          background:
          linear-gradient(
            135deg,
            #d4af37,
            #f2c94c
          );

          color:#111;

          display:flex;

          align-items:center;

          justify-content:center;

          margin:0 auto 24px;

          border-radius:50%;

          box-shadow:
          0 10px 24px
          rgba(212,175,55,.28);

        }

        /* =========================================
           TITLE
        ========================================= */

        .card h3{

          font-family:
          'Cormorant Garamond',
          serif;

          font-size:30px;

          font-weight:500;

          margin-bottom:12px;

          color:white;

        }

        /* =========================================
           SUBTITLE
        ========================================= */

        .card p{

          font-size:13px;

          color:
          rgba(255,255,255,.62);

          line-height:1.7;

        }

        /* =========================================
           MOBILE
        ========================================= */

        @media(max-width:768px){

          .dashboard-navbar{

            padding:20px;

            flex-direction:column;

            gap:15px;

          }

          .logo-box h1{

            font-size:28px;

          }

          .welcome-section{

            padding:70px 20px 30px;

          }

          .welcome-section h2{

            font-size:42px;

          }

          .welcome-section p{

            font-size:13px;

          }

          .card-grid{

            padding:20px;

            gap:20px;

          }

          .card{

            padding:30px 24px;

            border-radius:20px;

          }

          .card h3{

            font-size:26px;

          }

        }

        /* =========================================
           SMALL MOBILE
        ========================================= */

        @media(max-width:480px){

          .welcome-section h2{

            font-size:34px;

          }

          .card{

            padding:26px 20px;

          }

          .card h3{

            font-size:24px;

          }

          .icon-box{

            width:66px;
            height:66px;

          }

        }

        `}

      </style>

      <div className="dashboard-container">

        {/* NAVBAR */}

        <div className="dashboard-navbar">

          <div className="logo-box">

            <LayoutDashboard
              size={30}
              color="#d4af37"
            />

            <h1>
              Admin Dashboard
            </h1>

          </div>

        </div>

        {/* WELCOME */}

        <div className="welcome-section">

          <h2>
            Welcome Admin
          </h2>

          <p>
            Manage your wedding portfolio beautifully
          </p>

        </div>

        {/* CARDS */}

        <div className="card-grid">

          {menuItems.map(
            (
              item,
              index
            ) => (

              <Link

                key={index}

                to={item.path}

                className="card"

              >

                <div className="icon-box">

                  {item.icon}

                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.subtitle}
                </p>

              </Link>

            )
          )}

        </div>

      </div>

    </>

  );

}