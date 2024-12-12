import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* Education Section */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Computer Engineering"
            subTitle="University of Jeprura (2022 - Present)"
            result="N/A"
            des="Currently pursuing a Bachelor's degree in Computer Engineering at the University of Jeprura. My studies cover key areas such as algorithms, data structures, computer networks, operating systems, machine learning, and system design. I am gaining practical experience in software development, problem-solving, and system design through both individual and group projects. My goal is to apply my knowledge to develop innovative solutions in the tech industry while exploring new areas of technology."
          />

          <ResumeCard
            title="Full Stack Web Development"
            subTitle="Udemy, Coursera, and YouTube Platforms (2023-2024)"
            result="Completed"
            des="Completed a comprehensive Full Stack Web Development course covering front-end and back-end technologies such as HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. Gained hands-on experience in building and deploying dynamic and responsive web applications."
          />

          <ResumeCard
            title="Secondary School Education"
            subTitle="St/ Henry's college illavaalai (2013-2020)"
            result="Completed"
            des="Successfully completed secondary school education, focusing on foundational subjects including mathematics, science, and computer studies, which sparked my interest in technology and engineering."
          />

        </div>
      </div>

    </motion.div>
  );
};

export default Education;
