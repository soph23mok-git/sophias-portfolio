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
      description: 'Comprehensive annual report documenting the growth and impact of Imperial FemTech Society.',
      highlights: [
        'Membership grew from founding team to 600+ members',
        'Organized 15+ industry seminars and workshops',
        'Established partnerships with 10+ biotech companies',
        'Funded 5 collaborative research projects',
        'Community impact across 20+ universities',
      ],
      downloadUrl: '#',
      icon: '📊',
    },
    {
      id: 2,
      title: 'PHlora LABS: Business Plan & Market Analysis',
      category: 'Business Report',
      date: '2024',
      description: 'Strategic business plan and market analysis for PHlora LABS venture.',
      highlights: [
        'Market size analysis: $2.5B+ addressable market',
        'Competitive landscape assessment',
        'Go-to-market strategy and timeline',
        'Financial projections (3-year)',
        'Risk analysis and mitigation strategies',
      ],
      downloadUrl: '#',
      icon: '💼',
    },
    {
      id: 3,
      title: 'Women\'s Health Tech Landscape: Industry Report',
      category: 'Industry Report',
      date: '2024',
      description: 'Comprehensive analysis of the women\'s health technology sector.',
      highlights: [
        'Market trends and growth projections',
        'Key players and competitive analysis',
        'Regulatory landscape overview',
        'Technology trends and innovations',
        'Investment patterns and funding sources',
      ],
      downloadUrl: '#',
      icon: '🏢',
    },
    {
      id: 4,
      title: 'Neurotechnology Market Research: Diagnostic Applications',
      category: 'Research Report',
      date: '2024',
      description: 'Market research report on neurotechnology applications in diagnostics.',
      highlights: [
        'Current market size and projections',
        'Technology adoption rates by region',
        'Clinical validation status',
        'Reimbursement landscape',
        'Future opportunities and barriers to adoption',
      ],
      downloadUrl: '#',
      icon: '🔬',
    },
    {
      id: 5,
      title: 'AI in Healthcare: Implementation Framework Report',
      category: 'Technical Report',
      date: '2024',
      description: 'Technical report providing implementation frameworks for AI in healthcare.',
      highlights: [
        'System architecture guidelines',
        'Data governance and privacy frameworks',
        'Validation and testing protocols',
        'Regulatory compliance checklist',
        'Best practices from 50+ implementations',
      ],
      downloadUrl: '#',
      icon: '⚙️',
    },
    {
      id: 6,
      title: 'Community Building for Innovation: Strategic Playbook',
      category: 'Strategy Report',
      date: '2024',
      description: 'Strategic playbook for building and scaling innovation communities.',
      highlights: [
        'Community growth strategies',
        'Engagement and retention frameworks',
        'Partnership development guide',
        'Event planning and execution',
        'Measuring community impact',
      ],
      downloadUrl: '#',
      icon: '🎯',
    },
  ]

  const categories = [...new Set(reports.map(r => r.category))]

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
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
            Strategic reports, market analysis, and research documentation
          </p>
        </motion.div>

        {/* Reports Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-8"
        >
          {reports.map((report) => (
            <motion.div
              key={report.id}
              variants={itemVariants}
              className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-slate-700 hover:border-emerald-500 card-hover"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-5xl">{report.icon}</div>
                <span className="px-3 py-1 text-xs bg-emerald-500/20 text-emerald-300 rounded-full">
                  {report.category}
                </span>
              </div>

              <p className="text-sm text-slate-400 mb-3 font-semibold">
                {report.date}
              </p>

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                {report.title}
              </h3>

              <p className="text-slate-300 mb-6 leading-relaxed">
                {report.description}
              </p>

              {/* Highlights */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-slate-400 mb-3">Key Contents:</h4>
                <ul className="space-y-2">
                  {report.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start text-sm text-slate-300">
                      <span className="mr-3 text-emerald-400">▪</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Download Button */}
              <Link
                href={report.downloadUrl}
                className="inline-flex items-center px-6 py-2 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 rounded-lg font-semibold transition-all"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19v-7m0 0V5m0 7H5m7 0h7" />
                </svg>
                Download Report
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  )
}
