import ActivityLog from '@/components/ActivityLog'
import Community from '@/components/Community'
import DownloadBand from '@/components/DownloadBand'
import Events from '@/components/Events'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import News from '@/components/News'
import Rankings from '@/components/Rankings'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="min-w-0 space-y-8">
            <News />
            <ActivityLog />
          </div>
          <aside className="min-w-0 space-y-6 lg:pt-[76px]">
            <Rankings />
            <Events />
          </aside>
        </div>
        <Community />
        <DownloadBand />
      </main>
      <Footer />
    </>
  )
}
