"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
const ContactPage = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
      })
      .then(
        () => {
          setSuccessMessage(true);
          setErrorMessage(false);
          form.current.reset();
        },
        (error) => {
          setErrorMessage(true);
          setSuccessMessage(false);
        }
      );
  };
        (error) => {
          console.log("FAILED...", error.text);
        }
    const [successMessage, setSuccessMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    const message = " Let us get in touch";
    return (
      <motion.div
        className="h-full"
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col items-center justify-center px-4 h- sm:px-8 lg:flex-row lg:px-16 h-[80%]">
          <div className="flex items-center mb-12 text-4xl h-1/2 lg:mb-0 lg:h-full h:1/2 lg:w-1/2 lg:justify-center">
            {message.split("/n").map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
                className="text-center uppercase lg:text-5xl"
              >
                {word}
              </motion.span>
            ))}
            <span className="ml-2 animate-bounce">😀</span>
          </div>
          <form
            className="flex flex-col justify-center w-full gap-8 p-8 h-1/2 lg:w-1/2 lg:mt-24"
            ref={form}
            onSubmit={sendEmail}
          >
            <h2 className="text-2xl tracking-wide lg:text-3xl">Dear Oscar,</h2>
            <div className="mb-4">
              <label
                className="block mb-2 text-gray-300 lg:text-2xl"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="w-full p-3 text-white bg-gray-700 rounded focus:outline-none focus:ring focus:ring-blue-500"
                name="user_name"
                type="text"
                id="user_name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-gray-300 lg:text-2xl"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full p-3 text-white bg-gray-700 rounded focus:outline-none focus:ring focus:ring-blue-500 lg:text-2xl"
                name="user_email"
                type="text"
                id="email"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block mb-2 text-gray-300 lg:text-2xl"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                name="user_message"
                className="w-full p-3 text-white bg-gray-700 rounded focus:outline-none focus:ring focus:ring-blue-500 "
                id="message"
                rows="5"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 text-white transition duration-300 bg-blue-600 rounded hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 lg:p-6 lg:text-2xl"
            >
              Submit
            </button>
            {successMessage && (
              <span className="mt-4 text-center text-green-500">
                Your message has been sent successfully!
              </span>
            )}
            {errorMessage && (
              <span className="mt-4 text-center text-red-500">
                Something went wrong, please try again later!
              </span>
            )}
          </form>
        </div>
      </motion.div>
    );
  };
export default ContactPage;
