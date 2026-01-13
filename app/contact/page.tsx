"use client"

import type React from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import FloatingActions from "@/components/floating-actions"
import Captcha from "@/components/captcha"
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [isCaptchaValid, setIsCaptchaValid] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!isCaptchaValid) {
      alert("Please complete the security check correctly.")
      return
    }
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <FloatingActions />

      {/* Page Header */}
      <section className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Contact Us</h1>
          <p className="text-gray-300 text-lg">Get in touch with Car Junction LLC</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-24 px-4 md:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
            {/* Left Column - Office Info */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-10">Visit Our Office</h2>

              <div className="space-y-8">
                {/* Office Location */}
                <div className="flex gap-5">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "#EC3827" }}
                  >
                    <MapPin size={26} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black text-lg mb-2">Office Location</h3>
                    <p className="text-gray-700 leading-relaxed">
                      2435 Glenda Lane Ste 4<br />
                      Dallas, Texas 75229
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-5">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "#EC3827" }}
                  >
                    <Phone size={26} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black text-lg mb-2">Phone Number</h3>
                    <a href="tel:2142156273" className="text-gray-700 hover:text-[#EC3827] transition-colors text-lg">
                      (214) 215-6273
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-5">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "#EC3827" }}
                  >
                    <Mail size={26} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black text-lg mb-2">Email Address</h3>
                    <a
                      href="mailto:cjunctionllc@gmail.com"
                      className="text-gray-700 hover:text-[#EC3827] transition-colors break-all"
                    >
                      cjunctionllc@gmail.com
                    </a>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex gap-5">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "#EC3827" }}
                  >
                    <Clock size={26} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black text-lg mb-2">Business Hours</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Monday - Saturday
                      <br />
                      9:00 AM - 6:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-12">
                <h3 className="font-bold text-black text-lg mb-6">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white hover:opacity-90 transition-all"
                    style={{ backgroundColor: "#EC3827" }}
                    aria-label="Facebook"
                  >
                    <Facebook size={22} />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white hover:opacity-90 transition-all"
                    style={{ backgroundColor: "#EC3827" }}
                    aria-label="Twitter"
                  >
                    <Twitter size={22} />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white hover:opacity-90 transition-all"
                    style={{ backgroundColor: "#EC3827" }}
                    aria-label="Instagram"
                  >
                    <Instagram size={22} />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white hover:opacity-90 transition-all"
                    style={{ backgroundColor: "#EC3827" }}
                    aria-label="YouTube"
                  >
                    <Youtube size={22} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-10">Get in Touch</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-base font-semibold text-black mb-2">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#EC3827]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-base font-semibold text-black mb-2">Your Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#EC3827]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-base font-semibold text-black mb-2">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(214) 215-6273"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#EC3827]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-base font-semibold text-black mb-2">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#EC3827]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-base font-semibold text-black mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your message here..."
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#EC3827] resize-none"
                    required
                  ></textarea>
                </div>

                {/* Captcha */}
                <Captcha onVerify={setIsCaptchaValid} />

                <button
                  type="submit"
                  disabled={!isCaptchaValid}
                  className="w-full text-white px-6 py-4 rounded-lg font-bold hover:opacity-90 transition-colors text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ backgroundColor: "#EC3827" }}
                >
                  SEND MESSAGE →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
