import Link from "next/link"
import { Twitter, Instagram, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-navy-800 to-navy-900 text-white py-12 relative overflow-hidden">
      {/* 背景の装飾 */}
      <div className="absolute inset-0 opacity-10">
        <div className="particles-container">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
          <div className="particle particle-5"></div>
        </div>
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1 animate-on-scroll">
            <h3 className="text-2xl font-bold mb-4 text-gradient">The cure</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              AI時代を創る学生開発拠点。 自由な発想と挑戦を大切にし、次世代のAIエンジニアを育成しています。
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-6"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-6"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-6"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>

          <div className="animate-on-scroll delay-100">
            <h4 className="text-lg font-semibold mb-4 text-blue-300">リンク</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#mission"
                  className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  ミッション
                </Link>
              </li>
              <li>
                <Link
                  href="#activities"
                  className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  活動内容
                </Link>
              </li>
              <li>
                <Link
                  href="#events"
                  className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  イベント情報
                </Link>
              </li>
              <li>
                <Link
                  href="#access"
                  className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  アクセス
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  お問い合わせ
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  プライバシーポリシー
                </Link>
              </li>
            </ul>
          </div>

          <div className="animate-on-scroll delay-200">
            <h4 className="text-lg font-semibold mb-4 text-blue-300">所在地</h4>
            <address className="text-gray-300 not-italic">
              <span className="text-blue-400 italic">所在地は現在未確定です</span>
            </address>
            <p className="text-gray-300 mt-4">
              <a
                href="mailto:info@luvo-kyotanabe.example.com"
                className="hover:text-white transition-all duration-300 hover:underline"
              >
                info@luvo-kyotanabe.example.com
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} The cure. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
