'use client'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="scroll-mt-28 pt-24 pb-16 px-6 bg-zinc-950 border-t border-zinc-800"
    >
      {/* Section Header */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-5xl font-bold text-white">About Mythcore</h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
          Building a myth, not a brand. Turning silence into saga. That’s the soul of Mythcore.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
        {/* 🟣 Vision */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold text-white mb-4">Our Vision</h3>
          <p className="text-gray-400 text-lg leading-relaxed mb-4">
            At <span className="text-white font-medium">Mythcore Studios</span>, we craft worlds that outlive us.
            Not content. Not trends. But sagas — etched in grief, wonder, and karmic flame.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed mb-4">
            Our flagship, <span className="text-white font-medium">Karmablood</span>, isn’t just a book — it’s a mirror
            where pain becomes prophecy. Where forgotten voices find mythic justice.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            We blend the cinematic and the sacred, building universes that ignite both imagination and soul.
          </p>
        </motion.div>

        {/* 🟢 Author Bio with Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row items-start gap-6">
            {/* Image */}
            <img
              src="/my.jpg"
              alt="Author Rudraneel Pratap"
              className="w-32 h-32 rounded-full object-cover border-2 border-zinc-700 shadow-md"
            />
            {/* Bio */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">About the Author</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-3">
                <span className="text-white font-medium">Rudraneel Pratap</span> is not just an author — he is a mythmaker.
                The creator of <em>Karmablood</em>, he believes stories must not only entertain, but awaken the soul.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-3">
                Raised in silence, guided by philosophy and anime, he writes stories that echo beyond language —
                each line crafted as a weapon of clarity and karmic fire.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                <em>Karmablood: The Boy Who Never Died</em> is just the first heartbeat. With Mythcore, Rudraneel forges
                a universe where silence speaks, and justice remembers.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
