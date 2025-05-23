"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CheckCircle, Send } from "lucide-react"

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    university: "",
    type: "join",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormState((prev) => ({ ...prev, type: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // ここに実際のフォーム送信処理を実装
    setSubmitted(true)

    // 5秒後にフォームをリセット
    setTimeout(() => {
      setSubmitted(false)
      setFormState({
        name: "",
        email: "",
        university: "",
        type: "join",
        message: "",
      })
    }, 5000)
  }

  return (
    <section
      id="contact"
      className="pt-24 mt-[-60px] pb-20 bg-gradient-to-b from-navy-900 to-navy-800 relative overflow-hidden text-white"
    >
      {/* 回路基板のような背景パターン */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-10"></div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">お問い合わせ</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            The cureに興味を持っていただきありがとうございます。
            参加希望やご質問など、お気軽にお問い合わせください。
          </p>
        </div>

        <div className="max-w-2xl mx-auto glassmorphism-dark rounded-xl shadow-glow overflow-hidden animate-on-scroll">
          {submitted ? (
            <div className="p-8 text-center bg-navy-800/80 backdrop-blur-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-900/50 mb-4 border border-green-500/30">
                <CheckCircle className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">送信完了しました</h3>
              <p className="text-blue-100">
                お問い合わせありがとうございます。
                <br />
                3営業日以内に返信いたします。
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-8 bg-navy-800/80 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2 transition-all duration-300 hover:shadow-glow-sm p-3 rounded-lg">
                  <Label htmlFor="name" className="text-blue-200">
                    お名前 <span className="text-red-400">*</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    placeholder="山田 太郎"
                    className="border-blue-500/30 bg-navy-900/50 text-white focus:border-blue-400 transition-all duration-300"
                  />
                </div>
                <div className="space-y-2 transition-all duration-300 hover:shadow-glow-sm p-3 rounded-lg">
                  <Label htmlFor="email" className="text-blue-200">
                    メールアドレス <span className="text-red-400">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    type="email"
                    required
                    placeholder="example@mail.doshisha.ac.jp"
                    className="border-blue-500/30 bg-navy-900/50 text-white focus:border-blue-400 transition-all duration-300"
                  />
                </div>
              </div>

              <div className="space-y-2 mb-6 transition-all duration-300 hover:shadow-glow-sm p-3 rounded-lg">
                <Label htmlFor="university" className="text-blue-200">
                  学部・学年 <span className="text-red-400">*</span>
                </Label>
                <Input
                  id="university"
                  name="university"
                  value={formState.university}
                  onChange={handleChange}
                  required
                  placeholder="○○学部 ○年"
                  className="border-blue-500/30 bg-navy-900/50 text-white focus:border-blue-400 transition-all duration-300"
                />
              </div>

              <div className="space-y-2 mb-6 transition-all duration-300 hover:shadow-glow-sm p-3 rounded-lg">
                <Label className="text-blue-200">
                  お問い合わせ種別 <span className="text-red-400">*</span>
                </Label>
                <RadioGroup value={formState.type} onValueChange={handleRadioChange} className="text-blue-100">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="join" id="join" />
                    <Label htmlFor="join">参加希望</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="event" id="event" />
                    <Label htmlFor="event">説明会参加</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="question" id="question" />
                    <Label htmlFor="question">質問・相談</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="other" />
                    <Label htmlFor="other">その他</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2 mb-6 transition-all duration-300 hover:shadow-glow-sm p-3 rounded-lg">
                <Label htmlFor="message" className="text-blue-200">
                  メッセージ <span className="text-red-400">*</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  placeholder="参加動機や質問内容をご記入ください"
                  rows={5}
                  className="border-blue-500/30 bg-navy-900/50 text-white focus:border-blue-400 transition-all duration-300"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 rounded-lg shadow-glow-sm transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Send className="h-5 w-5" />
                送信する
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
