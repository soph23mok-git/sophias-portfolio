'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ReportsPage() {
  const reports = [
    {
      id: 1,
      title: 'Imperial FemTech Society: Annual Report 2024',
      category: 'Annual Report',
      date: '2024',
      description: 'Growth and impact documentation of Imperial FemTech Society.',
      highlights: ['600+ members', '15+ seminars', '10+ partnerships', '5 research projects'],
      downloadUrl: '#',
      icon: '📊',
    },
    {
      id: 2,
      title: 'PHlora LABS: Business Plan',
      category: 'Business Report',
      date: '2024',
      description: 'Strategic business plan and market analysis.',
      highlights: ['$2.5B+ market', 'Competitive analysis', 'Go-to-market', 'Financial projections'],
      downloadUrl: '#',
      icon: '💼',
    },
    {
      id: 3,
      title: 'Women\'s Health Tech Landscape',
      category: 'Industry Report',
      date: '2024',
      description: 'Comprehensive sector analysis.',
      highlights: ['Market trends', 'Key players', 'Regulatory view', 'Investments'],
      downloadUrl: '#',
      icon: '🏢',
    },
    {
      id: 4,
      title: 'Neurotechnology Market Research',
      category: 'Research Report',
      date: '2024',
      description: 'Diagnostic applications analysis.',
      highlights: ['Market size', 'Adoption rates', 'Clinical validation', 'Reimbursement'],
      downloadUrl: '#',
      icon: '🔬',
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4">
            Reports & Analysis
          </h1>
          <p className="text-xl text-slate-400">
            Strategic reports and market analysis
          </p>
        </motion.div>

        <motion.div className="grid md:grid-cols-2 gap-8">
          {reports.map((report) => (
            <motion.div
              key={report.id}
              className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-slate-700 hover:border-emerald-500 card-hover"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-5xl">{report.icon}</div>
                <span className="px-3 py-1 text-xs bg-emerald-500/20 text-emerald-300 rounded-full">
                  {report.category}
                </span>
              </div>
              <p className="text-sm text-slate-400 mb-3 font-semibold">{report.date}</p>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                {report.title}
              </h3>
              <p className="text-slate-300 mb-6">{report.description}</p>
              <div className="mb-6">
                <ul className="space-y-2">
                  {report.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start text-sm text-slate-300">
                      <span className="mr-3 text-emerald-400">▪</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href={report.downloadUrl}
                className="inline-flex items-center px-6 py-2 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 rounded-lg font-semibold"
              >
                📥 Download
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  )
}