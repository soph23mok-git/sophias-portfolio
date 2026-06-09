'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function PapersPage() {
  const papers = [
    {
      id: 1,
      title: 'Neurotechnology in Modern Healthcare: Applications and Challenges',
      authors: 'Sophia Mok',
      date: '2024',
      description: 'An exploration of how neurotechnology is transforming healthcare delivery and diagnostics.',
      abstract: 'This paper examines the current applications of neurotechnology in clinical settings, including neuroimaging, brain-computer interfaces, and neuromodulation. We discuss the challenges in regulatory approval, patient accessibility, and ethical considerations.',
      keywords: ['Neurotechnology', 'Healthcare', 'Innovation', 'Clinical Applications'],
      tags: ['Research Paper', 'Neurotechnology', 'Healthcare'],
      downloadUrl: '#',
      icon: '🧠',
    },
    {
      id: 2,
      title: 'AI-Driven Diagnostics: Opportunities and Ethical Considerations in Women\'s Health',
      authors: 'Sophia Mok, Research Team',
      date: '2024',
      description: 'Investigating the role of artificial intelligence in improving diagnostic accuracy and accessibility for women\'s health conditions.',
      abstract: 'Artificial intelligence shows significant promise in improving diagnostic accuracy for women-specific health conditions. However, several ethical concerns remain regarding data bias, privacy, and equitable access. This paper reviews current AI applications in women\'s health and proposes frameworks for responsible implementation.',
      keywords: ['AI', 'Women\'s Health', 'Diagnostics', 'Ethics', 'Healthcare Technology'],
      tags: ['Research Paper', 'AI', 'Women\'s Health'],
      downloadUrl: '#',
      icon: '🤖',
    },
    {
      id: 3,
      title: 'Microbiome Engineering: Novel Approaches to Recurrent Infection Management',
      authors: 'Sophia Mok, PHlora LABS Team',
      date: '2024',
      description: 'A comprehensive review of synbiotic and microbiome-targeted interventions for managing recurrent infections.',
      abstract: 'Recurrent microbiome-related infections represent a significant healthcare challenge, particularly for women. This paper reviews existing treatment modalities and presents novel microbiome engineering approaches, including the development and efficacy of targeted synbiotic interventions.',
      keywords: ['Microbiome', 'Synbiotics', 'Women\'s Health', 'Biotech', 'Infections'],
      tags: ['Research Paper', 'Biotech', 'Women\'s Health'],
      downloadUrl: '#',
      icon: '🧬',
    },
    {
      id: 4,
      title: 'Building Communities for Biotech Innovation: The Imperial FemTech Society Model',
      authors: 'Sophia Mok',
      date: '2024',
      description: 'A case study on building and scaling communities dedicated to advancing women\'s health through biotech innovation.',
      abstract: 'Community-driven initiatives can significantly accelerate innovation in underrepresented areas like women\'s health biotech. This paper documents the Imperial FemTech Society\'s growth from founding to 600+ members, analyzing strategies for community engagement, industry partnerships, and research collaboration.',
      keywords: ['Community Building', 'Women\'s Health', 'Biotech', 'Innovation', 'Leadership'],
      tags: ['Case Study', 'Leadership', 'Innovation'],
      downloadUrl: '#',
      icon: '👥',
    },
  ]

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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4">
            Research Papers
          </h1>
          <p className="text-xl text-slate-400">
            Peer-reviewed research and publications
          </p>
        </motion.div>

        {/* Papers List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {papers.map((paper) => (
            <motion.div
              key={paper.id}
              variants={itemVariants}
              className="group bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl p-8 border border-slate-700 hover:border-purple-500 card-hover"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">{paper.icon}</div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      {paper.title}
                    </h3>
                    <span className="px-3 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full">
                      {paper.date}
                    </span>
                  </div>
                  <p className="text-sm text-slate-400 mb-4">
                    <span className="font-semibold">Authors:</span> {paper.authors}
                  </p>
                </div>
              </div>

              <p className="text-slate-300 mb-4 leading-relaxed">
                {paper.description}
              </p>

              <details className="mb-4">
                <summary className="cursor-pointer text-purple-400 hover:text-purple-300 font-semibold transition-colors">
                  View Abstract
                </summary>
                <p className="mt-3 text-slate-300 text-sm leading-relaxed bg-slate-900/50 p-4 rounded">
                  {paper.abstract}
                </p>
              </details>

              {/* Keywords */}
              <div className="mb-4">
                <p className="text-sm text-slate-400 mb-2 font-semibold">Keywords:</p>
                <div className="flex flex-wrap gap-2">
                  {paper.keywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="px-3 py-1 text-xs bg-slate-700 text-slate-300 rounded-full"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {paper.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Download Button */}
              <Link
                href={paper.downloadUrl}
                className="inline-flex items-center px-6 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 rounded-lg font-semibold transition-all"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19v-7m0 0V5m0 7H5m7 0h7" />
                </svg>
                Download PDF
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  )
}
