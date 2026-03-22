import Navbar from './components/layout/Navbar/Navbar'
import Hero from './components/sections/Hero/Hero'
import About from './components/sections/About/About'
import Portfolio from './components/sections/Portfolio/Portfolio'
import Contact from './components/sections/Contact/Contact'
import SocialFeed from './components/sections/SocialFeed/SocialFeed'
import Footer from './components/layout/Footer/Footer'
import ScrollDrone from './components/ui/ScrollDrone'
import WhatsAppButton from './components/ui/WhatsAppButton'

function App() {
  return (
    <>
      <Navbar />
      <ScrollDrone />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Contact />
        <SocialFeed />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
