import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
// import "../../pages/home.css";


export const Headders = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const [menuData, setMenuData] = useState([]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  const fetchMenu = async() => {
    const response = await fetch("../data/menu.json");
    const data = await response.json();
    console.log(data);
    setMenuData(data);
}
useEffect(() => {
    fetchMenu();
}, []);


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-10 mb-1.5">
      <nav
        className={`transition-colors duration-300 ${
          isScrolled
            ? "bg-gray-800 bg-opacity-80 backdrop-filter backdrop-blur-lg"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="/">
                  <img
                    className={`h-8 w-100`}
                    src="../../img/logo_dark.png"
                    alt="Trescorp"
                    style={{
                      display: `${isMobileMenuOpen ? "none" : "block"}`,
                    }}
                  />
                </a>
              </div>
            </div>
            {/* <div className="-mr-2 nav_button_custom flex md:visible">
              <button
                type="button"
                className={`relative inline-flex items-center justify-center rounded-full p-2 text-gray-400 hover:bg-gray-700 hover:nav-text  ${
                  isScrolled ? "bg-transparent" : "bg-transparent"
                }`}
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
                onClick={toggleMobileMenu}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`h-6 w-6 ${
                    isMobileMenuOpen ? "hidden" : "block"
                  } md:h-8 md:w-8`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  className={`h-6 w-6 ${
                    isMobileMenuOpen ? "block" : "hidden"
                  } md:h-8 md:w-8`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div> */}
          </div>
        </div>
      </nav>

      {/* Sidebar for mobile view */}
      <div
        className={`fixed inset-0 z-40 flex justify-end ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "bg-gray-800 opactiy-90" : "bg-gray-800"
        }`}
      >
        <div className="flex-1" onClick={toggleMobileMenu}>
          <button
            type="button"
            className={`relative inline-flex items-center justify-center rounded-full p-2 text-gray-400 hover:bg-gray-700 hover:nav-text  ${
              isScrolled ? "bg-transparent" : "bg-transparent"
            }`}
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
            onClick={toggleMobileMenu}
          >
            <svg
              className={`h-6 w-6 ${
                isMobileMenuOpen ? "block" : "hidden"
              } md:h-8 md:w-8`}
              fill="white"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="white"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div
          className="w-64 h-full p-4 dynamic-margin"
          style={{ backgroundColor: "white" }}
        >
          <div className="flex items-center justify-end">
            <div className="flex-shrink-0">
              <a href="/">
                <img
                  className="h-8 w-100"
                  src="../../img/logo_dark.png"
                  alt="Brigade"
                />
               
              </a>
            </div>
          </div>
          <div className="space-y-1 px-2 pb-3 pt-10 sm:px-3">
            <a
              href="/"
              className={`block rounded-md px-3 py-2 text-base font-medium ${
                location.pathname === "/"
                  ? "bg_yellow text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:nav-text"
              }`}
              aria-current={location.pathname === "/" ? "page" : undefined}
            >
              Home
            </a>
          </div>
        </div>
        <style jsx>{`
  .dynamic-margin {
    margin-left: 82%;
  }
@media (min-width: 280px) and (max-width: 768px) {
    .dynamic-margin {
      margin-left: 9%;
    }
  }
  @media (min-width: 768px) {
    .dynamic-margin {
      margin-left: 21%;
    }
  }
    @media (min-width: 771px) and (max-width: 1142px)  {
    .dynamic-margin {
      margin-left: 60%;
    }
        }
     @media (min-width: 1144px) and (max-width: 1372px) {
    .dynamic-margin {
      margin-left: 70%;
    }
  } 
`}</style>
      </div>
    </div>
  );
};
