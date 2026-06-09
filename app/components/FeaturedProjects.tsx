'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function FeaturedProjects() {
  const featured = [
    {
      id: 1,
      title: 'Imperial FemTech Society',
      description: 'Chair of Imperial FemTech Society, scaling the community from founding team to 600+ members. Advancing women\'s health through research and innovation.',
      tags: ['Leadership', 'Community Building', 'Women\'s Health'],
      link: '/projects',
      icon: '👥',
    },
    {
      id: 2,
      title: 'PHlora LABS',
      description: 'Co-Founder of an early-stage venture developing a synbiotic suppository solution to help women break from the cycle of recurrent microbiome infections.',
      tags: ['Biotech', 'Women\'s Health', 'Innovation'],
      link: '/projects',
      icon: '🧬',
    },
    {
      id: 3,
      title: 'Neurotechnology Research',
      description: 'Exploring the intersection of neurotechnology and AI in healthcare, with focus on innovative solutions for neurological health.',
      tags: ['Neurotechnology', 'AI', 'Research'],
      link: '/papers',
      icon: '🧠',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Featured Highlights
          </h2>
          <p className="text-xl text-slate-400">
            A glimpse into my current initiatives and research focus
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-3 gap-8"
        >
          {featured.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-slate-700 hover:border-blue-500 card-hover transition-all"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={item.link}
                className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors"
              >
                Learn more
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
