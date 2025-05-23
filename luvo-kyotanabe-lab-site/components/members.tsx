import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function Members() {
  const members = [
    {
      name: "田中 優太",
      department: "理工学部 情報システムデザイン学科",
      year: "3年",
      comment:
        "AIと人間の共創について研究しています。LUVOでの活動を通じて、技術だけでなくチームワークの大切さも学んでいます。",
      image: "/asian-male-student-portrait.png",
    },
    {
      name: "佐藤 美咲",
      department: "文化情報学部",
      year: "2年",
      comment: "文系出身ですが、AIに興味を持ち参加しました。データ分析とUI/UXデザインを担当しています。",
      image: "/asian-female-student-portrait.png",
    },
    {
      name: "鈴木 健太",
      department: "生命医科学部",
      year: "4年",
      comment: "医療×AIの可能性を探るプロジェクトに取り組んでいます。異分野の知識が交わる環境が刺激的です。",
      image: "/asian-male-student-portrait.png",
    },
    {
      name: "山本 花子",
      department: "グローバル・コミュニケーション学部",
      year: "3年",
      comment: "多言語AIの研究に興味があります。技術と言語の架け橋になれるよう日々勉強中です。",
      image: "/placeholder.svg?height=200&width=200&query=asian female student portrait smiling",
    },
    {
      name: "伊藤 大輔",
      department: "経済学部",
      year: "2年",
      comment: "AIビジネスの可能性を探っています。技術とビジネスの両面から考えることの面白さを実感しています。",
      image: "/placeholder.svg?height=200&width=200&query=asian male student portrait casual",
    },
    {
      name: "中村 さくら",
      department: "心理学部",
      year: "3年",
      comment: "人間とAIのインタラクションについて研究しています。心理学の知見をAI開発に活かしたいです。",
      image: "/placeholder.svg?height=200&width=200&query=asian female student portrait professional",
    },
  ]

  return (
    <section id="members" className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy-900">学生メンバー</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            The cureには、同志社大学の様々な学部・学科から多様なバックグラウンドを持つ学生が集まっています。
            それぞれの専門性を活かしながら、共に学び、成長しています。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="aspect-square relative overflow-hidden bg-gray-100">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-1 text-navy-900">{member.name}</h3>
                <p className="text-sm text-gray-500 mb-3">
                  {member.department} {member.year}
                </p>
                <p className="text-gray-700">{member.comment}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
            メンバーは随時募集中！様々な学部・学科からの参加を歓迎しています。
            技術的なバックグラウンドは必要ありません。好奇心と学ぶ意欲があれば大歓迎です。
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-lg transition-colors"
          >
            メンバーに加わる
          </a>
        </div>
      </div>
    </section>
  )
}
