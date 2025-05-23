"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Database, Network, Workflow, Code, Cpu, Layers, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Activities() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [visibleItems, setVisibleItems] = useState(3)

  const activities = [
    {
      title: "RAGとベクトルDBの活用実験",
      description:
        "大規模言語モデルの能力を拡張するRetrieval Augmented Generation（RAG）と、ベクトルデータベースを組み合わせた実験を行っています。",
      image: "/rag-vector-db.png",
      icon: <Database className="h-5 w-5" />,
      iconBg: "bg-blue-500",
      shadowColor: "shadow-glow-blue",
      borderColor: "border-blue-500/20",
      points: [
        { text: "ドキュメント検索の精度向上実験", color: "text-orange-400" },
        { text: "マルチモーダルデータの処理研究", color: "text-orange-400" },
      ],
    },
    {
      title: "ワークフロー設計の検証",
      description:
        "AIを活用した効率的なワークフロー設計に取り組んでいます。人間とAIの協働を最適化し、創造的な作業をサポートするシステムの構築を目指しています。",
      image: "/workflow-design.png",
      icon: <Workflow className="h-5 w-5" />,
      iconBg: "bg-orange-500",
      shadowColor: "shadow-glow-orange",
      borderColor: "border-orange-500/20",
      points: [
        { text: "AIアシスタントを活用した業務効率化", color: "text-blue-400" },
        { text: "クリエイティブワークにおけるAI活用", color: "text-blue-400" },
      ],
    },
    {
      title: "API連携の可能性探究",
      description:
        "様々なAI APIを組み合わせ、新しいサービスやアプリケーションの可能性を探っています。複数のAIサービスを連携させることで、より高度な機能を実現する方法を研究しています。",
      image: "/api-integration.png",
      icon: <Network className="h-5 w-5" />,
      iconBg: "bg-green-500",
      shadowColor: "shadow-glow-green",
      borderColor: "border-green-500/20",
      points: [
        { text: "マルチモーダルAI APIの連携実験", color: "text-green-400" },
        { text: "AIサービス間の効率的な連携手法", color: "text-green-400" },
      ],
    },
    {
      title: "AI駆動開発の研究",
      description:
        "AIを活用したソフトウェア開発手法について研究しています。コード生成、テスト自動化、バグ検出などにAIを活用し、開発プロセスを革新する方法を探求しています。",
      image: "/ai-driven-development.png",
      icon: <Code className="h-5 w-5" />,
      iconBg: "bg-purple-500",
      shadowColor: "shadow-glow-purple",
      borderColor: "border-purple-500/20",
      points: [
        { text: "AIコードアシスタントの活用研究", color: "text-purple-400" },
        { text: "自動テスト生成の効率化", color: "text-purple-400" },
      ],
    },
    {
      title: "LLMファインチューニング",
      description:
        "特定の用途に最適化された言語モデルの開発に取り組んでいます。オープンソースモデルをベースに、特定ドメインに特化したモデルの作成方法を研究しています。",
      image: "/llm-fine-tuning-new.png",
      icon: <Cpu className="h-5 w-5" />,
      iconBg: "bg-red-500",
      shadowColor: "shadow-glow-red",
      borderColor: "border-red-500/20",
      points: [
        { text: "小規模データでの効率的な学習手法", color: "text-red-400" },
        { text: "特定タスク向けモデル最適化", color: "text-red-400" },
      ],
    },
    {
      title: "マルチモーダルAI研究",
      description:
        "テキスト、画像、音声などを統合的に処理するマルチモーダルAIの可能性を探求しています。複数の情報源を組み合わせた新しいアプリケーションの開発に挑戦しています。",
      image: "/multimodal-ai-new.png",
      icon: <Layers className="h-5 w-5" />,
      iconBg: "bg-blue-600",
      shadowColor: "shadow-glow-blue",
      borderColor: "border-blue-600/20",
      points: [
        { text: "画像・テキスト統合アプリケーション", color: "text-blue-400" },
        { text: "マルチモーダル情報検索システム", color: "text-blue-400" },
      ],
    },
  ]

  // 画面サイズに応じて表示アイテム数を調整
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(1)
      } else if (window.innerWidth < 1024) {
        setVisibleItems(2)
      } else {
        setVisibleItems(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (activities.length - visibleItems + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? activities.length - visibleItems : prevIndex - 1))
  }

  // タッチイベントハンドラ
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      // 左スワイプ
      nextSlide()
    }

    if (touchStart - touchEnd < -100) {
      // 右スワイプ
      prevSlide()
    }
  }

  // カルーセルのスタイルを計算
  const getCarouselStyle = () => {
    const itemWidth = 100 / visibleItems
    return {
      transform: `translateX(-${currentIndex * itemWidth}%)`,
      width: `${(activities.length * 100) / visibleItems}%`,
    }
  }

  return (
    <section
      id="activities"
      className="pt-24 mt-[-60px] pb-20 bg-gradient-to-b from-navy-800 to-navy-700 relative overflow-hidden text-white"
    >
      {/* 回路基板のような背景パターン */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-10"></div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">活動内容</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            <span className="whitespace-nowrap">
              The cureでは、AI技術を中心に様々な実験的プロジェクトに取り組んでいます。
            </span>
            <br />
            理論だけでなく、実際に手を動かしながら学べる環境です。
          </p>
        </div>

        <div className="relative animate-on-scroll">
          {/* スライド可能であることを示すインジケーター */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full backdrop-blur-sm border border-blue-500/30 animate-pulse">
              <ChevronLeft className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">横にスライドして全プロジェクトを見る</span>
              <ChevronRight className="h-4 w-4 ml-2" />
            </div>
          </div>
          {/* カルーセルナビゲーション */}
          <div className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 z-20">
            <Button
              onClick={prevSlide}
              className="rounded-full w-12 h-12 md:w-16 md:h-16 bg-blue-500/80 hover:bg-blue-600 shadow-glow-blue p-0 flex items-center justify-center border-2 border-white/20 backdrop-blur-sm transition-transform duration-300 hover:scale-110"
              aria-label="前へ"
            >
              <ChevronLeft className="h-8 w-8 text-white" />
            </Button>
          </div>

          <div className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 z-20">
            <Button
              onClick={nextSlide}
              className="rounded-full w-12 h-12 md:w-16 md:h-16 bg-blue-500/80 hover:bg-blue-600 shadow-glow-blue p-0 flex items-center justify-center border-2 border-white/20 backdrop-blur-sm transition-transform duration-300 hover:scale-110"
              aria-label="次へ"
            >
              <ChevronRight className="h-8 w-8 text-white" />
            </Button>
          </div>

          {/* カルーセルコンテナ */}
          <div className="overflow-hidden relative group">
            {/* スライドヒントのオーバーレイ（初回表示時のみ） */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-navy-800/50 z-10 pointer-events-none opacity-70 group-hover:opacity-0 transition-opacity duration-500">
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 animate-bounce-slow">
                <ChevronRight className="h-8 w-8 text-blue-300" />
              </div>
            </div>
            <div
              ref={carouselRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={getCarouselStyle()}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {activities.map((activity, index) => (
                <div key={index} className="px-2 md:px-4" style={{ width: `${100 / visibleItems}%` }}>
                  <Card className="overflow-hidden transition-all duration-500 card-hover border-0 shadow-glow bg-navy-800/50 backdrop-blur-sm text-white h-full">
                    <div className="aspect-video relative overflow-hidden bg-navy-900">
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent z-10"></div>
                      <Image
                        src={activity.image || "/placeholder.svg"}
                        alt={activity.title}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-110 opacity-80"
                      />
                      <div className="absolute bottom-4 left-4 z-20">
                        <div className={`${activity.iconBg} text-white p-2 rounded-full ${activity.shadowColor}`}>
                          {activity.icon}
                        </div>
                      </div>
                    </div>
                    <CardContent className={`p-6 border-t ${activity.borderColor}`}>
                      <h3 className="text-xl font-bold text-white mb-3">{activity.title}</h3>
                      <p className="text-blue-100 mb-4">{activity.description}</p>
                      <ul className="space-y-2 text-blue-100">
                        {activity.points.map((point, pointIndex) => (
                          <li key={pointIndex} className="flex items-start">
                            <span className={`${point.color} mr-2`}>✓</span>
                            {point.text}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* カルーセルインジケーター */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: activities.length - visibleItems + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "bg-blue-500 w-6 shadow-glow-blue" : "bg-navy-600 hover:bg-blue-400/50"
                }`}
                aria-label={`スライド ${index + 1}に移動`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
