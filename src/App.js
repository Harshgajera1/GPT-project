import React from 'react'
// import Article from './components/Articals/Article'
// import Brand from './components/brand/Brand'
// import CTA from './components/cta/CTA'
// import Feature from './components/feature/Feature'
// import Navbar from './components/navbar/Navbar'

import {Article, Brand, CTA, Feature, Navbar} from './components'
import {Blog, Features, Footer, Header, Posibility, WhatGPT3} from './containers'
import './app.css'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Posibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App