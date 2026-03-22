import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import SocialFeed from './components/SocialFeed'
import Footer from './components/Footer'
import ScrollDrone from './components/ScrollDrone'
import WhatsAppButton from './components/WhatsAppButton'

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
