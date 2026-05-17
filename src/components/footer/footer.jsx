import { FaInstagram } from "react-icons/fa";

import {
  FiSend,
  FiPhone
} from "react-icons/fi";

import { motion } from "framer-motion";

import { Link } from "react-router-dom";

import "./footer.css";

export default function Footer() {

  const currentYear =
    new Date().getFullYear();

  return (

    <footer className="footer">

      <div className="footer-container">

        {/* =====================================
            TOP
        ===================================== */}

        <motion.div

          className="footer-top"

          initial={{
            opacity:0,
            y:50
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

          {/* BRAND */}

          <div className="footer-brand-section">

            <Link
              to="/admin"
              className="footer-logo-link"
            >

              <motion.h2

                className="footer-logo"

                initial={{
                  opacity:0,
                  letterSpacing:"12px"
                }}

                whileInView={{
                  opacity:1,
                  letterSpacing:"4px"
                }}

                transition={{
                  duration:1.2
                }}

                viewport={{
                  once:true
                }}

              >

                CLICKS BY KORNIZA

              </motion.h2>

            </Link>

            <span className="footer-tagline">

              ARTISANAL WEDDING PHOTOGRAPHY

            </span>

          </div>

          {/* CTA */}

          <motion.div

            className="footer-cta"

            initial={{
              opacity:0,
              x:40
            }}

            whileInView={{
              opacity:1,
              x:0
            }}

            transition={{
              duration:1,
              delay:.2
            }}

            viewport={{
              once:true
            }}

          >

            <p>

              Ready to preserve your story?

            </p>

            <motion.button

              className="footer-main-btn"

              whileHover={{
                y:-4,
                scale:1.03
              }}

              whileTap={{
                scale:.96
              }}

              onClick={() =>
                window.open(
                  "https://wa.me/919597258078",
                  "_blank"
                )
              }

            >

              <span>

                GET IN TOUCH

              </span>

              <FiSend size={14} />

            </motion.button>

          </motion.div>

        </motion.div>

        {/* DIVIDER */}

        <div className="footer-divider"></div>

        {/* =====================================
            MIDDLE
        ===================================== */}

        <motion.div

          className="footer-middle"

          initial={{
            opacity:0,
            y:40
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:1,
            delay:.3
          }}

          viewport={{
            once:true
          }}

        >

          {/* NAV */}

          <nav className="footer-nav">

            <a href="#home">

              HOME

            </a>

            <a href="#gallery">

              PORTFOLIO

            </a>

            <a href="#services">

              SERVICES

            </a>

            <a href="#testimonials">

              JOURNAL

            </a>

          </nav>

          {/* SOCIALS */}

          <div className="footer-socials">

            <motion.a

              href="https://www.instagram.com/clicksbykorniza/"

              target="_blank"

              rel="noreferrer"

              className="social-link"

              whileHover={{
                y:-5,
                rotate:4
              }}

            >

              <FaInstagram size={18} />

            </motion.a>

            <motion.a

              href="https://wa.me/919597258078"

              target="_blank"

              rel="noreferrer"

              className="social-link"

              whileHover={{
                y:-5,
                rotate:-4
              }}

            >

              <FiPhone size={18} />

            </motion.a>

          </div>

        </motion.div>

        {/* =====================================
            BOTTOM
        ===================================== */}

        <motion.div

          className="footer-bottom"

          initial={{
            opacity:0
          }}

          whileInView={{
            opacity:1
          }}

          transition={{
            duration:1,
            delay:.5
          }}

          viewport={{
            once:true
          }}

        >

          <p className="copyright">

            © {currentYear}
            {" "}
            CLICKS BY KORNIZA.
            ALL RIGHTS RESERVED.

          </p>

          <div className="footer-legal">

            <span>

              CRAFTED WITH PASSION

            </span>

          </div>

        </motion.div>

      </div>

    </footer>

  );

}