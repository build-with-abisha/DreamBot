"use client"

import React from 'react'
import { ChartBarIcon, CloudLightning, Cpu, Github, Lightbulb, Linkedin, Lock, RainbowIcon, RibbonIcon, Shield, Star, Twitter } from "lucide-react";
import Image from 'next/image';
import { motion } from 'framer-motion';

const page = () => {
  return (
    <>
    <section className="bg-black w-full pt-36 md:pt-45 pb-10 md:pb-20 flex flex-col md:flex-row items-center justify-center px-6 md:px-16 lg:px-24 2xl:px-30 gap-12">
      
      <motion.div initial={{x:-100, opacity:0}} whileInView={{x:0, opacity:1, transition:{duration:0.8, delay:0.2}}} viewport={{once:true}} className="flex-1 flex flex-col justify-center text-center md:text-left gap-6">
        <h2 className="text-2xl md:text-4xl xl:text-5xl font-bold text-white uppercase">Discover <span className="text-[#28c1fa]">DreamBot</span></h2>
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed">Your AI-powered digital partner designed to simplify work, automate tasks, and unlock creativity.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="flex flex-col items-center gap-2 p-4 bg-[#011b2a] rounded-xl shadow-lg hover:shadow-[#28c1fa]/50 hover:scale-105 transition-transform duration-300">
            <Cpu size={32} className="text-[#28c1fa]"/>
            <h4 className="text-white font-semibold text-center">Smart Automation</h4>
            <p className="text-gray-300 text-sm text-center">Streamline your tasks effortlessly</p>
          </div>

          <div className="flex flex-col items-center gap-2 p-4 bg-[#011b2a] rounded-xl shadow-lg hover:shadow-[#28c1fa]/50 hover:scale-105 transition-transform duration-300">
            <CloudLightning size={32} className="text-[#28c1fa]"/>
            <h4 className="text-white font-semibold text-center">Fast Insights</h4>
            <p className="text-gray-300 text-sm text-center">Turn data into decisions instantly</p>
          </div>

          <div className="flex flex-col items-center gap-2 p-4 bg-[#011b2a] rounded-xl shadow-lg hover:shadow-[#28c1fa]/50 hover:scale-105 transition-transform duration-300">
            <Shield size={32} className="text-[#28c1fa]"/>
            <h4 className="text-white font-semibold text-center">Secure & Reliable</h4>
            <p className="text-gray-300 text-sm text-center">Your data stays safe and private</p>
          </div>
        </div>

      </motion.div>

      <motion.div initial={{x:100, opacity:0}} whileInView={{x:0, opacity:1, transition:{duration:0.8, delay:0.2}}} viewport={{once:true}} className="flex-1 flex justify-center">
        <img src="/globe.png" alt="About DreamBot" className="w-60 sm:w-80 lg:w-100 xl:w-120 max-w-lg object-cover"/>
      </motion.div>

    </section>

    {/* Our story */}

     <section className="bg-black w-full md:py-10 px-6 md:px-16 lg:px-24 flex flex-col md:flex-row items-center gap-12">
      
      <motion.div initial={{x:-100, opacity:0}} whileInView={{x:0, opacity:1, transition:{duration:0.8, delay:0.4}}} viewport={{once:true}} className="flex-1 flex justify-center md:justify-start">
        <img src="/robotside.png" alt="Our Story" className="hidden md:flex w-50 md:w-70 lg:w-80 2xl:w-90 max-w-lg rounded-xl shadow-lg object-cover"/>
      </motion.div>

      <motion.div initial={{x:100, opacity:0}} whileInView={{x:0, opacity:1, transition:{duration:0.8, delay:0.4}}} viewport={{once:true}} className="flex-1 flex flex-col justify-center text-center md:text-left gap-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white uppercase">Our <span className="text-[#28c1fa]">Story</span></h2>
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed">DreamBot was born from a vision to empower creators, professionals, and innovators with AI tools that simplify work and spark creativity.</p>
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed">From automating tasks to delivering actionable insights, we’ve built DreamBot to help you focus on what truly matters.</p>
      </motion.div>

    </section>

    {/* Team SEction */}

    <section className="bg-black w-full py-24 px-6 md:px-16 lg:px-24">

      <motion.div initial={{y:-60, opacity:0}} whileInView={{y:0, opacity:1, transition:{duration:0.8, delay:0.3}}} viewport={{once:true}} className="text-center mb-16">
        <h2 className="text-2xl md:text-4xl xl:text-5xl font-bold text-white uppercase">Meet Our <span className="text-[#28c1fa]">Team</span></h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">The brilliant minds behind DreamBot, pushing AI innovation forward.</p>
      </motion.div>

      {/* Team Cards */}
      <motion.div initial={{y:70, opacity:0}} whileInView={{y:0, opacity:1, transition:{duration:0.8, delay:0.3}}} viewport={{once:true}} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Card 1 */}
        <div className="relative bg-linear-to-b from-[#0a1a2a] to-[#05688c] rounded-3xl p-6 flex flex-col items-center text-center shadow-lg hover:shadow-[#28c1fa]/50 transition-all duration-500 hover:-translate-y-3">
          <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-[#28c1fa]">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQBDox39ubeWBKcvnjRzPyPY2-z9AUIlNv_w&s" alt="Alice Johnson" className="w-full h-full object-cover" />
          </div>
          <h4 className="text-white font-semibold text-lg">Alice Johnson</h4>
          <p className="text-[#28c1fa] text-sm mb-3">Founder & CEO</p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-[#28c1fa]"><Twitter size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-[#28c1fa]"><Linkedin size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-[#28c1fa]"><Github size={20} /></a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative bg-linear-to-b from-[#0a1a2a] to-[#05688c] rounded-3xl p-6 flex flex-col items-center text-center shadow-lg hover:shadow-[#28c1fa]/50 transition-all duration-500 hover:-translate-y-3">
          <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-[#28c1fa]">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg" alt="Mark Stevens" className="w-full h-full object-cover" />
          </div>
          <h4 className="text-white font-semibold text-lg">Mark Stevens</h4>
          <p className="text-[#28c1fa] text-sm mb-3">Head of Product</p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-[#28c1fa]"><Twitter size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-[#28c1fa]"><Linkedin size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-[#28c1fa]"><Github size={20} /></a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative bg-linear-to-b from-[#0a1a2a] to-[#05688c] rounded-3xl p-6 flex flex-col items-center text-center shadow-lg hover:shadow-[#28c1fa]/50 transition-all duration-500 hover:-translate-y-3">
          <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-[#28c1fa]">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/038/962/461/small/ai-generated-caucasian-successful-confident-young-businesswoman-ceo-boss-bank-employee-worker-manager-with-arms-crossed-in-formal-wear-isolated-in-white-background-photo.jpg" alt="Sarah Lee" className="w-full h-full object-cover" />
          </div>
          <h4 className="text-white font-semibold text-lg">Sarah Lee</h4>
          <p className="text-[#28c1fa] text-sm mb-3">Lead AI Engineer</p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-[#28c1fa]"><Twitter size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-[#28c1fa]"><Linkedin size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-[#28c1fa]"><Github size={20} /></a>
          </div>
        </div>

        {/* Card 4 */}
        <div className="relative bg-linear-to-b from-[#0a1a2a] to-[#05688c] rounded-3xl p-6 flex flex-col items-center text-center shadow-lg hover:shadow-[#28c1fa]/50 transition-all duration-500 hover:-translate-y-3">
          <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-[#28c1fa]">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf1BrCe-APUQkbJt_VrNq1BL5Z7vql6xE-Sw&s" alt="David Kim" className="w-full h-full object-cover" />
          </div>
          <h4 className="text-white font-semibold text-lg">David Kim</h4>
          <p className="text-[#28c1fa] text-sm mb-3">UX/UI Designer</p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-[#28c1fa]"><Twitter size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-[#28c1fa]"><Linkedin size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-[#28c1fa]"><Github size={20} /></a>
          </div>
        </div>
      </motion.div>
    </section>

    </>
  )
}

export default page
