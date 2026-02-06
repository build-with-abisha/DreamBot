"use client";

import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

const Page = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false); // added loading state

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // start loading

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        toast.success("Message sent successfully!");
        setForm({ name: "", email: "", subject: "", message: "" }); // reset form
      } else {
        toast.error("Something went wrong ❌");
      }
    } catch (error) {
      toast.error("Network error ❌");
    } finally {
      setLoading(false); // stop loading
    }
  };

  return (
    <div className="bg-black min-h-screen text-white">
      <Toaster />

      {/* Header Section */}
      <motion.section initial={{y:-60, opacity:0}} whileInView={{y:0, opacity:1, transition:{duration:0.8, delay:0.3}}} viewport={{once:true}} className="w-full pt-40 xl:pt-45 px-6 md:px-16 lg:px-24 text-center">
        <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold uppercase">Get in <span className="text-[#28c1fa]">Touch</span></h1>
      </motion.section>

      {/* Contact Form Section */}
      <motion.section initial={{y:70, opacity:0}} whileInView={{y:0, opacity:1, transition:{duration:0.8, delay:0.3}}} viewport={{once:true}} className="w-full py-12 px-6 md:px-16 lg:px-24">
        <div className="max-w-3xl mx-auto bg-[#002134] p-8 rounded-2xl">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>

            <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" className="bg-[#011019] p-4 rounded-xl" required/>
            <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Your Email" className="bg-[#011019] p-4 rounded-xl" required/>
            <input name="subject" value={form.subject} onChange={handleChange} placeholder="Subject" className="bg-[#011019] p-4 rounded-xl" required/>
            <textarea name="message" value={form.message} onChange={handleChange} rows={6} placeholder="Your Message" className="bg-[#011019] p-4 rounded-xl" required/>

            <button type="submit" disabled={loading} className={`px-6 py-3 rounded-full transition ${loading ? "bg-gray-500 cursor-not-allowed" : "bg-linear-to-r from-[#0679a2] to-[#7bd5f6]"}`}>{loading ? "Sending..." : "SEND MESSAGE"}</button>
          </form>
        </div>
      </motion.section>
    </div>
  );
};

export default Page;
