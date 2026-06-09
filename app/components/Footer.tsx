'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socials = [
    { name: 'LinkedIn', url: 'https://linkedin.com/in/soph23mok', icon: '🔗' },
    { name: 'GitHub', url: 'https://github.com/soph23mok-git', icon: '🐙' },
  ]

  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-lg font-bold text-white mb-4">Sophia Mok</h3>
            <p className="text-slate-400 text-sm">
              MEng Bioengineering student at Imperial College London, passionate about biotech innovation and women's health.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold text-white mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/projects" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/papers" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Papers
                </Link>
              </li>
              <li>
                <Link href="/reports" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Reports
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors text-sm">
                  About
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold text-white mb-4">Connect</h3>
            <div className="flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors"
                  title={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-700 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © {currentYear} Sophia Mok. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
