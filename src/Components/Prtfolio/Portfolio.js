import { Button } from "@mui/material";
import React from "react";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import { Link } from "react-router-dom";
const Portfolio = () => {
  return (
    <div className="my-5 w-screen mx-auto text-center">
      <div className="font-bold text-3xl md:text-5xl"> My Works </div>

      <div className="my-9 w-full md:w-3/4 mx-auto text-white my-shadow p-3 rounded bg-white ">
        <div className="py-5 text-black">
          <img
            src="https://i.ibb.co/CKNTjTt/Screenshot-64.png"
            alt=""
            className="lg:w-[70%] mx-auto my-shadow rounded-md"
          />
        </div>
        <h2 className="font-bold my-3 bg-[#f50057] mx-3 rounded px-2 py-1">
          My Personal Portfolio
        </h2>
        <p className="para-font font-bold text-zinc-500 px-3 py-5 bg-slate-200 mx-3 rounded">
          The project is a personal port
        </p>
        <div className="my-5">
          {" "}
          <a href="https://riad960.github.io/My-portfolio/">
            <Button endIcon={<OndemandVideoIcon />} variant="contained">
              Live preview
            </Button>
          </a>
        </div>
      </div>
      {/* 2nd question  */}
      <div className="my-9 w-full md:w-3/4 mx-auto text-white my-shadow p-3 rounded bg-white ">
        <div className="py-5 text-black">
          <img
            src="https://i.ibb.co/FbdQ5HH/Screenshot-71.png"
            alt=""
            className="lg:w-[70%] mx-auto my-shadow rounded-md"
          />
        </div>
        <h2 className="font-bold my-3 bg-[#f50057] mx-3 rounded px-2 py-1">
          My Personal Portfolio
        </h2>
        <p className="para-font font-bold text-zinc-500 px-3 py-5 bg-slate-200 mx-3 rounded">
          The project is a personal port
        </p>
        <div className="my-5">
          {" "}
          <a href="https://travel-go-go-c23b7.firebaseapp.com/">
            <Button endIcon={<OndemandVideoIcon />} variant="contained">
              Live preview
            </Button>
          </a>
        </div>
      </div>
      <div className="my-9 w-full md:w-3/4 mx-auto text-white my-shadow p-3 rounded bg-white ">
        <div className="py-5 text-black">
          <img
            src="https://i.ibb.co/p34M7b2/Screenshot-72.png"
            alt=""
            className="lg:w-[70%] mx-auto my-shadow rounded-md"
          />
        </div>
        <h2 className="font-bold my-3 bg-[#f50057] mx-3 rounded px-2 py-1">
          My Personal Portfolio
        </h2>
        <p className="para-font font-bold text-zinc-500 px-3 py-5 bg-slate-200 mx-3 rounded">
          The project is a personal port
        </p>
        <div className="my-5">
          {" "}
          <a href="https://classic-watch-ba313.firebaseapp.com/">
            <Button endIcon={<OndemandVideoIcon />} variant="contained">
              Live preview
            </Button>
          </a>
        </div>
      </div>
      {/* 3rd question  */}

      {/* 4rth question  */}
    </div>
  );
};

export default Portfolio;
