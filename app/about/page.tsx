'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AboutPage() {
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
            About Me
          </h1>
          <p className="text-xl text-slate-400">
            My journey in biotech and innovation
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-8"
        >
          {/* Bio */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl p-8 border border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-4">Who I Am</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              I am a Masters MEng Bioengineering student at Imperial College London with a passion for applying technology to solve real-world health challenges. My research focuses on the intersection of <span className="text-blue-400 font-semibold">neurotechnology</span>, <span className="text-purple-400 font-semibold">women's health innovation</span>, and <span className="text-emerald-400 font-semibold">AI in healthcare</span>.
            </p>
            <p className="text-slate-300 leading-relaxed">
              I believe that technology should be accessible, ethical, and designed with the end-user in mind. I'm driven to create solutions that address healthcare inequities and advance medical innovation in underserved areas.
            </p>
          </div>

          {/* Leadership */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl p-8 border border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="text-2xl mr-3">👥</span>
              Leadership & Community Building
            </h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              As Chair of the Imperial FemTech Society, I've had the privilege of growing our community from a founding team to over 600 members. Our mission is to advance women's health through research and innovation. Through organizing seminars, workshops, and fostering industry partnerships, we've created a vibrant ecosystem for biotech innovation.
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
                <span>Established partnerships with leading biotech companies</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">✓</span>
                <span>Facilitated collaborative research projects</span>
              </li>
            </ul>
          </div>

          {/* Entrepreneurship */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl p-8 border border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="text-2xl mr-3">🧬</span>
              Entrepreneurship
            </h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              I am Co-Founder of PHlora LABS, an early-stage biotech venture dedicated to solving a critical women's health challenge. PHlora LABS is developing a synbiotic suppository solution designed to help women break from the cycle of recurrent microbiome infections. This venture combines cutting-edge biotechnology with a deep understanding of patient needs.
            </p>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-start">
                <span className="text-purple-400 mr-3">✓</span>
                <span>Developing novel synbiotic formulation</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-3">✓</span>
                <span>Conducting rigorous market validation and research</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-3">✓</span>
                <span>Building founding team and securing initial funding</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-3">✓</span>
                <span>Navigating regulatory pathways for biotech innovation</span>
              </li>
            </ul>
          </div>

          {/* Research Focus */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl p-8 border border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="text-2xl mr-3">🧠</span>
              Research Focus
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Neurotechnology</h3>
                <p className="text-slate-300">
                  Exploring innovative applications of neurotechnology in diagnostics and treatment, particularly in the context of modern healthcare challenges.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-purple-400 mb-2">AI in Healthcare</h3>
                <p className="text-slate-300">
                  Investigating how artificial intelligence can improve diagnostic accuracy, reduce healthcare inequities, and enhance patient outcomes while addressing ethical considerations.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-emerald-400 mb-2">Women's Health Innovation</h3>
                <p className="text-slate-300">
                  Developing and evaluating novel approaches to women-specific health challenges, from microbiome interventions to digital health solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl p-8 border border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-6">My Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Innovation</h3>
                <p className="text-slate-300 text-sm">
                  I believe in leveraging cutting-edge technology to solve healthcare challenges in novel ways.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-purple-400 mb-2">Equity</h3>
                <p className="text-slate-300 text-sm">
                  Healthcare solutions should be accessible to all, regardless of background or socioeconomic status.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-emerald-400 mb-2">Collaboration</h3>
                <p className="text-slate-300 text-sm">
                  Great solutions emerge from diverse teams working together toward a common goal.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-pink-400 mb-2">Integrity</h3>
                <p className="text-slate-300 text-sm">
                  Ethical practices and transparency guide all my work in biotech and healthcare innovation.
                </p>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Let's Connect</h2>
            <p className="text-white/90 mb-6">
              I'm always interested in collaborating on projects that advance healthcare innovation and women's health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://linkedin.com/in/soph23mok"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/soph23mok-git"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-white/20 text-white rounded-lg font-semibold hover:bg-white/30 transition-colors border border-white/50"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}
