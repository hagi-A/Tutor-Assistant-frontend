import React from "react";
import { Link } from "react-router-dom";
import ContactUs from "./ContactUs";

const Footer = () => {
  return (
    <>
    
    
      <footer className="bg-cyan-700 text-white py-6">
        <div className="container  flex flex-col md:flex-row items-center justify-between">
          <div className="links">
            <h1 className="foot_headers text-4xl text-teal-400">Links</h1>
            <div className="foot_elements">
              <Link
                activeClass="active"
                to="/"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                <p>Home</p>
              </Link>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                <p>About</p>
              </Link>
              <Link
                to="pricing"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                <p>Pricing</p>
              </Link>
              <Link
                to="contactUs"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                <p>Contact</p>
              </Link>
            </div>
          </div>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <a href="#" className="text-slate-200 hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-200 hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="text-slate-200 hover:text-white">
              FAQs
            </a>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p className="text-lg text-teal-400">
            &copy; {new Date().getFullYear()} Tutor Assistance. All rights
            reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
