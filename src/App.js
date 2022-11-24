import React from 'react'
import Header from './Layout/Header/Header'
import "./Scss/Style.scss"  
import {  Route, Routes } from 'react-router-dom'
import AboutUs from './Pages/AboutUs/AboutUs'
import SecondBlock from '../src/Pages/BlockTwo/BlockTwo'
import BrandsPage from './Pages/BrandsPage/BrandsPage'

const App = () => (
  <>

    <Routes>
      <Route path='/' element={<Header/>}/>
      <Route path='BrandsPage' element={<BrandsPage/>}/>
      <Route path='/AboutUs' element={<AboutUs />} />
      <Route path='/SecondBlock' element={<SecondBlock />} />
    </Routes>

    {/* <Header />
    <main>
      <Home />
      <Arrival />
      <Popular />
      <About />
      <AboutUs /> 

    </main>
    <Footer /> */}
  </>
)

export default App