'use client'
import { motion } from 'framer-motion'

export default function MythcoreJr() {
  // Image indexes to render (skip p10.png)
  const bookImages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16]

  return (
    <motion.section
      id="jr"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative pt-24 pb-12 px-6 bg-gradient-to-b from-zinc-900 to-zinc-950 border-t border-zinc-800 overflow-hidden"
    >
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 opacity-5 pointer-events-none z-0">
        <img
          src="/myth.png"
          alt="Background Myth"
          className="w-full h-full object-cover"
        />
      </div>

      {/* ALL CONTENT ABOVE BACKGROUND */}
      <div className="relative z-10">
        {/* INTRO */}
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8 text-white">Mythcore.Jr</h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto mb-12">
            Every child is born with a door — some just need the key.
            <span className="text-white font-medium"> Mythcore.Jr</span> opens the universe to young dreamers, guiding them
            through magical realms, heart-touched journeys, and stories they'll carry for life.
          </p>
        </div>

        {/* STAR DOORS STORY SECTION WITH LOCAL BACKDROP */}
        <div className="relative max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xl border border-zinc-800 mb-20">
          <div className="absolute inset-0 opacity-10 z-0 pointer-events-none">
            <img
              src="/myth.png"
              alt="Mythcore Background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 backdrop-blur-md bg-zinc-800/80 p-8 md:p-10 rounded-xl">
            <h3 className="text-3xl font-semibold text-white mb-4">Zoya & Ryen and the Star Doors</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Zoya and Ryen were just two curious kids — until a glowing door with a candy cane handle appeared in their bedroom wall.
              One step through, and they were swept into a galaxy of starlit worlds, talking moons, and candy-colored secrets.
              What started as a simple adventure turned into a journey of courage, laughter, and light.
            </p>
            <p className="text-gray-400">
              <strong>Mythcore.Jr</strong> books are written like timeless cartoon episodes — each one a standalone journey filled with adventure, humor, and light moral themes. Perfect for ages 6–12, each volume features:
              <br /><br />
              • 90–100 pages of storytelling<br />
              • 20–30 full-color illustrations<br />
              • Friendly characters & safe themes<br />
              • No reading order required — every book is its own magical episode
            </p>
          </div>
        </div>

        {/* UPCOMING BOOKS GRID */}
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-semibold text-white text-center mb-4">Zoya & Ryen’s Adventures</h3>
          <p className="text-gray-400 text-center mb-10">
            A joyful collection of standalone storybooks — launching soon worldwide.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {bookImages.map((imgNum, index) => (
              <motion.div
                key={imgNum}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.03 }}
                whileHover={{ scale: 1.05 }}
                className="relative rounded-xl overflow-hidden shadow-md border border-zinc-700 group"
              >
                <img
                  src={`/p${imgNum}.png`}
                  alt={`Zoya & Ryen Book ${index + 1}`}
                  className="w-full h-auto object-cover"
                />

                {/* Hover Caption */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">Launching Soon</span>
                </div>

                {/* Title Label */}
                <div className="bg-zinc-900 text-white text-center py-2 text-sm font-medium border-t border-zinc-700">
                  Book {index + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FOOTER LINE */}
        <div className="text-center mt-16">
          <p className="text-sm text-gray-500 italic">Mythcore.Jr — Where magic finds its voice.</p>
        </div>
      </div>
    </motion.section>
  )
}
