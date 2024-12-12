import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
import { GrCertificate } from "react-icons/gr";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* Professional Experience Section */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Professional Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Freelance Web Developer"
            subTitle="Self-Employed (2018 - Present)"
            result="Remote"
            des="Designed and developed responsive web applications using ReactJS, NextJS, and TailwindCSS. Delivered projects for diverse clients, integrating third-party APIs and ensuring scalability. Gained experience in client communication, project management, and solving real-world technical challenges."
          />
          <ResumeCard
            title="Full Stack Developer"
            subTitle="MERN Stack Applications (2022 - Present)"
            result="N/A"
            des="Built and deployed dynamic web applications with the MERN stack, focusing on creating RESTful APIs, managing authentication, and delivering optimized user experiences. Enhanced my knowledge of backend architecture and full-stack development processes."
          />
          <ResumeCard
            title="Orphage Management System"
            subTitle="Personal Project (2024)"
            result="Completed"
            des="A Management Information System (MIS) designed for Child Protection Authorities to modernize orphanage management and strengthen child protection efforts using digital technology. Learned how to structure complex databases, implement CRUD operations, and apply best practices for secure user authentication."
          />
          <ResumeCard
            title="Pet Store Management System"
            subTitle="Client Project (2024)"
            result="Completed"
            des="Created a responsive platform for users to explore and select dream pets and products, utilizing NextJS and TailwindCSS for seamless user experience. Improved skills in responsive web design, API integration, and UI/UX principles."
          />
          <ResumeCard
            title="Gym Management System"
            subTitle="Client Project (2024)"
            result="Completed"
            des="I developed a Gym Management System for my village gym to streamline operations, including member registration, trainer assignments, membership plans, and payment tracking. Gained practical experience in building scalable web applications and handling user data securely."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
