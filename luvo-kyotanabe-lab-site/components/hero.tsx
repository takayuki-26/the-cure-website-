import { UserPlus } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col justify-center overflow-hidden bg-gradient-to-b from-navy-900 to-navy-800 text-white">
      {/* トップナビゲーション */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-navy-900/90 backdrop-blur-sm border-b border-white/10 shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <a href="#" className="text-white font-bold text-xl hover:text-orange-300 transition-colors">
            The cure
          </a>
          <nav>
            <ul className="flex items-center gap-1 sm:gap-4">
              <li>
                <a
                  href="#mission"
                  className="text-white hover:text-orange-300 px-2 py-1 text-sm font-medium hover:underline transition-all duration-200"
                >
                  ミッション
                </a>
              </li>
              <li>
                <a
                  href="#activities"
                  className="text-white hover:text-orange-300 px-2 py-1 text-sm font-medium hover:underline transition-all duration-200"
                >
                  活動内容
                </a>
              </li>
              <li>
                <a
                  href="#events"
                  className="text-white hover:text-orange-300 px-2 py-1 text-sm font-medium hover:underline transition-all duration-200"
                >
                  イベント
                </a>
              </li>
              <li>
                <a
                  href="#access"
                  className="text-white hover:text-orange-300 px-2 py-1 text-sm font-medium hover:underline transition-all duration-200"
                >
                  アクセス
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white hover:text-orange-300 px-2 py-1 text-sm font-medium hover:underline transition-all duration-200"
                >
                  お問い合わせ
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="absolute inset-0 z-0">
        {/* 背景動画 */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute min-w-full min-h-full object-cover w-auto h-auto"
            poster="/tech-background-poster.png"
          >
            <source src="/tech-background.mp4" type="video/mp4" />
            {/* 動画が再生できない場合のフォールバック画像 */}
            <img
              src="/tech-background-poster.png"
              alt="テクノロジー背景"
              className="absolute min-w-full min-h-full object-cover"
            />
          </video>
        </div>

        {/* オーバーレイグラデーション - より暗く、よりコントラストを強く */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/90 to-navy-800/95 z-10"></div>

        {/* 動的な要素 - 浮遊する粒子効果 */}
        <div className="absolute inset-0 z-5 opacity-20">
          <div className="particles-container">
            <div className="particle particle-1"></div>
            <div className="particle particle-2"></div>
            <div className="particle particle-3"></div>
            <div className="particle particle-4"></div>
            <div className="particle particle-5"></div>
          </div>
        </div>
      </div>

      <div className="container relative z-20 px-4 py-16 md:py-24 mx-auto text-center mt-12">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-shadow-lg">
            <span className="text-orange-400 glow">AI時代</span>を創るのは、
            <br />
            <span className="text-blue-400 glow">私だ。</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-100 text-shadow-sm">
            The cureは、あなたのアイデアを形にする場所。
            <br className="hidden md:block" />
            最先端のAI技術と共に、未来を創る仲間が待っています。
          </p>

          <div className="flex justify-center mt-10 animate-bounce-slow">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold px-10 py-6 rounded-xl shadow-lg hover:shadow-orange-500/30 transition-all duration-300 transform hover:scale-105 group"
            >
              <a href="#contact" className="flex items-center gap-2">
                <UserPlus className="h-5 w-5 group-hover:animate-pulse" />
                <span className="text-lg">参加する</span>
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <a href="#mission" className="text-white/80 hover:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-8 w-8"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>
    </section>
  )
}
