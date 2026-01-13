"use client"

import { useState, useEffect } from "react"
import { MessageCircle, ChevronUp } from "lucide-react"

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href="https://wa.me/12142156273"
        target="_blank"
        rel="noopener noreferrer"
        className={`bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 ${
          showScrollTop ? "translate-y-0" : ""
        }`}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="bg-[#EC3827] hover:bg-[#d42f1f] text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 animate-fadeIn"
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  )
}
