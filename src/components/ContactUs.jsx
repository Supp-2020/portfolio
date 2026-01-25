"use client";
import Image from "next/image";
import { useState } from "react";
import contactUsIcon from "../../public/assets/full-inbox-animate.svg";

export default function ContactUs() {
  const [formData, setFormData] = useState({});
  function handleSubmit() {
    return null;
  }
  function handleInputChange() {
    return null;
  }
  return (
    <section className="mx-auto max-w-5xl py-16">
      {/* Header */}
      <div className="mb-8 flex items-center">
        <h2 className="bg-[#B9FF66] text-3xl font-bold px-3 py-1 rounded">
          Say Hello
        </h2>
      </div>

      {/* Form Container */}
      <div className="relative bg-[#F3F3F3] rounded-2xl p-12 flex gap-12">
        <div className="flex-1">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                required
              />
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Message"
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent resize-none"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#191A23] hover:bg-[#191A23]/90 text-white font-bold py-3 rounded-lg transition cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right - Illustration */}
        <div className="flex-1 flex items-center justify-center">
          <Image
            priority
            src={contactUsIcon}
            alt="innovation-icon"
            width={350}
            height={350}
            className="shrink-0"
          />
        </div>
      </div>
    </section>
  );
}
