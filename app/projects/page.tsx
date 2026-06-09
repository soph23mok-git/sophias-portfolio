'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Imperial FemTech Society',
      category: 'leadership',
      description: 'Scaled Imperial FemTech Society from founding team to 600+ members, creating a community united with the mission to advance women\'s health through research and innovation.',
      highlights: [
        'Grew community from 0 to 600+ members',
        'Organized industry seminars and workshops',
        'Established partnerships with biotech companies',
        'Fostered research collaborations',
      ],
      tags: ['Leadership', 'Community Building', 'Women\'s Health', 'Events'],
      links: [
        { label: 'Learn More', url: '#' },
      ],
      icon: '👥',
    },
    {
      id: 2,
      title: 'PHlora LABS',
      category: 'venture',
      description: 'Co-founded an early-stage biotech venture developing innovative synbiotic suppository solutions to address recurrent microbiome infections in women.',
      highlights: [
        'Developed novel synbiotic formulation',
        'Secured initial funding',
        'Conducted market research and validation',
        'Built founding team',
      ],
      tags: ['Biotech', 'Entrepreneurship', 'Women\'s Health', 'Innovation'],
      links: [
        { label: 'Venture Details', url: '#' },
      ],
      icon: '🧬',
    },
    {
      id: 3,
      title: 'Neurotechnology Research',
      category: 'research',
      description: 'Conducting advanced research on neurotechnology applications in healthcare, with focus on AI-driven solutions for neurological diagnostics.',
      highlights: [
        'Neurotechnology systems analysis',
        'AI integration in neurology',
        'Clinical application research',
        'Innovation gap analysis',
      ],
      tags: ['Neurotechnology', 'AI', 'Healthcare', 'Research'],
      links: [
        { label: 'View Research', url: '/papers' },
      ],
      icon: '🧠',
    },
    {
      id: 4,
      title: 'AI in Healthcare Innovation',
      category: 'research',
      description: 'Exploring how artificial intelligence can be leveraged to solve critical challenges in healthcare delivery and patient outcomes.',
      highlights: [
        'Healthcare AI applications',
        'Ethical considerations in medical AI',
        'Implementation frameworks',
        'Case study analysis',
      ],
      tags: ['AI', 'Healthcare', 'Innovation', 'Research'],
      links: [
        { label: 'View Papers', url: '/papers' },
      ],
      icon: '🤖',
    },
  ]

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'venture', label: 'Ventures' },
    { id: 'research', label: 'Research' },
  ]

  const filtered = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4">
            Projects & Initiatives
          </h1>
          <p className="text-xl text-slate-400">
            My work spanning leadership, ventures, and research
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/50'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-8"
        >
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500 card-hover"
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-5xl">{project.icon}</div>
                  <span className="px-3 py-1 text-xs bg-blue-500/20 text-blue-300 rounded-full">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-400 mb-3">Highlights:</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start text-sm text-slate-300">
                        <span className="mr-3 text-blue-400">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.links.map((link, idx) => (
                    <Link
                      key={idx}
                      href={link.url}
                      className="inline-flex items-center px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 rounded-lg text-sm font-semibold transition-all"
                    >
                      {link.label}
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-xl text-slate-400">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </main>
  )
}
