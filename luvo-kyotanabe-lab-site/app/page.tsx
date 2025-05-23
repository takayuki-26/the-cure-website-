import Hero from "@/components/hero"
import Mission from "@/components/mission"
import Activities from "@/components/activities"
import Events from "@/components/events"
import Access from "@/components/access"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import ScrollHelper from "@/components/scroll-helper"
import ScrollAnimations from "@/components/scroll-animations"

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollHelper />
      <ScrollAnimations />
      <Hero />
      <Mission />
      <Activities />
      <Events />
      <Access />
      <ContactForm />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
