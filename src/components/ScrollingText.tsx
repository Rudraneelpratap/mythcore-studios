'use client'
import { motion } from 'framer-motion'

export default function ScrollingText() {
  return (
    <div className="w-full overflow-hidden bg-zinc-950 border-y border-zinc-800 py-3 select-none">
      <motion.div
        animate={{ x: ['100%', '-100%'] }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: 'linear',
        }}
        className="whitespace-nowrap flex gap-32 text-sm md:text-base font-semibold tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-white to-yellow-300 animate-glow"
      >
        <span>
          Karmablood — The Saga Continues • Mythcore Studios Awakens Justice, Silence & Myth •
        </span>
        <span>
          Karmablood — The Saga Continues • Mythcore Studios Awakens Justice, Silence & Myth •
        </span>
        <span>
          Karmablood — The Saga Continues • Mythcore Studios Awakens Justice, Silence & Myth •
        </span>
      </motion.div>
    </div>
  )
}
