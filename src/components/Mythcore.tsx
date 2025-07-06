'use client'
import { motion } from 'framer-motion'

export default function Mythcore() {
  return (
    <motion.section
      id="mythcore"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="pt-24 pb-12 px-6 bg-zinc-900 border-t border-zinc-800"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-8 text-white">Mythcore Studios</h2>
        <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
          We are not just storytellers — we are myth-makers.
          At <span className="text-white font-semibold">Mythcore Studios</span>, we build emotional universes that echo across generations.
          Our vision is to create stories that feel like cinema, sound like silence, and live forever in the minds of those who dare to feel deeply.
        </p>
      </div>

      <div className="max-w-4xl mx-auto mt-16 bg-zinc-800 rounded-xl shadow-lg p-8 text-left">
        <h3 className="text-3xl font-semibold text-white mb-4">The Karmablood Saga</h3>
        <p className="text-gray-300 leading-relaxed mb-6">
          At the heart of Mythcore lies our flagship myth — <span className="text-white font-medium">Karmablood</span>.
          A saga crafted to become a future anime cinema legend. From silent vengeance to cosmic justice,
          this universe is being shaped volume by volume, clone by clone, sin by sin.
        </p>

        <p className="text-gray-300 leading-relaxed mb-6">
          <strong>Volume I:</strong> <em>The Boy Who Never Died</em> introduced Ashen — a soul reborn in silence.  
          <br />
          <strong>Volume II:</strong> will dive into karmic realms, blood prophecy, and mythic war.  
          <br />
          <strong>Volume III onward:</strong> the saga expands beyond Earth, into divine karmic dimensions.
        </p>

        <p className="text-gray-400">
          Every word we write is visualized as a scene. Every scene is prepared like cinema. We are building not just books,
          but the blueprints of emotional epics that deserve to be animated by the world’s finest creators.
        </p>
      </div>

      {/* Concept Art Section */}
      <div className="max-w-6xl mx-auto mt-20">
        <h3 className="text-3xl font-semibold text-white text-center mb-6">Volume II — Concept Art</h3>
        <p className="text-gray-400 text-center mb-10">A glimpse into the mythic world of Volume II — where karmic war begins.</p>
        <div className="grid md:grid-cols-2 gap-8 px-4">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="rounded-xl overflow-hidden shadow-xl border border-zinc-800"
          >
            <img
              src="/volume2-art1.png"
              alt="Volume II Concept Art 1"
              className="w-full h-auto object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="rounded-xl overflow-hidden shadow-xl border border-zinc-800"
          >
            <img
              src="/volume2-art2.png"
              alt="Volume II Concept Art 2"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>

      <div className="text-center mt-16">
        <p className="text-sm text-gray-500 italic">Mythcore Studios — Forging Myths That Outlive Their Makers.</p>
      </div>
    </motion.section>
  )
}
