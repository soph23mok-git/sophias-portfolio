'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import HeroSection from './components/HeroSection'
import FeaturedProjects from './components/FeaturedProjects'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <HeroSection />
      
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-white mb-6"
          >
            Explore My Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-slate-300 mb-8"
          >
            Discover my projects, research papers, and reports spanning bioengineering, neurotechnology, and women's health innovation.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/projects" className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors">
              View Projects
            </Link>
            <Link href="/papers" className="px-8 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-semibold transition-colors">
              Read Papers
            </Link>
            <Link href="/reports" className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-semibold transition-colors">
              Reports
            </Link>
          </motion.div>
        </div>
      </section>

      <FeaturedProjects />
    </div>
  )
}
