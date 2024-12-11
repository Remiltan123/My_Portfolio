import React from 'react';
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe, FaDatabase, FaJava  } from "react-icons/fa";
import {  SiWordpress } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Services" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Custom Web Development"
          des="I build responsive websites tailored to your business needs using React, Next.js, and other technologies."
          icon={<FaGlobe />}
        />
        <Card
          title="Frontend Development"
          des="Creating dynamic and interactive user interfaces with technologies like React, TailwindCSS, and Bootstrap."
          icon={<AiFillAppstore />}
        />
        <Card
          title="Backend Development"
          des="Developing robust and scalable server-side solutions with Node.js, Express, and MongoDB."
          icon={<FaDatabase />}
        />
        <Card
          title="E-commerce Solutions"
          des="Designing and building customized e-commerce platforms with secure payment gateway integration."
          icon={<FaMobile />}
        />
        <Card
          title="CMS Development"
          des="Providing custom WordPress themes, plugins, and headless CMS solutions for seamless content management."
          icon={<SiWordpress />}
        />
        
        <Card
          title="Java Development"
          des="Building efficient and scalable software applications using Java Core for various business needs."
          icon={<FaJava/>}
        />
        
      </div>
    </section>
  );
};

export default Features;
