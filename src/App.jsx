import { useState,useEffect } from 'react'
import NavBar from './components/NavBar'
import Hero from './pages/Hero'
import About from './pages/About'
import Skills from './pages/Skills'
import Project from './pages/Project'
import Contact from './pages/Contact'
import Loading from './components/Loading'
const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const preloadImages = async () => {
      const images = [
        '/assets/bg-hero.jpg',
        '/assets/about.png',
        '/assets/crypto.png',
        '/assets/memory.png',
        '/assets/task.png',
      ]

      const imagePromises = images.map(src => {
        return new Promise((resolve, reject) => {
          const img = new Image()
          img.src = src
          img.onload = resolve
          img.onerror = resolve
        });
      })
      await Promise.all(imagePromises);
      setLoading(false)
    }
    preloadImages();
  }, [])
  return (
    <>
      {loading && <Loading />}
      <div className={`${loading ? 'opacity-0' : 'opacity-100'} min-w-full overflow-hidden`}>
        <NavBar />
        <Hero />
        <About />
        <Skills />
        <Project />
        <Contact />
      </div>
    </>
  )
}

export default App