"use client"

import { useEffect } from "react"

export default function ScrollAnimations() {
  useEffect(() => {
    // Intersection Observerの設定
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    }

    // アニメーション要素を監視
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
          observer.unobserve(entry.target) // 一度アニメーションしたら監視を解除
        }
      })
    }, observerOptions)

    // アニメーション対象の要素を取得して監視を開始
    const animateElements = document.querySelectorAll(".animate-on-scroll")
    animateElements.forEach((el) => {
      observer.observe(el)
    })

    // クリーンアップ関数
    return () => {
      animateElements.forEach((el) => {
        observer.unobserve(el)
      })
    }
  }, [])

  return null
}
