'use client'
import { motion } from 'framer-motion'

export default function Announcement() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1 }}
      className="w-full bg-black py-24 border-t border-zinc-800"
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Headline for Book */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-4xl md:text-5xl font-extrabold mb-6 tracking-tight"
        >
          The Boy Who Never Died
        </motion.h2>

        {/* Book Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="mb-16 text-left bg-zinc-900 rounded-xl shadow-2xl p-8 border border-zinc-800 max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Book Cover */}
            <img
              src="/karmablood-cover.png"
              alt="Karmablood Volume I Cover"
              className="rounded-lg w-full object-cover shadow-lg"
            />

            {/* Description and Buy Buttons */}
            <div>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                <em>Karmablood</em> is a karmic saga — a cinematic myth born from silence,
                grief, and the terrifying balance of justice.
                <br /><br />
                When the skies bled and the world forgot him, one boy chose to remember.
                His family destroyed. His identity erased. Yet, he survived.
              </p>

              {/* Purchase Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.amazon.in/dp/YOUR_KINDLE_LINK"
                  target="_blank"
                  className="bg-yellow-500 text-black font-semibold py-2 px-6 rounded-lg shadow hover:scale-105 transition-transform"
                >
                  Kindle
                </a>
                <a
                  href="https://www.amazon.in/dp/YOUR_PAPERBACK_LINK"
                  target="_blank"
                  className="bg-white text-black font-semibold py-2 px-6 rounded-lg shadow hover:scale-105 transition-transform"
                >
                  Paperback
                </a>
                <a
                  href="https://www.amazon.in/dp/YOUR_HARDCOVER_LINK"
                  target="_blank"
                  className="bg-zinc-100 text-black font-semibold py-2 px-6 rounded-lg shadow hover:scale-105 transition-transform"
                >
                  Hardcover
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Now Available Worldwide - Teaser Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-white text-4xl md:text-5xl font-extrabold mb-6 tracking-tight"
        >
          The Saga Begins
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-gray-400 max-w-2xl mx-auto text-lg mb-10"
        >
          Watch the <em>Karmablood: Volume I</em> teaser — a myth soaked in silence, vengeance, and karmic fire.
        </motion.p>

        {/* Video Block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
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
            <source src="/1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>
    </motion.section>
  )
}
