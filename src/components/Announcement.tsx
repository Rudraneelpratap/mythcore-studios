'use client'
import { motion } from 'framer-motion'

export default function Announcement() {
  return (
    <motion.section
      id="books" // 🔑 Adds correct target for navbar
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1 }}
      className="scroll-mt-28 w-full bg-black py-24 border-t border-zinc-800" // 🪄 Ensures scroll stops below navbar
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-4xl md:text-5xl font-extrabold mb-6 tracking-tight"
        >
          Now Available Worldwide
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-gray-400 max-w-2xl mx-auto text-lg mb-10"
        >
          Read <em>Karmablood: Volume I</em> in Kindle, Paperback, and Hardcover across India, UK, US, and beyond.
        </motion.p>

        {/* Video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="w-full max-w-4xl mx-auto overflow-hidden rounded-xl border border-zinc-700 shadow-xl"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            controls
            preload="auto"
            poster="/karmablood-cover.png"
            className="w-full h-[360px] md:h-[460px] object-cover rounded-xl"
          >
            <source src="/2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>
    </motion.section>
  )
}
