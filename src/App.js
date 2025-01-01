import React from 'react'
import Home from './components/Home'
import Features from './components/Features'
import SatisfiedClient from './components/SatisfiedClient'
import MarketingSection from './components/MarketingSection'
import Competition from './components/Competition'
import TabContent from './components/TabContent'
import ActualResult from './components/ActualResult'
import LearnUs from './components/LearnUs'

const App = () => {
  return (
    <div>
      <Home />
      <Features />
      <SatisfiedClient />
      <MarketingSection />
      <Competition />
      <TabContent />
      <ActualResult />
      <LearnUs/>

    </div>
  )
}

export default App
