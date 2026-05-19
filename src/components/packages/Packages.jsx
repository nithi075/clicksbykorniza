import "./Packages.css";

import {
  motion,
  AnimatePresence
} from "framer-motion";

import {
  useState
} from "react";

import OverlayForm from "../OverlayForm/OverlayForm";

const packagesData = [

  {
    title: "Bronze",
    subtitle: "TRADITIONAL COVERAGE",
    price: "₹55,000",

    features: [
      "Traditional Photography",
      "Traditional Videography"
    ],

    deliverables: [
      "Unlimited Softcopies",
      "2 Premium Albums (12x36)",
      "Wedding & Reception",
      "Album 200 Photos - Per Album 30 Sheets",
      "Full Function HD Editing Video Output",
      "64 GB 3.0 Fast Pendrive",
      "2 Monthly Calendars",
      "12x18 Two Photo Frames"
    ]
  },

  {
    title: "Silver",
    subtitle: "TRADITIONAL + CANDID",
    price: "₹90,000",

    features: [
      "Traditional Photography",
      "Traditional Videography",
      "Candid Photography"
    ],

    deliverables: [
      "Unlimited Softcopies",
      "2 Premium Albums (12x36)",
      "Wedding & Reception",
      "Album 240 Photos - Per Album 30 Sheets",
      "Full Function HD Editing Video Output",
      "64 GB 3.0 Fast Pendrive",
      "2 Monthly Calendars",
      "12x18 Two Photo Frames"
    ]
  },

  {
    title: "Gold",
    subtitle: "CANDID + OUTDOOR SHOOT",
    price: "₹1,49,000",

    features: [
      "Traditional Photography",
      "Traditional Videography",
      "Candid Photography",
      "Candid Videography",
      "3-4 Hrs Outdoor Shoot"
    ],

    deliverables: [
      "Unlimited Softcopies",
      "2 Premium Albums (12x36)",
      "Wedding & Reception",
      "Album 240 Photos - Per Album 30 Sheets",
      "Candid Edited Song Video",
      "Candid 1 Min Teaser",
      "Full Function HD Editing Video Output",
      "64 GB 3.0 Fast Pendrive",
      "2 Monthly Calendars",
      "12x18 Three Photo Frames"
    ]
  },

  {
    title: "Platinum",
    subtitle: "DRONE + LED WALL",
    price: "₹1,69,000",

    features: [
      "Traditional Photography",
      "Traditional Videography",
      "Candid Photography",
      "Candid Videography",
      "Drone Videography",
      "LED Wall 6x8",
      "3-4 Hrs Outdoor Shoot"
    ],

    deliverables: [
      "Unlimited Softcopies",
      "2 Premium Albums (12x36)",
      "Wedding & Reception",
      "Album 240 Photos - Per Album 30 Sheets",
      "Candid Edited Song Video",
      "Candid 1 Min Teaser",
      "Drone Highlights Instantly in 4-8 Hours",
      "Full Function HD Editing Video Output",
      "64 GB 3.0 Fast Pendrive",
      "2 Monthly Calendars",
      "12x18 Three Photo Frames"
    ]
  },

  {
    title: "Diamond",
    subtitle: "360 BOOTH + DRONE",
    price: "₹2,20,000",

    features: [
      "Traditional Photography",
      "Traditional Videography",
      "Candid Photography",
      "Candid Videography",
      "Drone Videography",
      "LED Wall 6x8",
      "360 Booth (R)",
      "Instant Photobooth (R)",
      "3-4 Hrs Outdoor Shoot"
    ],

    deliverables: [
      "Unlimited Softcopies",
      "2 Jewel Box Albums (12x36)",
      "Wedding & Reception",
      "Album 280 Photos - Per Album 40 Sheets",
      "Candid Edited Song Video",
      "Candid 1 Min Teaser",
      "Two Edited Reels",
      "Drone Highlights Instantly in 4-8 Hours",
      "Full Function HD Editing Video Output",
      "64 GB 3.0 Fast Pendrive",
      "2 Monthly Calendars",
      "12x18 Four Photo Frames"
    ]
  },

  {
    title: "Luxury",
    subtitle: "ULTIMATE CINEMATIC EXPERIENCE",
    price: "₹3,70,000",

    features: [
      "1 Traditional Photographer",
      "2 Traditional Videographers",
      "2 Candid Photographers",
      "2 Candid Videographers",
      "1 Drone Videographer",
      "Canva Backdrop Shooter",
      "Instant Photo Print",
      "LED Wall 12x8",
      "360 Booth (R)",
      "Live Stream",
      "Live Mixing Edit",
      "Instant Photobooth (R)",
      "8 Hrs Outdoor Shoot"
    ],

    deliverables: [
      "Unlimited Softcopies",
      "2 Jewel Box Luxury Albums (12x36)",
      "Wedding & Reception",
      "Album 400 Photos - Per Album 60 Sheets",
      "Candid Edited Song Video",
      "2 Candid 1 Min Teasers",
      "Four Edited Reels",
      "Drone Highlights Instantly in 4-8 Hours",
      "Full Function HD Editing Video Output",
      "64 GB 3.0 Fast Pendrive",
      "2 Monthly Calendars",
      "12x18 Six Photo Frames"
    ]
  }

];

export default function Packages() {

  const [openIndex, setOpenIndex] =
    useState(null);

  const [showForm, setShowForm] =
    useState(false);

  /* =========================================
     TOGGLE DELIVERABLES
  ========================================= */

  const toggleDeliverables = (index) => {

    setOpenIndex(
      openIndex === index
        ? null
        : index
    );

  };

  return (

    <>

      <section
        className="packages"
        id="packages"
      >

        {/* HEADER */}

        <motion.div
          className="packages-header"

          initial={{
            opacity:0,
            y:40
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:1
          }}

          viewport={{
            once:true
          }}
        >

          <p>PRICING</p>

          <h2>
            Wedding <span>Packages</span>
          </h2>

        </motion.div>

        {/* CARDS */}

        <div className="packages-container">

          {packagesData.map((item,index)=>(

            <motion.div

              key={index}

              className={`package-card ${
                item.badge
                ? "featured"
                : ""
              }`}

              initial={{
                opacity:0,
                y:80
              }}

              whileInView={{
                opacity:1,
                y:0
              }}

              transition={{
                duration:1,
                delay:index * 0.15
              }}

              viewport={{
                once:true
              }}

              whileHover={{
                y:-14,
                scale:1.02
              }}

            >

              {/* BADGE */}

              {item.badge && (

                <div className="badge">

                  {item.badge}

                </div>

              )}

              {/* CONTENT WRAPPER */}

              <div className="card-content">

                {/* TITLE */}

                <h3>{item.title}</h3>

                <p className="subtitle">

                  {item.subtitle}

                </p>

                {/* PRICE */}

                <div className="price-box">

                  <h1>{item.price}</h1>

                  <span className="event-text">

                    /package

                  </span>

                </div>

                {/* FEATURES */}

                <div className="features">

                  <h4>Services</h4>

                  {item.features.map((feature,i)=>(

                    <p key={i}>

                      ✦ {feature}

                    </p>

                  ))}

                </div>

              </div>

              {/* DELIVERABLE BUTTON */}

              <button
                className="deliverable-toggle"

                onClick={() =>
                  toggleDeliverables(index)
                }
              >

                {
                  openIndex === index
                  ? "Hide Deliverables −"
                  : "View Deliverables +"
                }

              </button>

              {/* DELIVERABLES */}

              <AnimatePresence>

                {
                  openIndex === index && (

                    <motion.div

                      className="deliverables"

                      initial={{
                        opacity:0,
                        height:0
                      }}

                      animate={{
                        opacity:1,
                        height:"auto"
                      }}

                      exit={{
                        opacity:0,
                        height:0
                      }}

                      transition={{
                        duration:0.45
                      }}

                    >

                      <h4>
                        Deliverables
                      </h4>

                      {
                        item.deliverables.map(
                          (deliverable,i)=>(

                            <p key={i}>

                              ✦ {deliverable}

                            </p>

                          )
                        )
                      }

                    </motion.div>

                  )
                }

              </AnimatePresence>

              {/* BOOK NOW */}

              <button

                className="package-btn"

                onClick={() =>
                  setShowForm(true)
                }

              >

                Book Now ↗

              </button>

            </motion.div>

          ))}

        </div>

      </section>

      {/* OVERLAY FORM */}

      {
        showForm && (

          <OverlayForm
            setShowForm={setShowForm}
          />

        )
      }

    </>

  );
}