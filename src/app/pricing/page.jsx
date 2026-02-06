"use client"

import React from "react";
import { motion } from "framer-motion";

const Page = () => {
  const plans = [
    {
      name: "Starter",
      price: "299 €",
      features: [
        "Access to basic AI tools",
        "Limited automation",
        "Email support",
        "Community access",
      ],
    },
    {
      name: "Basic",
      price: "499 €",
      features: [
        "All Starter features",
        "Full analytics dashboard",
        "Priority support",
        "Team collaboration",
      ],
    },
    {
      name: "Pro",
      price: "699 €",
      featured: true,
      features: [
        "All Basic features",
        "Advanced AI tools",
        "Custom workflows",
        "Dedicated account manager",
      ],
    },
    {
      name: "Business",
      price: "999 €",
      features: [
        "All Pro features",
        "Custom integrations",
        "Enterprise security",
        "24/7 support",
      ],
    },
    {
      name: "Enterprise",
      price: "1499 €",
      features: [
        "Full platform access",
        "Tailored AI solutions",
        "Dedicated support team",
        "Unlimited users",
      ],
    },
    {
      name: "Custom",
      price: "Contact Us",
      features: [
        "Tailored solutions",
        "Custom AI models",
        "Dedicated strategy",
        "Premium support",
      ],
    },
  ];

  return (
    <section className="bg-black w-full pb-20 pt-36 md:pt-40 px-4 md:px-16 lg:px-24">
      {/* Header */}
      <motion.div initial={{y:-60, opacity:0}} whileInView={{y:0, opacity:1, transition:{duration:0.8, delay:0.3}}} viewport={{once:true}} className="text-center mb-16 md:mb-20">
        <h2 className="text-2xl md:text-4xl xl:text-5xl font-bold text-white uppercase">Pricing <span className="text-[#28c1fa]">Plans</span></h2>
        <p className="mt-4 text-gray-400 max-w-3xl mx-auto">Choose a plan that fits your needs and start maximizing your AI potential today. Explore the features and find the perfect solution for individuals, teams, or enterprises.</p>
      </motion.div>

      {/* Pricing Cards Grid */}
      <motion.div initial={{y:70, opacity:0}} whileInView={{y:0, opacity:1, transition:{duration:0.8, delay:0.3}}} viewport={{once:true}} className="flex flex-wrap justify-center items-stretch gap-8">
        {plans.map((plan, index) => (
          <div key={index} className={`relative flex flex-col h-full min-h-100 max-w-[320px] w-full rounded-3xl p-8 bg-[#0b141b] border border-[#28c1fa] shadow-[0_0_40px_rgba(0,255,255,0.15)] hover:scale-103 transition duration-300`}>
            {/* Glow */}
            <div className="absolute inset-0 rounded-3xl border border-[#28c1fa] blur-md opacity-30 pointer-events-none" />

            {/* Card Content */}
            <div className="flex flex-col grow">
              <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-6">{plan.featured ? "Most Popular Plan" : "Perfect for getting started"}</p>

              <ul className="space-y-3 mb-6 grow">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-200"><span className="text-cyan-400">✔</span>{f}</li>
                ))}
              </ul>

              <div className="text-white text-3xl font-bold mb-6">
                {plan.price}
                {plan.price !== "Contact Us" && (
                  <span className="text-sm font-normal text-gray-400"> /mo</span>
                )}
              </div>
            </div>

            <button className="w-full py-3 rounded-full bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition cursor-pointer">{plan.price === "Contact Us" ? "Contact Sales" : "START"}</button>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Page;
