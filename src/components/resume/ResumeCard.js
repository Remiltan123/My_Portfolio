import React from "react";
import { motion } from "framer-motion";
import { GrCertificate } from "react-icons/gr";

const ResumeCard = ({ title, subTitle, result, des, Link, url }) => {
  return (
    <div className="w-full h-1/3 group flex">
      <div className="w-10 h-[6px] bgOpacity mt-16 relative">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
          <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
        </span>
      </div>
      <div className="w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-shadowOne">
        <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold group-hover:text-white duration-300">
              {title}
            </h3>
            <p className="text-sm mt-2 text-gray-400 group-hover:text-white duration-300">
              {subTitle}
            </p>
            <p className="text-sm mt-2 text-gray-400 group-hover:text-white duration-300 flex items-center gap-2">
              {Link && (
                <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <div className="p-2 bg-gray-200 rounded-full hover:bg-blue-100 transition-all duration-300 hover:shadow-lg flex items-center justify-center">
                    <GrCertificate className="text-2xl text-gray-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-110" />
                  </div>
                  <span className="text-blue-500 hover:text-blue-700">View Certificate</span>
                </a>
              )}
            </p>
          </div>
          <div>
            <p className="px-4 py-2 text-designColor bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-sm font-medium">
              {result}
            </p>
          </div>
        </div>
        <p className="text-sm md:text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300">
          {des}
        </p>
      </div>
    </div>
  );
};

export default ResumeCard;
