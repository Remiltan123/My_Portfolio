import React, { useState } from 'react';
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';

const Contact = () => {
  const [formData, setFormData] = useState({
    username: '',
    phoneNumber: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errMsg, setErrMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const API_URL = 'https://api.sheetbest.com/sheets/3ca4a8da-5649-4c4d-b3e1-10e651fe88ff';

  const emailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/);
  };

  const validateFields = () => {
    if (!formData.username) return 'Username is required!';
    if (!formData.phoneNumber) return 'Phone number is required!';
    if (!formData.email) return 'Please provide your Email!';
    if (!emailValidation(formData.email)) return 'Please provide a valid Email!';
    if (!formData.subject) return 'Subject is required!';
    if (!formData.message) return 'Message is required!';
    return null;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSend = async (e) => {
    e.preventDefault();

    const error = validateFields();
    if (error) {
      setErrMsg(error);
      return;
    }

    setErrMsg('');
    setSuccessMsg('');
    try {
      const payload = {
        Username: formData.username,
        PhoneNumber: formData.phoneNumber,
        Email: formData.email,
        Subject: formData.subject,
        Message: formData.message,
      };

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSuccessMsg(`Thank you, ${formData.username}. Your message has been sent successfully!`);
        setFormData({ username: '', phoneNumber: '', email: '', subject: '', message: '' });

        // Hide success message after 5 seconds
        setTimeout(() => {
          setSuccessMsg('');
        }, 5000);
      } else {
        const errorMessage = await response.text();
        setErrMsg(`Failed to send your message. Error: ${errorMessage}`);
      }
    } catch (error) {
      setErrMsg('An error occurred. Please try again later.');
    }
  };

  return (
    <section id="contact" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            <form className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">
              {errMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">Your Name</p>
                  <input
                    name="username"
                    onChange={handleInputChange}
                    value={formData.username}
                    className="contactInput"
                    type="text"
                  />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">Phone Number</p>
                  <input
                    name="phoneNumber"
                    onChange={handleInputChange}
                    value={formData.phoneNumber}
                    className="contactInput"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">Email</p>
                <input
                  name="email"
                  onChange={handleInputChange}
                  value={formData.email}
                  className="contactInput"
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">Subject</p>
                <input
                  name="subject"
                  onChange={handleInputChange}
                  value={formData.subject}
                  className="contactInput"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">Message</p>
                <textarea
                  name="message"
                  onChange={handleInputChange}
                  value={formData.message}
                  className="contactTextArea"
                  cols="30"
                  rows="8"
                ></textarea>
              </div>
              <div className="w-full">
                <button
                  onClick={handleSend}
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  Send Message
                </button>
              </div>
              {successMsg && (
                <p className="mt-4 text-green-500 text-center text-base tracking-wide animate-fade-out">
                  {successMsg}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
