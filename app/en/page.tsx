import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '../sections/Hero'
import About from '../sections/About'
import GetStarted from '../sections/GetStarted'
import WhatsNew from '../sections/WhatsNew'
import Tasks from '../sections/Tasks'
import World from '../sections/World'
import Realizations from '../sections/Realizations'
import Feedback from '../sections/Feedback'

export default async function Home() {
  return (
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
      <Hero />
      <div className="relative">
        <GetStarted lang="en" />
        <div className="gradient-03 z-0" />
        <About lang="en" />
      </div>
      <div className="relative">
        <Realizations lang="en" />
        <div className="gradient-04 z-0" />
        <WhatsNew lang="en" />
        <div className="gradient-04 z-0" />
        <Tasks lang="en" />
      </div>
      <World lang="en" />
      <div className="relative">
        <div className="gradient-04 z-0" />
        <Feedback lang="en" />
      </div>
      <Footer lang="en" />
    </div>
  )
}
