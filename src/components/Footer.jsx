import React from "react";
import map from "../images/map.png";

const Footer = () => {
  return (
    <div className="w-full mb-16">
      <hr className="max-w-7xl mx-auto" />

      <div className="grid grid-cols-3 mx-auto max-w-6xl mt-8 gap-12">
        <div className="flex flex-col">
          <h1 className="text-xl">
            <span className="font-bold">82 Lothrop St</span>
            <span className="text-base">, Oshkosh, WI</span>
          </h1>

          <img src={map} alt="" className="w-64 mt-6" />
        </div>

        <div className="flex flex-col">
          <h1 className="text-xl">Our mission...</h1>

          <div className="text-sm mt-6 flex flex-col gap-4 italic">
            <p>
              The Northeast Clown Institute is a non-profit educational
              organization, open to all who wish to develop and/or improve their
              clowning skills.
            </p>
            <p>
              NCI is committed to keeping our tuition costs down, so that the
              average person can afford to come and learn the clowning craft.
            </p>
            <p>
              Our vendors are informative and helpful, bringing with them their
              clowning experiences and knowledge to share with the students.
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          <h1 className="text-xl">Contact us</h1>

          <div className="flex flex-col text-sm mt-6 italic">
            <p>Northeast Clown Inst.</p>
            <p>82 Lothrop St, Oshkosh, WI, USA</p>
            <p>821-391-3463</p>
            <p>admissions@nci.edu</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
