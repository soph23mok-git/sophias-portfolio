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
      abstract: 'This paper examines the current applications of neurotechnology in clinical settings, including neuroimaging, brain-computer interfaces, and neuromodulation.',
      keywords: ['Neurotechnology', 'Healthcare', 'Innovation'],
      tags: ['Research Paper', 'Neurotechnology'],
      downloadUrl: '#',
      icon: '🧠',
    },
    {
      id: 2,
      title: 'AI-Driven Diagnostics in Women\'s Health',
      authors: 'Sophia Mok, Research Team',
      date: '2024',
      description: 'Investigating AI applications for improving diagnostic accuracy in women\'s health conditions.',
      abstract: 'This paper reviews current AI applications in women\'s health and proposes frameworks for responsible implementation.',
      keywords: ['AI', 'Women\'s Health', 'Diagnostics'],
      tags: ['Research Paper', 'AI'],
      downloadUrl: '#',
      icon: '🤖',
    },
    {
      id: 3,
      title: 'Microbiome Engineering: Novel Approaches',
      authors: 'Sophia Mok, PHlora LABS Team',
      date: '2024',
      description: 'A review of synbiotic and microbiome-targeted interventions for managing recurrent infections.',
      abstract: 'This paper presents novel microbiome engineering approaches for managing recurrent infections.',
      keywords: ['Microbiome', 'Synbiotics', 'Biotech'],
      tags: ['Research Paper', 'Biotech'],
      downloadUrl: '#',
      icon: '🧬',
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <motion.div className="space-y-6">
          {papers.map((paper) => (
            <motion.div
              key={paper.id}
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
                  <p className="text-sm text-slate-400 mb-2">
                    <span className="font-semibold">Authors:</span> {paper.authors}
                  </p>
                </div>
              </div>

              <p className="text-slate-300 mb-4 leading-relaxed">
                {paper.description}
              </p>

              <details className="mb-4">
                <summary className="cursor-pointer text-purple-400 hover:text-purple-300 font-semibold">
                  View Abstract
                </summary>
                <p className="mt-3 text-slate-300 text-sm bg-slate-900/50 p-4 rounded">
                  {paper.abstract}
                </p>
              </details>

              <div className="flex flex-wrap gap-2 mb-6">
                {paper.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href={paper.downloadUrl}
                className="inline-flex items-center px-6 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 rounded-lg font-semibold transition-all"
              >
                📥 Download PDF
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  )
}