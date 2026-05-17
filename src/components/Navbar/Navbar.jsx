import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

import "./Navbar.css";
import logo from "../../assets/logo.png";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const [openMobileDropdown, setOpenMobileDropdown] =
    useState(null);

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);

  useEffect(() => {

    document.body.style.overflow =
      menuOpen ? "hidden" : "auto";

  }, [menuOpen]);

  const navItems = [

    {
      name: "Home",
      href: "/"
    },

    {
      name: "Weddings",

      dropdown: [

        {
          name: "Traditional Wedding",
          href: "/galleryDetails/traditional-wedding"
        },

        {
          name: "Destination Wedding",
          href: "/galleryDetails/destination-wedding"
        },

        {
          name: "Reception",
          href: "/galleryDetails/reception"
        }

      ]
    },

    {
      name: "Pre Wedding",

      dropdown: [

        {
          name: "Pre Wedding Shoot",
          href: "/galleryDetails/pre-wedding"
        },

        {
          name: "Engagement",
          href: "/galleryDetails/engagement"
        }

      ]
    },

    {
      name: "Maternity & Baby",

      dropdown: [

        {
          name: "Maternity",
          href: "/galleryDetails/maternity"
        },

        {
          name: "Baby Shoots",
          href: "/galleryDetails/baby-shoots"
        }

      ]
    },

    {
      name: "Portraits",

      dropdown: [

        {
          name: "Model Photography",
          href: "/galleryDetails/model-photography"
        }

      ]
    },

    {
      name: "Packages",
      href: "#packages"
    },

    {
      name: "Contact",
      href: "#contact"
    }

  ];

  return (

    <nav
      className={`navbar ${
        scrolled ? "navbar-scroll" : ""
      }`}
    >

      <div className="navbar-container">

        {/* LOGO */}

        <div className="logo-wrapper">

          <a href="/">

            <img
              src={logo}
              alt="Logo"
              className="logo-img"
            />

          </a>

        </div>

        {/* DESKTOP MENU */}

        <div className="desktop-menu">

          {navItems.map((item, index) => (

            <div
              key={index}
              className="nav-item"
            >

              {!item.dropdown ? (

                <a
                  href={item.href}
                  className="nav-link"
                >
                  {item.name}
                </a>

              ) : (

                <div className="dropdown-wrapper">

                  <div className="dropdown-title">

                    {item.name}

                    <span className="dropdown-arrow">
                      +
                    </span>

                  </div>

                  <div className="dropdown-menu">

                    {item.dropdown.map(
                      (subItem, subIndex) => (

                        <a
                          key={subIndex}
                          href={subItem.href}
                          className="dropdown-link"
                        >
                          {subItem.name}
                        </a>

                      )
                    )}

                  </div>

                </div>

              )}

            </div>

          ))}

        </div>

        {/* MOBILE BUTTON */}

        <div
          className="menu-btn"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
        >

          {menuOpen ? (

            <div className="close-btn"></div>

          ) : (

            <div className="hamburger">

              <div className="btn-line"></div>

              <div className="btn-line"></div>

            </div>

          )}

        </div>

      </div>

      {/* MOBILE MENU */}

      <AnimatePresence>

        {menuOpen && (

          <motion.div

            className="mobile-overlay"

            initial={{ opacity: 0 }}

            animate={{ opacity: 1 }}

            exit={{ opacity: 0 }}

          >

            <motion.div

              className="mobile-menu-container"

              initial={{ x: "100%" }}

              animate={{ x: 0 }}

              exit={{ x: "100%" }}

              transition={{ duration: 0.45 }}

            >

              <div className="mobile-menu-list">

                {navItems.map((item, index) => (

                  <div
                    key={index}
                    className="mobile-menu-item"
                  >

                    {!item.dropdown ? (

                      <a

                        href={item.href}

                        className="mobile-main-link"

                        onClick={() =>
                          setMenuOpen(false)
                        }

                      >

                        {item.name}

                      </a>

                    ) : (

                      <>

                        <div

                          className="mobile-dropdown-header"

                          onClick={() =>

                            setOpenMobileDropdown(

                              openMobileDropdown === index
                                ? null
                                : index

                            )

                          }

                        >

                          <span>{item.name}</span>

                          <FiChevronDown

                            className={`dropdown-icon ${
                              openMobileDropdown === index
                                ? "rotate"
                                : ""
                            }`}

                          />

                        </div>

                        <AnimatePresence>

                          {openMobileDropdown === index && (

                            <motion.div

                              className="mobile-submenu"

                              initial={{
                                height: 0,
                                opacity: 0
                              }}

                              animate={{
                                height: "auto",
                                opacity: 1
                              }}

                              exit={{
                                height: 0,
                                opacity: 0
                              }}

                            >

                              {item.dropdown.map(
                                (subItem, subIndex) => (

                                  <a

                                    key={subIndex}

                                    href={subItem.href}

                                    className="mobile-sub-link"

                                    onClick={() =>
                                      setMenuOpen(false)
                                    }

                                  >

                                    {subItem.name}

                                  </a>

                                )
                              )}

                            </motion.div>

                          )}

                        </AnimatePresence>

                      </>

                    )}

                  </div>

                ))}

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </nav>

  );

}
