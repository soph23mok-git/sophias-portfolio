'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AboutPage() {
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
            About Me
          </h1>
          <p className="text-xl text-slate-400">
            My journey in biotech and innovation
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="space-y-8">
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl p-8 border border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-4">Who I Am</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              I am a Masters MEng Bioengineering student at Imperial College London with a passion for applying technology to solve real-world health challenges. My research focuses on neurotechnology, women's health innovation, and AI in healthcare.
            </p>
            <p className="text-slate-300 leading-relaxed">
              I believe that technology should be accessible, ethical, and designed with the end-user in mind. I'm driven to create solutions that address healthcare inequities.
            </p>
          </div>

          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl p-8 border border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="text-2xl mr-3">👥</span>
              Leadership
            </h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              As Chair of Imperial FemTech Society, I've scaled the community from a founding team to over 600 members, creating a vibrant ecosystem for biotech innovation.
            </p>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">✓</span>
                <span>Scaled community to 600+ engaged members</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">✓</span>
                <span>Organized 15+ industry seminars and workshops</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">✓</span>
                <span>Established partnerships with biotech companies</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl p-8 border border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="text-2xl mr-3">🧬</span>
              Entrepreneurship
            </h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              I am Co-Founder of PHlora LABS, developing a synbiotic suppository solution to help women manage recurrent microbiome infections.
            </p>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-start">
                <span className="text-purple-400 mr-3">✓</span>
                <span>Developing novel synbiotic formulation</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-3">✓</span>
                <span>Conducting market validation and research</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-3">✓</span>
                <span>Building founding team and securing funding</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Let's Connect</h2>
            <p className="text-white/90 mb-6">
              I'm always interested in collaborating on healthcare innovation projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://linkedin.com/in/soph23mok" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-slate-100 transition-colors">
                🔗 LinkedIn
              </a>
              <a href="https://github.com/soph23mok-git" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-white/20 text-white rounded-lg font-semibold hover:bg-white/30 transition-colors border border-white/50">
                🐙 GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}