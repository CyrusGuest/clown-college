import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img11 from "../images/1-1.jpg";
import img12 from "../images/1-2.jpg";
import img21 from "../images/2-1.jpg";
import img22 from "../images/2-2.jpg";
import img31 from "../images/3-1.jpg";
import img32 from "../images/3-2.jpg";
import img41 from "../images/4-1.jpeg";
import img42 from "../images/4-2.jpg";

const MeetTheBoard = () => {
  return (
    <div>
      <Navbar />

      <div className="mx-auto max-w-6xl mb-16">
        <h1 className="text-3xl mt-6 mb-4">Meet your Board of Directors</h1>

        <p>
          In order to help you find the NCI Board of Directors,{" "}
          <span className="text-purple-600">we all wear a purple vest</span> --
          feel free to approach any of us, ask anything...
        </p>

        <br />

        <p>We're here to help! We'll keep adding pictures as we get them...</p>

        <br />

        <p>
          And since we are often "in face" at NCI -- here are some Before and
          After shots.
        </p>

        <br />

        <div className="grid grid-cols-4 grid-rows-2 gap-4">
          <div className="w-44">
            <img src={img11} alt="" />
            <p className="text-center text-sm">Sam Miller</p>
          </div>

          <div className="w-44">
            <img src={img12} alt="" />
            <p className="text-center text-sm">Disco</p>
          </div>

          <div className="w-44">
            <img src={img21} alt="" />
            <p className="text-center text-sm">Martin Koechel</p>
          </div>

          <div className="w-44">
            <img src={img22} alt="" />
            <p className="text-center text-sm">Happy</p>
          </div>

          <div className="w-44">
            <img src={img31} alt="" />
            <p className="text-center text-sm">Peggy Haller</p>
          </div>

          <div className="w-44">
            <img src={img32} alt="" />
            <p className="text-center text-sm">Birdie Mae Dew</p>
          </div>

          <div className="w-44">
            <img src={img41} alt="" />
            <p className="text-center text-sm">Dennis Schweinsburg</p>
          </div>

          <div className="w-44">
            <img src={img42} alt="" />
            <p className="text-center text-sm">Radish</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MeetTheBoard;
