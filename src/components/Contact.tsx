'use client'
import { motion } from 'framer-motion'
import { FaInstagram, FaTwitter, FaYoutube, FaEnvelope } from 'react-icons/fa'

export default function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-20 px-6 bg-black border-t border-zinc-800 text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Let’s Connect</h2>
      <p className="text-gray-400 mb-8 text-lg max-w-xl mx-auto">
        For creative collaborations, story licensing, press inquiries, or just to say hi — we’re listening.
      </p>

      {/* Email */}
      <div className="flex justify-center items-center mb-6">
        <FaEnvelope className="text-gray-400 mr-2 text-lg" />
        <a
          href="mailto:mythcorestudios@gmail.com"
          className="text-white font-medium hover:underline"
        >
          mythcorestudios@gmail.com
        </a>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-6 text-gray-400 text-2xl">
        <a
          href="https://instagram.com/mythcorestudios"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FaInstagram />
        </a>
        <a
          href="https://twitter.com/mythcorestudios"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FaTwitter />
        </a>
        <a
          href="https://youtube.com/@mythcorestudios"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FaYoutube />
        </a>
      </div>

      {/* Tagline */}
      <div className="mt-10">
        <p className="text-sm text-zinc-500 italic">
          Crafting myths worth remembering — Mythcore Studios
        </p>
      </div>
    </motion.section>
  )
}
