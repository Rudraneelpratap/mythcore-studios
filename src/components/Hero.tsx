'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  const fullText = 'Stories That Never Die'
  const [displayedText, setDisplayedText] = useState('')
  const [index, setIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout
    const speed = isDeleting ? 50 : 90

    if (!isDeleting && index < fullText.length) {
      timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, index + 1))
        setIndex(index + 1)
      }, speed)
    } else if (!isDeleting && index === fullText.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true)
      }, 2000)
    } else if (isDeleting && index > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, index - 1))
        setIndex(index - 1)
      }, speed)
    } else if (isDeleting && index === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false)
      }, 500)
    }

    return () => clearTimeout(timeout)
  }, [index, isDeleting])

  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0, y: -60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: 'easeInOut' }}
      className="relative w-full min-h-[85vh] overflow-hidden flex items-center justify-center pt-12"
    >
      {/* Background Image */}
      <Image
        src="/fantasy.png"
        alt="Hero background"
        layout="fill"
        objectFit="cover"
        className="brightness-[1.5] contrast-[1.3] saturate-[1.15] z-0"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/25 z-10" />

      {/* Text Content */}
      <div className="relative z-20 text-center px-6 mt-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-5 tracking-tight leading-tight text-white drop-shadow-lg">
          {displayedText}
          <span className="animate-pulse inline-block w-1 bg-white ml-1">|</span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="text-base md:text-lg max-w-2xl mx-auto text-gray-200 drop-shadow"
        >
          Where karmic myths meet cinema. Ashen&rsquo;s saga begins here — and it won&rsquo;t be forgotten.
        </motion.p>
      </div>
    </motion.section>
  )
}
