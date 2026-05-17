import React from "react";
import { Link } from "react-router-dom";
import {
  Image,
  Camera,
  Star,
  MessageCircle,
  LayoutDashboard,
} from "lucide-react";

export default function Dashboard() {
  const menuItems = [
    {
      title: "Gallery Upload",
      subtitle: "Manage gallery images",
      path: "/gallery-upload",
      icon: <Image size={28} />,
    },
    {
      title: "Instagram Upload",
      subtitle: "Manage instagram posts",
      path: "/instagram-upload",
      icon: <Camera size={28} />,
    },
    {
      title: "Featured Upload",
      subtitle: "Manage featured works",
      path: "/featured-upload",
      icon: <Star size={28} />,
    },
    {
      title: "Testimonial Upload",
      subtitle: "Manage client reviews",
      path: "/testimonial-upload",
      icon: <MessageCircle size={28} />,
    },
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

          .dashboard-container{
            min-height:100vh;
            background:#f4f1ea;
            font-family:'Montserrat', sans-serif;
            color:#333;
          }

          /* Navbar */
          .dashboard-navbar{
            display:flex;
            justify-content:space-between;
            align-items:center;
            padding:20px 50px;
            border-bottom:1px solid #ddd;
            background:white;
          }

          .logo-box{
            display:flex;
            align-items:center;
            gap:10px;
          }

          .logo-box h1{
            font-family:'Cormorant Garamond', serif;
            font-size:32px;
            font-weight:500;
            letter-spacing:2px;
          }

          .logout-btn{
            background:#c5a059;
            color:white;
            border:none;
            padding:10px 22px;
            font-size:12px;
            letter-spacing:2px;
            cursor:pointer;
          }

          .logout-btn:hover{
            background:#a88745;
          }

          /* Welcome */
          .welcome-section{
            text-align:center;
            padding:60px 20px 30px;
          }

          .welcome-section h2{
            font-family:'Cormorant Garamond', serif;
            font-size:50px;
            font-weight:400;
            margin-bottom:10px;
          }

          .welcome-section p{
            font-size:14px;
            color:#666;
            letter-spacing:1px;
          }

          /* Cards */
          .card-grid{
            display:grid;
            grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
            gap:30px;
            padding:40px;
            max-width:1200px;
            margin:auto;
          }

          .card{
            background:white;
            text-decoration:none;
            color:#333;
            padding:30px;
            text-align:center;
            border-radius:5px;
            box-shadow:0px 4px 20px rgba(0,0,0,0.08);
            transition:0.3s ease;
          }

          .card:hover{
            transform:translateY(-8px);
            box-shadow:0px 8px 30px rgba(0,0,0,0.12);
          }

          .icon-box{
            width:70px;
            height:70px;
            background:#c5a059;
            color:white;
            display:flex;
            align-items:center;
            justify-content:center;
            margin:0 auto 20px;
            border-radius:50%;
          }

          .card h3{
            font-family:'Cormorant Garamond', serif;
            font-size:28px;
            font-weight:500;
            margin-bottom:10px;
          }

          .card p{
            font-size:13px;
            color:#777;
            line-height:1.6;
          }

          /* Mobile */
          @media(max-width:768px){
            .dashboard-navbar{
              padding:20px;
              flex-direction:column;
              gap:15px;
            }

            .welcome-section h2{
              font-size:36px;
            }

            .card-grid{
              padding:20px;
            }
          }
        `}
      </style>

      <div className="dashboard-container">
        {/* Navbar */}
        <div className="dashboard-navbar">
          <div className="logo-box">
            <LayoutDashboard size={28} color="#c5a059" />
            <h1>Admin Dashboard</h1>
          </div>

        </div>

        {/* Welcome */}
        <div className="welcome-section">
          <h2>Welcome Admin</h2>
          <p>Manage your wedding portfolio content beautifully</p>
        </div>

        {/* Cards */}
        <div className="card-grid">
          {menuItems.map((item, index) => (
            <Link key={index} to={item.path} className="card">
              <div className="icon-box">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}