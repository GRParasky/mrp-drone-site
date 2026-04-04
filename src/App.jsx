import { lazy, Suspense } from 'react'
import Navbar from './components/layout/Navbar/Navbar'
import Hero from './components/sections/Hero/Hero'
import About from './components/sections/About/About'
import Footer from './components/layout/Footer/Footer'
import ScrollDrone from './components/ui/ScrollDrone'
import WhatsAppButton from './components/ui/WhatsAppButton'

const Portfolio = lazy(() => import('./components/sections/Portfolio/Portfolio'))
const Contact = lazy(() => import('./components/sections/Contact/Contact'))
const SocialFeed = lazy(() => import('./components/sections/SocialFeed/SocialFeed'))

function App() {
  return (
    <>
      <Navbar />
      <ScrollDrone />
      <main>
        <Hero />
        <About />
        <Suspense>
          <Portfolio />
          <Contact />
          <SocialFeed />
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
