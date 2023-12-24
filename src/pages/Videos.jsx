import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Videos = () => {
  return (
    <div>
      <Navbar />

      <h1 className="text-3xl text-center mt-6">
        NCI has it's own Clown Channel on{" "}
        <span className="font-bold text-red-600">YouTube</span>
      </h1>
      <p className="text-base text-center mt-4">
        We are busy planning how to make NCI even more impactful and are happy
        to share a series of introduction videos by our experienced instructors:
      </p>

      <div className="grid grid-cols-3 grid-rows-4 gap-x-8 gap-y-12 mb-16 max-w-6xl mx-auto mt-8">
        <div>
          <iframe
            width="354"
            height="229"
            src="https://www.youtube.com/embed/etXJPDaytVQ"
            title="Welcome to the Institute"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <p className="text-center">Intro to NCI</p>
        </div>

        <div>
          <iframe
            width="354"
            height="229"
            src="https://www.youtube.com/embed/y2bo5oIGY1M"
            title="Disco Legal issues of clowning"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <p className="text-center">Legal Issues of Clowning</p>
        </div>

        <div>
          <iframe
            width="354"
            height="229"
            src="https://www.youtube.com/embed/DfV4dIKCUVs"
            title="TwinkleToes and Balloons 101 Northeast Clown Institute"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <p className="text-center">Intro to Balloons</p>
        </div>

        <div>
          <iframe
            width="354"
            height="229"
            src="https://www.youtube.com/embed/qZ_5E18N6Wk"
            title="White Face Make Up with Simplicity"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>

        <div>
          <iframe
            width="354"
            height="229"
            src="https://www.youtube.com/embed/Zf98Ddu_ofg"
            title="DoNo Hobo Clown"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <p className="text-center">Hobo / Tramp</p>
        </div>

        <div>
          <iframe
            width="354"
            height="229"
            src="https://www.youtube.com/embed/Nkqzb6O9ZKE"
            title="Intro to Beginner August Clown Makeup"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <p className="text-center">Light Auguste</p>
        </div>

        <div>
          <iframe
            width="354"
            height="229"
            src="https://www.youtube.com/embed/DJtkqxETpSg"
            title="NCI ‘22 Promo - Doc Kazin"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <p className="text-center">Advanced Auguste & Make Up Repair</p>
        </div>

        <div>
          <iframe
            width="354"
            height="229"
            src="https://www.youtube.com/embed/Ko6UEjxh-XY"
            title="Peggy Intro to  Bag Lady"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <p className="text-center">Intro to Bag Lady</p>
        </div>

        <div>
          <iframe
            width="354"
            height="229"
            src="https://www.youtube.com/embed/ehCeDxAwKuM"
            title="Washcloth animals brief Intro for NCI"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <p className="text-center">Wash Cloth Animals</p>
        </div>

        <div>
          <iframe
            width="354"
            height="229"
            src="https://www.youtube.com/embed/bVE_wvFw8fI"
            title="Sneaker Fund"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <p className="text-center">ISCA Sneaker Fund</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Videos;
