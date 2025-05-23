import { Lightbulb, Users, Rocket, Code } from "lucide-react"

export default function Mission() {
  return (
    <section
      id="mission"
      className="pt-24 mt-[-60px] pb-20 bg-gradient-to-b from-navy-900 to-navy-800 relative overflow-hidden text-white"
    >
      {/* 回路基板のような背景パターン */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-10"></div>

      {/* 光る粒子 */}
      <div className="absolute inset-0 z-0">
        <div className="particles-container">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
        </div>
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">ミッション & ビジョン</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            <span className="whitespace-nowrap">
              私たちは、AI時代に必要なスキルと創造性を持つ次世代エンジニアの育成を目指しています。
            </span>
            <br />
            技術だけでなく、多様な視点を持つ仲間と、社会に価値をもたらすプロジェクトに挑戦します。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-navy-800/50 backdrop-blur-sm rounded-xl p-8 text-center transition-all duration-500 hover-3d card-hover border border-blue-500/20 shadow-glow-sm animate-on-scroll delay-100">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 glow-blue">
              <Lightbulb className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">自由な発想</h3>
            <p className="text-blue-100">
              固定概念にとらわれず、新しいアイデアを試せる環境を提供します。失敗を恐れず、挑戦することを大切にしています。
            </p>
          </div>

          <div className="bg-navy-800/50 backdrop-blur-sm rounded-xl p-8 text-center transition-all duration-500 hover-3d card-hover border border-orange-500/20 shadow-glow-sm animate-on-scroll delay-200">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 glow-orange">
              <Users className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">多様性の尊重</h3>
            <p className="text-blue-100">
              技術・デザイン・ビジネス・人文科学など、様々な専門性と視点を持つメンバーが集まり、お互いに学び合います。
            </p>
          </div>

          <div className="bg-navy-800/50 backdrop-blur-sm rounded-xl p-8 text-center transition-all duration-500 hover-3d card-hover border border-purple-500/20 shadow-glow-sm animate-on-scroll delay-300">
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 glow-purple">
              <Rocket className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">実践的な挑戦</h3>
            <p className="text-blue-100">
              最新のAI技術を実際に使いながら学び、実用的なプロジェクトを通じて成長できる機会を提供します。
            </p>
          </div>

          <div className="bg-navy-800/50 backdrop-blur-sm rounded-xl p-8 text-center transition-all duration-500 hover-3d card-hover border border-green-500/20 shadow-glow-sm animate-on-scroll delay-400">
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 glow-green">
              <Code className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">学生主体</h3>
            <p className="text-blue-100">
              学生自身がプロジェクトを企画・運営し、主体的に活動します。自分のペースで参加でき、授業との両立も可能です。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
