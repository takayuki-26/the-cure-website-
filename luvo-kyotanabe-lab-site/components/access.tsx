"use client"

import Image from "next/image"
import { MapPin, Clock, Train, Info, Map } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Access() {
  return (
    <section
      id="access"
      className="pt-24 mt-[-60px] pb-20 bg-gradient-to-b from-navy-800 to-navy-900 relative overflow-hidden text-white"
    >
      {/* 回路基板のような背景パターン */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-10"></div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">アクセス</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            <span className="whitespace-nowrap">The cureへのアクセス方法をご案内します。</span>
            <br />
            お気軽にお立ち寄りください。見学も歓迎しています。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-4 animate-on-scroll delay-100">
            <div className="rounded-xl overflow-hidden shadow-glow hover-3d transition-all duration-500 border border-blue-500/20">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/office-exterior.png"
                  alt="The cure オフィス外観"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 to-transparent"></div>
              </div>
            </div>

            <Button
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-3 flex items-center justify-center gap-2 rounded-lg shadow-glow-sm transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open("https://maps.google.com/?q=同志社大学京田辺キャンパス", "_blank")}
            >
              <Map className="h-5 w-5" />
              Googleマップで見る
            </Button>
          </div>

          <div className="space-y-8 animate-on-scroll delay-200">
            <div className="bg-navy-800/50 backdrop-blur-sm p-6 rounded-xl shadow-glow-sm border border-blue-500/20 transition-all duration-300 hover:shadow-glow">
              <h3 className="text-2xl font-bold mb-4 text-white flex items-center">
                <MapPin className="h-6 w-6 text-orange-500 mr-2" />
                住所
              </h3>
              <p className="text-lg text-blue-100 italic">詳細は準備中です</p>
            </div>

            <div className="bg-navy-800/50 backdrop-blur-sm p-6 rounded-xl shadow-glow-sm border border-blue-500/20 transition-all duration-300 hover:shadow-glow">
              <h3 className="text-2xl font-bold mb-4 text-white flex items-center">
                <Train className="h-6 w-6 text-orange-500 mr-2" />
                アクセス方法
              </h3>
              <p className="text-lg text-blue-100 italic">詳細は準備中です</p>
            </div>

            <div className="bg-navy-800/50 backdrop-blur-sm p-6 rounded-xl shadow-glow-sm border border-blue-500/20 transition-all duration-300 hover:shadow-glow">
              <h3 className="text-2xl font-bold mb-4 text-white flex items-center">
                <Clock className="h-6 w-6 text-orange-500 mr-2" />
                開館時間
              </h3>
              <p className="text-lg text-blue-100 italic">詳細は準備中です</p>
            </div>

            <div className="bg-navy-800/50 backdrop-blur-sm p-6 rounded-xl shadow-glow-sm border border-blue-500/20 transition-all duration-300 hover:shadow-glow">
              <h3 className="text-2xl font-bold mb-4 text-white flex items-center">
                <Info className="h-6 w-6 text-orange-500 mr-2" />
                注意事項
              </h3>
              <p className="text-lg text-blue-100 italic">詳細は準備中です</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
