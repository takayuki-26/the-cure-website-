"use client"

import { useEffect } from "react"

export default function ScrollHelper() {
  useEffect(() => {
    // すべてのアンカーリンクを取得
    const anchorLinks = document.querySelectorAll('a[href^="#"]')

    // 各アンカーリンクにクリックイベントを追加
    anchorLinks.forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()

        // ヘッダーの高さを取得（ナビゲーションバーの高さ）
        const headerOffset = 60
        const targetId = this.getAttribute("href")

        if (targetId === "#") return

        const targetElement = document.querySelector(targetId)

        if (targetElement) {
          // ターゲット要素の位置を計算（ヘッダーの高さを考慮）
          const elementPosition = targetElement.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset

          // スムーズにスクロール
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          })
        }
      })
    })
  }, [])

  return null
}
