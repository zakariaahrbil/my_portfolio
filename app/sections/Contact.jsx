"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      // You can replace this with your actual form submission logic
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulating API call
      console.log("Form submitted:", data);
      setSubmitSuccess(true);
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative h-full w-full z-0 mt-30">
      <img
        src="./eyebg.png"
        className="absolute inset-0 object-cover object-center opacity-50"
      />
      <section
        id="contact-me"
        className="sm:min-h-screen w-[95%] max-w-8xl mx-auto relative max-sm:px-4"
      >
        <div className="w-full flex flex-col items-center justify-center relative z-10">
          <h2 className="text-5xl md:text-6xl lg:text-8xl font-medium sm:mb-14 mb-8 tracking-tighter text-center">
            Contact-me
          </h2>

          <div className="w-full max-w-xl mx-auto">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="fullName" className="sm:text-xl font-light">
                  Full name
                </label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="your name"
                  {...register("fullName", { required: "Name is required" })}
                  className={`bg-white/6 backdrop-blur-md  rounded-full py-4 px-6 focus:outline-none text-white placeholder:text-white/30 ${
                    errors.fullName
                      ? "border border-red-500"
                      : ""
                  }`}
                />
                {errors.fullName && (
                  <p className="text-sm text-red-400 mt-1">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="sm:text-xl font-light">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="your email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className={`bg-white/6 backdrop-blur-md  rounded-full py-4 px-6 focus:outline-none text-white placeholder:text-white/30 ${
                    errors.email
                      ? "border border-red-500"
                      : ""
                  }`}
                />
                {errors.email && (
                  <p className="text-sm text-red-400 mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="sm:text-xl font-light">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Write your message..."
                  rows={5}
                  {...register("message", { required: "Message is required" })}
                  className={`bg-white/6 backdrop-blur-md  rounded-2xl py-4 px-6 focus:outline-none text-white placeholder:text-white/30 resize-none ${
                    errors.message
                      ? "border border-red-500"
                      : ""
                  }`}
                />
                {errors.message && (
                  <p className="text-sm text-red-400 mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="bg-white text-black py-3 px-10 rounded-full self-center mt-2  text-2xl w-full tracking-tighter"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>

              {submitSuccess && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-green-400 mt-4"
                >
                  Thank you for your message! I'll get back to you soon.
                </motion.p>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};


export default Contact;
