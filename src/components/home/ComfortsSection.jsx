import React from 'react';
import icon1 from '../../../src/assets/icon_01.png'
import icon2 from "../../../src/assets/icon_02.png";
import icon3 from "../../../src/assets/icon_03.png";
import icon4 from "../../../src/assets/icon_04.png";
import icon5 from "../../../src/assets/icon_05.png";
import icon6 from "../../../src/assets/icon_06.png";
// eslint-disable-next-line no-unused-vars
import {motion} from 'motion/react'
const ComfortsSection = () => {
    const comfortsall = [
      {
        id: 1,
        title: "High Quality",
        subtitle:
          "Iriure reprimique pro ea, errem luptatum quo an, utinam nullam alienum te est.",
        img: icon1,
      },
      {
        id: 2,
        title: "Low Cost",
        subtitle:
          "Iriure reprimique pro ea, errem luptatum quo an, utinam nullam alienum te est.",
        img: icon2,
      },
      {
        id: 3,
        title: "Eco-Friendly Cleaning",
        subtitle:
          "Iriure reprimique pro ea, errem luptatum quo an, utinam nullam alienum te est.",
          img:icon3
      },
      {
        id: 4,
        title: "Professional Cleaning",
        subtitle:
          "Iriure reprimique pro ea, errem luptatum quo an, utinam nullam alienum te est.",
          img:icon4
      },
      {
        id: 5,
        title: "Excellent Result",
        subtitle:
          "Iriure reprimique pro ea, errem luptatum quo an, utinam nullam alienum te est.",
          img:icon5
      },
      {
        id: 6,
        title: "Quick Cleaning",
        subtitle:
          "Iriure reprimique pro ea, errem luptatum quo an, utinam nullam alienum te est.",
          img:icon6
      },
    ];
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        {comfortsall.map((item) => (
          <motion.div whileHover={{scaleX:1.3}} key={item.id} className="card bg-base-100  shadow-sm">
            <figure>
              <img
                src={item.img}
                alt={item.title}
                className='w-20'
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="text-3xl">{item.title}</h2>
              <p>{item.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </div>
    );
};

export default ComfortsSection;