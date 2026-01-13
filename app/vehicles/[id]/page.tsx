"use client"

import type React from "react"

import { useState, use } from "react"
import { useRouter } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import FloatingActions from "@/components/floating-actions"
import Captcha from "@/components/captcha"
import { ArrowLeft, Phone, Mail, ChevronLeft, ChevronRight } from "lucide-react"

export default function VehicleDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const router = useRouter()
  const [showInquiryForm, setShowInquiryForm] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [captchaValid, setCaptchaValid] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })

  // Demo vehicle data - in production, fetch from API based on id
  const vehicle = {
    id: id,
    name: "Toyota Camry",
    year: 2024,
    price: 28500,
    mileage: 0,
    color: "Midnight Black Metallic",
    bodyType: "Sedan",
    fuelType: "Gasoline",
    transmission: "Automatic",
    drivetrain: "FWD",
    engine: "2.5L 4-Cylinder",
    vin: "4T1B11HK9KU123456",
    stockNumber: "TC2024001",
    images: [
      "/toyota-camry-exterior.jpg",
      "/toyota-camry-interior.jpg",
      "/toyota-camry-dashboard.png",
      "/toyota-camry-rear.png",
      "/toyota-camry-wheel.jpg",
    ],
    features: [
      "Apple CarPlay & Android Auto",
      "Adaptive Cruise Control",
      "Lane Departure Warning",
      "Blind Spot Monitoring",
      "Rear Cross-Traffic Alert",
      "Dual-Zone Climate Control",
      "Power Moonroof",
      "Leather Seats",
      "Heated Front Seats",
      "Backup Camera",
      "LED Headlights",
      "Keyless Entry & Start",
    ],
    description:
      "This stunning 2024 Toyota Camry is in excellent condition with all the modern features you need. Perfect for daily commuting or long road trips. This vehicle has been thoroughly inspected and comes with a warranty for your peace of mind.",
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!captchaValid) {
      alert("Please complete the captcha")
      return
    }
    // Handle form submission
    console.log("Inquiry submitted:", formData)
    alert("Thank you for your inquiry! We'll contact you soon.")
    setShowInquiryForm(false)
    setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" })
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % vehicle.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + vehicle.images.length) % vehicle.images.length)
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <FloatingActions />

      <section className="py-8 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-700 hover:text-[#EC3827] mb-6 font-semibold cursor-pointer transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Vehicles
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Images and Details */}
            <div className="lg:col-span-2 space-y-6">
              {/* Image Gallery */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative h-96 md:h-[500px] bg-gray-200 group">
                  <img
                    src={vehicle.images[currentImageIndex] || "/placeholder.svg"}
                    alt={`${vehicle.name} ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {/* Navigation Arrows */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all cursor-pointer"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all cursor-pointer"
                  >
                    <ChevronRight size={24} />
                  </button>
                  {/* Image Counter */}
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                    {currentImageIndex + 1} / {vehicle.images.length}
                  </div>
                </div>
                {/* Thumbnail Gallery */}
                <div className="grid grid-cols-5 gap-2 p-4">
                  {vehicle.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative h-20 rounded-lg overflow-hidden cursor-pointer ${
                        currentImageIndex === index ? "ring-4 ring-[#EC3827]" : "ring-2 ring-gray-300"
                      }`}
                    >
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Vehicle Description */}
              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                <h2 className="text-2xl font-bold text-black mb-4">Description</h2>
                <p className="text-gray-700 leading-relaxed">{vehicle.description}</p>
              </div>

              {/* Features */}
              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                <h2 className="text-2xl font-bold text-black mb-4">Features & Options</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {vehicle.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#EC3827] rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Vehicle Info & Inquiry */}
            <div className="lg:col-span-1 space-y-6">
              {/* Vehicle Info Card */}
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-4">
                <h1 className="text-3xl font-bold text-black mb-2">{vehicle.name}</h1>
                <p className="text-5xl font-bold text-[#EC3827] mb-6">${vehicle.price.toLocaleString()}</p>

                <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-semibold">Year:</span>
                    <span className="text-black font-bold">{vehicle.year}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-semibold">Mileage:</span>
                    <span className="text-black font-bold">{vehicle.mileage.toLocaleString()} mi</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-semibold">Body Type:</span>
                    <span className="text-black font-bold">{vehicle.bodyType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-semibold">Color:</span>
                    <span className="text-black font-bold">{vehicle.color}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-semibold">Transmission:</span>
                    <span className="text-black font-bold">{vehicle.transmission}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-semibold">Fuel Type:</span>
                    <span className="text-black font-bold">{vehicle.fuelType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-semibold">Drivetrain:</span>
                    <span className="text-black font-bold">{vehicle.drivetrain}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-semibold">Engine:</span>
                    <span className="text-black font-bold">{vehicle.engine}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-semibold">Stock #:</span>
                    <span className="text-black font-bold">{vehicle.stockNumber}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-semibold">VIN:</span>
                    <span className="text-black font-bold text-sm">{vehicle.vin}</span>
                  </div>
                </div>

                <button
                  onClick={() => setShowInquiryForm(!showInquiryForm)}
                  className="w-full bg-[#EC3827] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#d42f1f] transition-colors cursor-pointer mb-3"
                >
                  {showInquiryForm ? "Hide Inquiry Form" : "Inquire About This Vehicle"}
                </button>

                <div className="space-y-2">
                  <a
                    href="tel:2142156273"
                    className="flex items-center justify-center gap-2 w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors cursor-pointer"
                  >
                    <Phone size={18} />
                    (214) 215-6273
                  </a>
                  <a
                    href="mailto:cjunctionllc@gmail.com"
                    className="flex items-center justify-center gap-2 w-full border-2 border-black text-black py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <Mail size={18} />
                    Email Us
                  </a>
                </div>
              </div>

              {/* Inquiry Form */}
              {showInquiryForm && (
                <div className="bg-white rounded-xl shadow-lg p-6 animate-slideDown">
                  <h3 className="text-2xl font-bold text-black mb-4">Request Information</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm font-semibold text-black mb-1">
                          First Name <span className="text-[#EC3827]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EC3827]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-black mb-1">
                          Last Name <span className="text-[#EC3827]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EC3827]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-black mb-1">
                        Email <span className="text-[#EC3827]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EC3827]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-black mb-1">
                        Phone <span className="text-[#EC3827]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EC3827]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-black mb-1">Message</label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder={`I'm interested in the ${vehicle.year} ${vehicle.name}...`}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EC3827] resize-none"
                      />
                    </div>

                    <Captcha onValidate={setCaptchaValid} />

                    <button
                      type="submit"
                      className="w-full bg-[#EC3827] text-white py-3 rounded-lg font-bold hover:bg-[#d42f1f] transition-colors cursor-pointer"
                    >
                      Submit Inquiry
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
