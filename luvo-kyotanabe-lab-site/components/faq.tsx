import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Faq() {
  const faqs = [
    {
      question: "どうやって参加すればいいですか？",
      answer:
        "参加希望の方は、このサイトの問い合わせフォームから連絡いただくか、定期的に開催している説明会・ワークショップにご参加ください。その後、簡単な面談を経て活動に参加いただけます。",
    },
    {
      question: "文系学生でも参加できますか？",
      answer:
        "はい、もちろん参加できます！実際に文系学部からの参加者も多数います。技術的なバックグラウンドは必要ありません。好奇心と学ぶ意欲があれば、どなたでも歓迎します。多様な視点が集まることで、より創造的なプロジェクトが生まれています。",
    },
    {
      question: "活動頻度はどのくらいですか？",
      answer:
        "基本的には週1〜2回の活動を行っています。定例ミーティングは週1回、その他プロジェクトごとに活動日を設けています。自分のペースで参加できるので、授業や他の活動と両立している学生も多いです。",
    },
    {
      question: "プログラミングの経験がなくても大丈夫ですか？",
      answer:
        "はい、経験がなくても問題ありません。初心者向けの勉強会も定期的に開催しており、先輩メンバーがサポートします。また、プログラミング以外にも、企画立案、デザイン、リサーチなど様々な役割があります。",
    },
    {
      question: "どんなスキルが身につきますか？",
      answer:
        "AI技術の基礎知識や実践的な開発スキルはもちろん、チームでのプロジェクト進行、問題解決能力、プレゼンテーションスキルなど、社会に出てからも役立つ総合的な力が身につきます。また、異なる専門分野の学生との協働を通じて、多角的な視点も養えます。",
    },
    {
      question: "他大学の学生でも参加できますか？",
      answer:
        "現在は同志社大学の学生を中心に活動していますが、他大学からの参加も検討しています。興味がある方はぜひお問い合わせください。",
    },
  ]

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy-900">よくある質問</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            The cureについてよくいただく質問をまとめました。
            他にも質問がある方は、お気軽にお問い合わせください。
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium text-navy-900">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
