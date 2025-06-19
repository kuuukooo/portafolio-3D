import { Suspense, lazy } from 'react'
import Navbar from './components/Navbar'
import Contact from './sections/Contact'
import FeatureCards from './sections/FeatureCards'
import Footer from './sections/Footer'
import TechStack from './sections/TechStack'
import Translate from './components/Translate'
import PersonalInterests from './sections/PersonalInterests'
// Lazy load
const Hero = lazy(() => import('./sections/Hero'))
const ShowcaseSection = lazy(() => import('./sections/ShowcaseSection'))
const ExperienceSection = lazy(() => import('./sections/ExperienceSection'))

const App = () => (
  <>
    <Navbar />

    <Suspense fallback={<div className="h-screen flex items-center justify-center">⏳</div>}>
      <Hero />
    </Suspense>

    <Suspense fallback={null}>
      <ShowcaseSection />
      <FeatureCards />
      <ExperienceSection />
      <TechStack />
      <PersonalInterests />
      <Contact />
      <Footer />
    </Suspense>
    <Translate />
  </>
)

export default App
