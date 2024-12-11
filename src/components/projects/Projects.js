import React from 'react'
import Title from '../layouts/Title'
import { FoodImg,Orphange,Ecomerce ,GYM,Exam,Car } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY POJECTS AND CONTACT FOR MY SERVICES"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Restaurant view page"
          des=" This page displays detailed information about the restaurant, including its menu, location, Table Booked, Latest News and reviews"
          src={FoodImg}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" A web application offering a seamless online shopping experience for dress sales, allowing users to browse clothing categories, filter products, and add items to their cart!"
          src={Ecomerce}
        />
        <ProjectsCard
          title="Orphanage Management system"
          des=" A Management Information System (MIS) designed for Child Protection Authorities to modernize orphanage management and strengthen child protection efforts using digital technology"
          src={Orphange}
        />
        <ProjectsCard
          title="Gym Management System"
          des=" I developed a Gym Management System for my village gym to streamline operations, including member registration, trainer assignments, membership plans, and payment tracking."
          src={GYM}
        />
        <ProjectsCard
          title="A Car Repair System" 
          des="A Car Repair System helps repair shops manage vehicle info, appointments, repairs, inventory, and invoices, while keeping customers updated on repair status and maintenance reminders."
          src={Car}
        />
        <ProjectsCard
          title="View Exam Result"
          des=" Developed a user-friendly exam result webpage for Tamil Union University, allowing students to efficiently view their results. Integrated a feature to access subject-specific grading scheme PDFs"
          src={Exam}
        />
      </div>
    </section>
  );
}

export default Projects