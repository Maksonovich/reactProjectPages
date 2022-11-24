import React from 'react'
import Header from '../../Layout/Header/Header'
import Vintage from './Vintage/Vintage'
import Deha from './Deha/Deha'
import DehaAbout from './DehaAbout/DehaAbout'
import BrandGeorgy from './BrandGeorgy/BrandGeorgy'
import BrandGeorgyLucy from './BrandGeorgyLucy/BrandGeorgyLucy'
import Brand from './Brand/Brand'
import Birkenstock from './Birkenstock/Birkenstock'
import Footer from '../../Layout/Footer/Footer'
import BrandsHeader from '../../Pages/BrandsPage/BrandsHeader/BrandsHeader'

const BrandsPage = () => {
  return (
    <>
        {/* <Header/> */}
        <BrandsHeader/>
            <main>
                <Vintage/>
                <Deha/>
                <DehaAbout/>
                <BrandGeorgy/>
                <BrandGeorgyLucy/>
                <Brand/>
                <Birkenstock/>
            </main>
        <Footer/>
    </>
  )
}

export default BrandsPage