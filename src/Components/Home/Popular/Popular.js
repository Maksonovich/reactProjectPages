import React, { Component } from 'react'
import Firstimg from '../../../Assets/Home/Popular/Firstimg.png'
import Secondimg from '../../../Assets/Home/Popular/Secondimg.png'
import Thirdimg from '../../../Assets/Home/Popular/Thirdimg.png'
import Fourthimg from '../../../Assets/Home/Popular/Fourthimg.png'

export default class Popular extends Component {
  render() {
    return (
      <div className='Popular'>
        <div className='container'>
          <div className='Popular__inner'>
              <div className='Popular__inner-header'>
                  <h2 className='Popular__inner-headerTitle'>Популярное</h2>
              </div>
              <div className='Popular__main-mainContent'>
              <div className='Popular__main-content'>
                <div className='Popular__main-images'>
                  <img src={Firstimg} alt=''/>
                  <h2>REplay</h2>
                  <p>Classic shoes</p>
                  <div className='Popular__main-price'>
                    <span className='Popular__main-priceSale'>6100 UAH</span>
                    <span className='Popular__main-ContentPrice'>3800 UAH</span>
                  </div>                  
                </div>
              </div>
              <div className='Popular__main-content'>
                <div className='Popular__main-images'>
                  <img src={Secondimg} alt=''/>
                  <h2>REplay</h2>
                  <p>Classic shoes</p>
                  <div className='Popular__main-price'>
                    <span className='Popular__main-priceSale'>6100 UAH</span>
                    <span className='Popular__main-ContentPrice'>3800 UAH</span>
                  </div>                  
                </div>
              </div>
              <div className='Popular__main-content'>
                <div className='Popular__main-images'>
                  <img src={Thirdimg} alt=''/>
                  <h2>REplay</h2>
                  <p>Classic shoes</p>
                  <div className='Popular__main-price'>
                    <span className='Popular__main-priceSale'>6100 UAH</span>
                    <span className='Popular__main-ContentPrice'>3800 UAH</span>
                  </div>                  
                </div>
              </div>
              <div className='Popular__main-content'>
                <div className='Popular__main-images'>
                  <img src={Fourthimg} alt=''/>
                  <h2>REplay</h2>
                  <p>Classic shoes</p>
                  <div className='Popular__main-price'>
                    <span className='Popular__main-priceSale'>6100 UAH</span>
                    <span className='Popular__main-ContentPrice'>3800 UAH</span>
                  </div>                  
                </div>
              </div>
              </div>
          </div>
        </div>
      </div>
    )
  }
}