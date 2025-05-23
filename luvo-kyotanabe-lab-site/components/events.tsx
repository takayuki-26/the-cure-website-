"use client"

import type React from "react"

import { useState } from "react"
import { Calendar, Clock, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle } from "lucide-react"

export default function Events() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState<(typeof events)[0] | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    university: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const events = [
    {
      title: "LUVO説明会 & AI開発入門ワークショップ",
      date: "2025年5月15日",
      time: "15:00 - 17:00",
      location: "同志社大学 京田辺キャンパス RM301",
      description:
        "LUVOの活動紹介とAIの基礎から実践的な開発手法まで、初心者向けに解説します。プログラミング経験は不要です。",
      isHighlighted: true,
    },
    {
      title: "RAGシステム構築ハンズオン",
      date: "2025年5月22日",
      time: "16:30 - 18:30",
      location: "同志社大学 京田辺キャンパス RM302",
      description:
        "ベクトルDBとLLMを組み合わせたRAGシステムを実際に構築します。基本的なPython知識があると望ましいです。",
      isHighlighted: false,
    },
    {
      title: "AIプロジェクト成果発表会",
      date: "2025年6月10日",
      time: "13:00 - 15:00",
      location: "同志社大学 京田辺キャンパス 知真館1号館",
      description: "メンバーが取り組んできたAIプロジェクトの成果を発表します。どなたでも参加可能です。",
      isHighlighted: false,
    },
    {
      title: "AI×ビジネス勉強会",
      date: "2025年6月17日",
      time: "16:00 - 18:00",
      location: "同志社大学 京田辺キャンパス RM303",
      description:
        "AIをビジネスに活用する方法について、実例を交えながら学びます。経済学部・商学部の学生にもおすすめです。",
      isHighlighted: false,
    },
    {
      title: "夏季集中ワークショップ（事前説明会）",
      date: "2025年7月5日",
      time: "13:30 - 15:00",
      location: "同志社大学 京田辺キャンパス 知真館2号館",
      description:
        "夏休み期間中に開催する3日間の集中ワークショップについての説明会です。参加希望者は必ずご参加ください。",
      isHighlighted: false,
    },
  ]

  const handleApplyClick = (event: (typeof events)[0]) => {
    setSelectedEvent(event)
    setIsDialogOpen(true)
    setIsSubmitted(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // ここに実際のフォーム送信処理を実装
    console.log("Form submitted:", formData)
    setIsSubmitted(true)

    // 5秒後にダイアログを閉じる
    setTimeout(() => {
      setIsDialogOpen(false)
      // フォームをリセット
      setFormData({
        name: "",
        university: "",
        email: "",
        phone: "",
        message: "",
      })
    }, 3000)
  }

  return (
    <section
      id="events"
      className="pt-24 mt-[-60px] pb-20 bg-gradient-to-b from-navy-700 to-navy-800 relative overflow-hidden text-white"
    >
      {/* 回路基板のような背景パターン */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-10"></div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">イベント・説明会情報</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            The cureでは、定期的に説明会やワークショップを開催しています。
            興味のあるイベントにぜひご参加ください。参加するだけでも大歓迎です！
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative animate-on-scroll">
          {/* スクロール可能であることを示すインジケーター */}
          <div className="absolute -top-4 right-0 glassmorphism-dark px-3 py-1 rounded-t-lg text-sm font-medium flex items-center z-10 text-blue-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-1"
            >
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
            </svg>
            スクロールでさらに表示
          </div>

          {/* スクロール可能なコンテナ */}
          <div className="space-y-6 h-[500px] overflow-y-auto pr-2 border border-blue-500/20 rounded-lg shadow-inner bg-navy-900/50 backdrop-blur-sm relative scrollbar scrollbar-thumb-blue-500/50 scrollbar-track-navy-900/30 scrollbar-w-2">
            {events.map((event, index) => (
              <Card
                key={index}
                className={`w-full transition-all duration-500 hover:shadow-glow ${
                  event.isHighlighted ? "border-l-4 border-l-orange-500" : "border-l-4 border-l-transparent"
                } ${index >= 3 ? "animate-fade-in-down" : ""} bg-navy-800/70 backdrop-blur-sm border-blue-500/20 text-white`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="md:w-1/4 flex flex-col space-y-3 shrink-0">
                      <div className="flex items-center text-blue-200">
                        <Calendar
                          className={`h-5 w-5 mr-2 text-blue-400 shrink-0 ${hoveredIndex === index ? "animate-pulse" : ""}`}
                        />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-blue-200">
                        <Clock className="h-5 w-5 mr-2 text-blue-400 shrink-0" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center text-blue-200">
                        <MapPin className="h-5 w-5 mr-2 text-blue-400 shrink-0" />
                        <span className="text-sm md:text-base">{event.location}</span>
                      </div>
                    </div>

                    <div className="md:w-3/4">
                      <div className="flex items-start mb-2">
                        {event.isHighlighted && (
                          <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-medium px-3 py-1 rounded-full mr-2 shrink-0 shadow-glow-sm">
                            次回イベント
                          </div>
                        )}
                        <h3 className="text-xl font-bold text-white">{event.title}</h3>
                      </div>
                      <p className="text-blue-100 mb-4">{event.description}</p>
                      <Button
                        onClick={() => handleApplyClick(event)}
                        className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-glow-sm"
                      >
                        参加申し込み
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <div className="sticky bottom-0 bg-gradient-to-t from-navy-900 via-navy-900/90 to-transparent pt-4 pb-3 text-center">
              <div className="bg-blue-900/50 text-blue-300 px-4 py-2 rounded-full inline-flex items-center animate-pulse">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <path d="M7 13l5 5 5-5" />
                </svg>
                スクロールして更に表示
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* イベント申し込みダイアログ */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-navy-800/95 border border-blue-500/30 text-white backdrop-blur-md shadow-glow-sm max-w-md">
          {isSubmitted ? (
            <div className="py-8 text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-green-900/50 flex items-center justify-center mb-4 border border-green-500/30">
                <CheckCircle className="h-8 w-8 text-green-400" />
              </div>
              <DialogTitle className="text-xl font-bold mb-2">申し込み完了</DialogTitle>
              <DialogDescription className="text-blue-100">
                イベントへの参加申し込みありがとうございます。
                <br />
                詳細情報を記載したメールをお送りしました。
              </DialogDescription>
            </div>
          ) : (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl font-bold text-white">
                  {selectedEvent?.title} - 参加申し込み
                </DialogTitle>
                <DialogDescription className="text-blue-100">
                  以下のフォームに必要事項を入力して、申し込みを完了してください。
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-blue-200">
                    お名前 <span className="text-red-400">*</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="山田 太郎"
                    className="border-blue-500/30 bg-navy-900/50 text-white focus:border-blue-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="university" className="text-blue-200">
                    学部・学科・学年 <span className="text-red-400">*</span>
                  </Label>
                  <Input
                    id="university"
                    name="university"
                    value={formData.university}
                    onChange={handleInputChange}
                    required
                    placeholder="○○学部 ○○学科 ○年"
                    className="border-blue-500/30 bg-navy-900/50 text-white focus:border-blue-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-blue-200">
                    メールアドレス <span className="text-red-400">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="example@mail.doshisha.ac.jp"
                    className="border-blue-500/30 bg-navy-900/50 text-white focus:border-blue-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-blue-200">
                    電話番号
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="090-1234-5678"
                    className="border-blue-500/30 bg-navy-900/50 text-white focus:border-blue-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-blue-200">
                    質問・備考
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="質問や備考があればご記入ください"
                    rows={3}
                    className="border-blue-500/30 bg-navy-900/50 text-white focus:border-blue-400"
                  />
                </div>

                <DialogFooter className="pt-4">
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-2 rounded-lg shadow-glow-sm transition-all duration-300"
                  >
                    申し込みを確定する
                  </Button>
                </DialogFooter>
              </form>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
