import React, { Component } from 'react'
import aboutImg from '../../../Assets/Home/About/aboutImg.png'
export default class About extends Component {
  render() {
    return (
      <div className='About'>
        <div className='container'>
            <div className='About__main'>
                <div className='About__main-info'>
                    <span className='About__main-header'>О</span>
                    <span className='About__main-header-secondSymbol'>НАС</span>
                    <p className='About__main-title'>
                        Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipLorem ipsumLoreLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumipLorem 
                        ipsumLoremLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipLorem ipsumLorem ipsumLorem ipsumLorem 
                    </p>
                </div>
                <div className='About__main-image'>
                    <img src={aboutImg} alt=''/>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
