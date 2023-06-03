import { motion } from "framer-motion";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "../canvas";
import { slideIn } from "@/utils/motion";

const ContactForm = ({ formRef, handleSubmit, handleChange, form, loading }) => {
  return (
    <form ref={formRef} className="mt-12 flex flex-col gap-8">
      <label className="flex flex-col">
        <span className="text-white font-medium mb-4">Your Name</span>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="What's your name?"
          className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
        />
      </label>
      <label className="flex flex-col">
        <span className="text-white font-medium mb-4">Your Email</span>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="What's your email?"
          className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
        />
      </label>
      <label className="flex flex-col">
        <span className="text-white font-medium mb-4">Your Message</span>
        <textarea
          rows="7"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="What do you want to say?"
          className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
        />
      </label>

      <button
        type="submit"
        className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl "
      >
        {loading ? "Sending..." : "Send"}
      </button>
    </form>
  );
};

export default ContactForm;
