import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="py-8 mt-5 border-t border-white/10 bg-[#1976d2] text-white px-5">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <p className="text-xs text-center text-white lg:text-left">
          Copyright &copy; 2022. Company Name. All rights reserved.
        </p>

        <nav className="flex justify-center space-x-4 text-xs text-gray-400 lg:justify-end">
          <Link to="/" className="text-white">
            {" "}
            Terms & Conditions{" "}
          </Link>
          <Link to="/" className="text-white">
            {" "}
            Privacy Policy{" "}
          </Link>
          <Link to="/" className="text-white">
            {" "}
            Cookies{" "}
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
