import Link from "next/link"
import { Mail, MessageCircle, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-white">Syed Awais</span>
              <span className="text-blue-400">.</span>
            </h3>
            <p className="text-gray-300 mb-4 max-w-md leading-relaxed">
              SEO Specialist & Digital Growth Strategist helping businesses rank, convert & scale through data-driven
              strategies. 50+ happy clients worldwide with proven results.
            </p>
            <div className="flex space-x-4">
              <Link
                href="mailto:awais@digitechora.com"
                className="text-gray-300 hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-gray-800"
              >
                <Mail className="w-5 h-5" />
              </Link>
              <Link
                href="https://wa.me/923092570005"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-green-400 transition-colors p-2 rounded-lg hover:bg-gray-800"
              >
                <MessageCircle className="w-5 h-5" />
              </Link>
              <Link
                href="https://linkedin.com/in/syed-awais-652a9b193/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-gray-800"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/services" className="hover:text-blue-400 transition-colors">
                  SEO Optimization
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400 transition-colors">
                  Conversion Funnels
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400 transition-colors">
                  Web Design
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400 transition-colors">
                  CRM Automation
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400 transition-colors">
                  Content Strategy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/about" className="hover:text-blue-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-blue-400 transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/experience" className="hover:text-blue-400 transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/education" className="hover:text-blue-400 transition-colors">
                  Education
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-blue-400 transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Syed Awais Mahboob. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
