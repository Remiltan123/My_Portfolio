import React from 'react'
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Regi Remi</h3>
        <p className="text-lg font-normal text-white">
          Full Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Thanks for visiting my portfolio! If you have any questions or want to discuss a project, feel free to reach out. I'm open to new opportunities and collaborations. I look forward to hearing from you!
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText"><span className='font-bold text-white'>+94775353837</span></span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText"><span className='font-bold text-white'>regiremiltan2002@gmail.com</span></span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
        <a href="https://github.com/Remiltan123" target="blank">
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
            <a href="https://www.linkedin.com/in/regi-remiltan-re15" target="blank">
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
            <a href="https://www.facebook.com/joesphregi.remiltan?mibextid=ZbWKwL" target="blank">
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
            </a>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft