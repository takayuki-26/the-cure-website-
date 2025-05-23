"use client"

import { useState, useEffect } from "react"
import { ChevronUp } from "lucide-react"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  // スクロール位置に基づいて表示/非表示を切り替え
  useEffect(() => {
    const toggleVisibility = () => {
      // 300px以上スクロールしたらボタンを表示
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    // クリーンアップ関数
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  // トップにスクロール
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 focus:outline-none neon-box"
          aria-label="ページトップへ戻る"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      )}
    </>
  )
}
