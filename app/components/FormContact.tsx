"use client";
import React, { useState } from "react";

export default function FormContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [notification, setNotification] = useState({
    type: "", // 'success', 'error', or 'warning'
    message: "",
    visible: false,
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    // Perform any necessary validation here

    try {
      const response = await fetch("https://www.andrelemos.site/mail.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData),
      });

      if (response.ok) {
        setNotification({
          type: "success",
          message: "Form submitted successfully.",
          visible: true,
        });
      } else {
        setNotification({
          type: "error",
          message: "Form submission error.",
          visible: true,
        });
      }
    } catch (error) {
      setNotification({
        type: "error",
        message: "Network error.",
        visible: true,
      });
    }
  };

  const closeNotification = () => {
    setNotification((prev) => ({ ...prev, visible: false }));
  };

  return (
    <div className="relative">
      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="flex flex-col lg:flex-row">
          <input
            name="name"
            type="text"
            className="lg:w-[268px] h-[41px] border-black border-2 px-3"
            placeholder="Seu Nome"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            name="email"
            type="email"
            className="mt-4 lg:mt-0 lg:ms-[29px] lg:w-[268px] h-[41px] border-black border-2 px-3"
            placeholder="Seu Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <input
          name="subject"
          type="text"
          className="mt-4 lg:w-[565px] h-[41px] border-black border-2 px-3"
          placeholder="Assunto"
          value={formData.subject}
          onChange={handleChange}
        />
        <textarea
          name="message"
          className="mt-4 lg:w-[565px] py-[10px] border-black border-2 px-3"
          placeholder="Mensagem"
          rows={10}
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <input
          type="submit"
          className="cursor-pointer mt-4 lg:w-[565px] py-[10px] border-black border-4 px-3 font-semibold hover:bg-black hover:text-white"
        />
      </form>

      {/* Notifications */}
      {notification.visible && (
        <div
          className={`fixed top-4 right-4 flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow ${notification.type === 'success' ? 'bg-green-100 text-green-500' : notification.type === 'error' ? 'bg-red-100 text-red-500' : 'bg-orange-100 text-orange-500'}`}
          role="alert"
        >
          <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg">
            {notification.type === 'success' && (
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
              </svg>
            )}
            {notification.type === 'error' && (
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z"/>
              </svg>
            )}
            {notification.type === 'warning' && (
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z"/>
              </svg>
            )}
          </div>
          <div className="ms-3 text-sm font-normal">{notification.message}</div>
          <button type="button" className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8" aria-label="Close" onClick={closeNotification}>
            <span className="sr-only">Close</span>
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
