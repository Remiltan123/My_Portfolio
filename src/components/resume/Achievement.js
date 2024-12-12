import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
import { GrCertificate } from "react-icons/gr";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Certifications</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="React Js Certification"
            subTitle="Great Learning (2024)"
            Link={<GrCertificate />}
            url="https://www.mygreatlearning.com/certificate/WLPFFSRB" 
            result="Completed"
            des="Completed an in-depth ReactJS training, covering core concepts such as components, state management, hooks, routing, and integrating with backend services using Node.js, MongoDB, and Express.js."
          />
          <ResumeCard
            title="JavaScript for Beginners"
            subTitle="Udemy (2024)"
            Link={<GrCertificate />}
            url="https://www.udemy.com/certificate/UC-a89b4d0b-b84d-490d-b2e9-0fb2e56a5bb4/"
            result="Completed"
            des="Completed an introductory JavaScript course covering fundamental concepts such as variables, data types, functions, loops, conditionals, and basic DOM manipulation to build interactive web applications."
          />
          <ResumeCard
            title="Machine Learning in Python"
            subTitle="Alison (2024)"
            Link={<GrCertificate />}
            url="https://alison.com/shop?course=3906&score=84" 
            result="Completed"
            des="Completed an in-depth course on machine learning using Python, covering key concepts such as supervised and unsupervised learning, regression, classification, clustering, and using libraries like scikit-learn and TensorFlow to build predictive models."
          />
          <ResumeCard
            title="MySQL"
            subTitle="Udemy (2024)"
            Link={<GrCertificate />}
            url="https://www.udemy.com/certificate/UC-e6f96862-759a-4619-86db-b4e427716386/" 
            result="Completed"
            des="Completed a comprehensive course on MySQL, covering essential database concepts such as relational database design, querying with SQL, joins, normalization, and optimization techniques for efficient data management and retrieval."
          />
          <ResumeCard
            title="Java Problem Solving"
            subTitle="HackerRank (2023)"
            Link={<GrCertificate />}
            url="https://www.hackerrank.com/certificates/fffdaac6f5cc"
            result="Completed"
            des="Completed a comprehensive problem-solving course focused on Java, covering algorithms, data structures, object-oriented programming, and writing efficient code to tackle real-world programming challenges."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
