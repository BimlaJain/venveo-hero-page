import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import SatisfiedClient from './components/SatisfiedClient'
import MarketingSection from './components/MarketingSection'
import Competition from './components/Competition'
import TabContent from './components/TabContent'
import ActualResult from './components/ActualResult'
import LearnUs from './components/LearnUs'
import ReadMore from './components/ReadMore'
import Ready from './components/Ready'
import Footer from './components/Footer'
import BackToTop from './common/BackToTop'

const App = () => {
  return (
    <div>
      <Hero />
      <Features />
      <SatisfiedClient />
      <MarketingSection />
      <Competition />
      <TabContent />
      <ActualResult />
      <LearnUs />
      <ReadMore />
      <Ready />
      <Footer />
      <BackToTop/>

    </div>
  )
}

export default App
