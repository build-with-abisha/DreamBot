"use client"

import React from "react";
import { ChartBarIcon, CloudLightning, Cpu, Lightbulb, Lock, RainbowIcon, RibbonIcon, Shield, Star } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const page = () => {
  const features = [
    {
      icon: <RainbowIcon size={36} className="text-[#28c1fa]"/>,
      title: "AI Automation",
      description:"Streamline your daily tasks with smart AI-powered automation designed to save you time and effort.",
    },
    {
      icon: <Lightbulb size={36} className="text-[#28c1fa]"/>,
      title: "Creative Tools",
      description:"Unleash creativity with AI that generates text, designs, and visuals in seconds.",
    },
    {
      icon: <ChartBarIcon size={36} className="text-[#28c1fa]"/>,
      title: "Smart Analytics",
      description:"Turn complex data into clear insights and make faster, smarter business decisions.",
    },
    {
      icon: <Lock size={36} className="text-[#28c1fa]"/>,
      title: "Secure Platform",
      description:"Your privacy is our priority, powered by end-to-end security and safe data handling.",
    },
  ];

  return (
    <>
    <section className="bg-[url('/background.png')] bg-cover bg-center w-full min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 xl:px-28 py-20">
      
      {/* Text Content */}
      <motion.div initial={{x:-100, opacity:0}} whileInView={{x:0, opacity:1, transition:{duration:0.8, delay:0.2}}} viewport={{once:true}} className="flex flex-col gap-8 md:gap-12 md:w-1/2 animate-[fadeInLeft_1s_ease forwards]">
        <div>
          <h1 className="text-white text-2xl md:text-4xl xl:text-5xl font-bold uppercase mb-3 text-center md:text-left">DreamBot Your AI-Powered</h1>
          <h1 className="text-[#28c1fa] text-2xl md:text-4xl xl:text-5xl font-bold uppercase text-center md:text-left">Digital Partner</h1>
        </div>
        <p className="text-white text-base md:text-lg lg:text-xl md:w-4/5 text-center md:text-left">Experience the future of artificial intelligence with smart, intuitive tools designed to simplify your workflow, spark innovation, and empower your digital world. DreamBot helps you to unlock new possibilities.</p>

        {/* Buttons */}
        <div className="flex flex-row self-center md:self-start gap-6 max-w-sm">
          <button className="cursor-pointer bg-linear-to-r from-[#0679a2] to-[#7bd5f6] hover:shadow-[0_0_15px_rgba(40,193,250,0.8)] px-6 py-3 rounded-full text-white font-medium group">
            <div className="relative overflow-hidden">
              <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">GET STARTED</p>
              <p className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">GET STARTED</p>
            </div>
          </button>
          <button className="cursor-pointer bg-linear-to-r from-[#0679a2] to-[#7bd5f6] hover:shadow-[0_0_15px_rgba(40,193,250,0.8)] px-6 py-3 rounded-full text-white font-medium group">
            <div className="relative overflow-hidden">
              <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">LEARN MORE</p>
              <p className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">LEARN MORE</p>
            </div>
          </button>
        </div>
      </motion.div>

      {/* Image */}
      <motion.div initial={{x:100, opacity:0}} whileInView={{x:0, opacity:1, transition:{duration:0.8, delay:0.2}}} viewport={{once:true}} className="md:w-1/2 flex justify-center items-center mt-12 md:mt-0">
        <img src="/robot.png" alt="Robot" className="w-60 md:w-80 animate-[float_4s_ease-in-out_infinite]"/>
      </motion.div>

      {/* Tailwind Animations */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-30px); }
          100% { transform: translateY(0); }
        }
        @keyframes fadeInLeft {
          0% { opacity: 0; transform: translateX(-30px); }
          100% { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>

    {/* Features Section */}

    <section className="bg-[#000000] w-full pt-12 md:pt-12 pb-20 px-6 md:px-16 lg:px-24">
      <motion.div initial={{y:-70, opacity:0}} whileInView={{y:0, opacity:1, transition:{duration:0.8, delay:0.3}}} viewport={{once:true}} className="text-center mb-12 lg:mb-18 2xl:mb-20">
        <h2 className="text-2xl md:text-4xl xl:text-5xl font-bold text-[#28c1fa] uppercase">Features</h2>
        <p className="mt-4 text-gray-300 text-md md:text-xl max-w-2xl mx-auto">Discover the intelligent tools that make DreamBot your ultimate digital partner.</p>
      </motion.div>

      <motion.div initial={{y:100, opacity:0}} whileInView={{y:0, opacity:1, transition:{duration:0.8, delay:0.3}}} viewport={{once:true}} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-linear-to-b from-[#0a1a2a] to-[#05688c] rounded-2xl p-6 flex flex-col items-start gap-4 hover:shadow-lg hover:scale-105 transition-transform duration-300">
            <div>{feature.icon}</div>
            <h3 className="text-xl font-semibold text-white uppercase">{feature.title}</h3>
            <p className="text-gray-300 text-sm md:text-base">{feature.description}</p>
          </div>
        ))}
      </motion.div>
    </section>

    {/* About SEction */}

    <section className="bg-linear-to-b from-[#050b12] to-[#05688c] w-full py-10 md:py-20 flex flex-col md:flex-row items-center justify-center px-6 md:px-16 lg:px-24 gap-12">
      
      <motion.div initial={{x:-100, opacity:0}} whileInView={{x:0, opacity:1, transition:{duration:0.8, delay:0.3}}} viewport={{once:true}} className="flex-1 flex justify-center md:justify-start">
        <img src="/ai robot.png" alt="About DreamBot" className="w-60 md:w-80 xl:w-100 max-w-lg object-cover"/>
      </motion.div>

      {/* Text & Highlights */}
      <motion.div initial={{x:70, opacity:0}} whileInView={{x:0, opacity:1, transition:{duration:0.9, delay:0.2}}} viewport={{once:true}} className="flex-1 flex flex-col justify-center text-center md:text-left gap-6">
        <h2 className="text-2xl md:text-4xl xl:text-5xl font-bold text-white uppercase">Meet <span className="text-[#28c1fa]">DreamBot</span></h2>
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed">Your AI-powered digital partner designed to simplify work, automate tasks, and unlock creativity.</p>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="flex flex-col items-center gap-2 p-4 bg-[#011b2a] rounded-xl shadow hover:scale-105 transition-transform duration-300">
            <Cpu size={32} className="text-[#28c1fa]"/>
            <h4 className="text-white font-semibold text-center">Smart Automation</h4>
            <p className="text-gray-300 text-sm text-center">Streamline your tasks effortlessly</p>
          </div>

          <div className="flex flex-col items-center gap-2 p-4 bg-[#011b2a] rounded-xl shadow hover:scale-105 transition-transform duration-300">
            <CloudLightning size={32} className="text-[#28c1fa]"/>
            <h4 className="text-white font-semibold text-center">Fast Insights</h4>
            <p className="text-gray-300 text-sm text-center">Turn data into decisions instantly</p>
          </div>

          <div className="flex flex-col items-center gap-2 p-4 bg-[#011b2a] rounded-xl shadow hover:scale-105 transition-transform duration-300">
            <Shield size={32} className="text-[#28c1fa]"/>
            <h4 className="text-white font-semibold text-center">Secure & Reliable</h4>
            <p className="text-gray-300 text-sm text-center">Your data stays safe and private</p>
          </div>
        </div>

        <button className="cursor-pointer bg-[#28c1fa] hover:shadow-[0_0_15px_rgba(40,193,250,0.8)] px-6 py-3 rounded-full text-white font-medium group">
          <div className="relative overflow-hidden">
            <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">LEARN MORE</p>
            <p className="absolute top-7 left-0 right-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">LEARN MORE</p>
          </div>
        </button>

      </motion.div>

    </section>

    {/* Testimonial Section */}

    <section className="bg-black w-full py-20 md:py-24 px-6 md:px-16 lg:px-24">
  
      <motion.div initial={{y:-70, opacity:0}} whileInView={{y:0, opacity:1, transition:{duration:0.8, delay:0.3}}} viewport={{once:true}} className="text-center mb-12">
        <h2 className="text-2xl md:text-4xl xl:text-5xl font-bold text-white uppercase">What Our <span className="text-[#28c1fa]">User</span> Say</h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">Real feedback from our community of users and innovators.</p>
      </motion.div>

      {/* Testimonials Grid */}
      <motion.div initial={{y:70, opacity:0}} whileInView={{y:0, opacity:1, transition:{duration:0.8, delay:0.3}}} viewport={{once:true}} className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Testimonial 1 */}
        <div className="bg-linear-to-b from-[#0a1a2a] to-[#05688c] rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition-transform duration-300 hover:scale-105">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQBDox39ubeWBKcvnjRzPyPY2-z9AUIlNv_w&s" alt="Alice Johnson" className="w-20 h-20 rounded-full mb-4 border-2 border-[#28c1fa] object-cover aspect-square"/>
          <div className="flex gap-1 text-yellow-400 mb-3">
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
          </div>
          <p className="text-gray-300 text-sm md:text-base mb-4">DreamBot has transformed the way we work. The AI tools save us hours every week and let us focus on what matters most.</p>
          <h4 className="text-white font-semibold">Alice Johnson</h4>
          <p className="text-gray-400 text-sm">Startup Founder</p>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-linear-to-b from-[#0a1a2a] to-[#05688c] rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition-transform duration-300 hover:scale-105">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/038/962/461/small/ai-generated-caucasian-successful-confident-young-businesswoman-ceo-boss-bank-employee-worker-manager-with-arms-crossed-in-formal-wear-isolated-in-white-background-photo.jpg" alt="Sarah Lee" className="w-20 h-20 rounded-full mb-4 border-2 border-[#28c1fa] object-cover aspect-square"/>
          <div className="flex gap-1 text-yellow-400 mb-3">
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
          </div>
          <p className="text-gray-300 text-sm md:text-base mb-4">The analytics and automation features are game-changers. Our campaigns are smarter, faster, and more effective.</p>
          <h4 className="text-white font-semibold">Sarah Lee</h4>
          <p className="text-gray-400 text-sm">Digital Marketer</p>
        </div>

        {/* Testimonial 3 */}
        <div className="bg-linear-to-b from-[#0a1a2a] to-[#05688c] rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition-transform duration-300 hover:scale-105">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg" alt="Mark Stevens" className="w-20 h-20 rounded-full mb-4 border-2 border-[#28c1fa] object-cover aspect-square"/>
          <div className="flex gap-1 text-yellow-400 mb-3">
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
          </div>
          <p className="text-gray-300 text-sm md:text-base mb-4">DreamBot’s AI automation features let me focus on insights instead of repetitive tasks, saving hours every week.</p>
          <h4 className="text-white font-semibold">Mark Stevens</h4>
          <p className="text-gray-400 text-sm">Data Scientist</p>
        </div>

      </motion.div>
    </section>
     

    {/* CTA Section */}

    <section className="bg-black w-full py-10 md:py-15 xl:py-22 px-6 md:px-16 lg:px-24 flex flex-col items-center text-center mx-auto">
      <h2 className="text-2xl md:text-4xl xl:text-5xl font-bold text-white mb-6 uppercase">Ready to Transform Your <span className="text-[#28c1fa]">Workflow?</span></h2>
      <p className="text-white text-md md:text-xl mb-8 max-w-2xl">Join thousands of innovators using DreamBot to automate tasks, generate creative content, and make smarter decisions every day.</p>
      <button className="cursor-pointer bg-linear-to-r from-[#0679a2] to-[#7bd5f6] hover:shadow-[0_0_15px_rgba(40,193,250,0.8)] px-6 py-3 rounded-full text-white font-medium group">
        <div className="relative overflow-hidden">
          <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">JOIN NOW</p>
          <p className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">JOIN NOW</p>
        </div>
      </button>
    </section>
    </>
  );
};

export default page;
