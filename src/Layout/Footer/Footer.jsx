import React, { useState , matchPath} from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { AboutUs } from '../../Pages/AboutUs/AboutUs' 


const Footer = () => {
  return (
    <div className='Footer'>
    <div className='container'>
        <div className='Footer__inner'>
            <div className='Footer__inner-contacts'>
                <h2 className='Footer__inner-contacts-header'>Будьте в курсе событий</h2>
                <input type="text" className='Footer__inner-contacts-search'>
                </input>
                <div className='Footer__inner-links'>
                    <li className='Footer__links'>О нас</li>
                    <li className='Footer__links'><Link to='/AboutUs'></Link>Распространенные вопросы</li>
                    <li className='Footer__links'><a href=''></a>Бренды</li>
                </div>
            </div>
        </div>
    </div>
  </div>
  )
}

export default Footer