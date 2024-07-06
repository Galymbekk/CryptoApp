import React from 'react'
import ethereumLogo from '../img/Ethereum.svg';
import bitcoinLogo from '../img/Bitcoin.svg';
import litecoinLogo from '../img/Litecoin.svg';
import googlePlay from '../img/google-play.svg';
import appStore from '../img/app-store.svg';

export default function CryptoLanding() {
  return (
    <div className='crypto'>
      <div className='back-logos'>
        <div className='logoLiteCoin'>
            <img src={litecoinLogo} alt="litecoin"/>
        </div>
        <div className='background-icons'>
          <img src={bitcoinLogo} alt="bitcoin"/>
          <img src={ethereumLogo} alt="ethereum"/>
        </div>
      </div>
      <main className='main'>
        <div className='content'>
            <h1>
              Do you want to Learn more About cryptocurrencies 
              <span className='txt-gradient'> quickly and easily ?</span>
            </h1>
            <h4>
              Subscribe to our channel to learn more
            </h4>
            <div className='advantages'>
              <div className='advantage-item'>
                  <h2>20k+</h2>
                  <h4>subscribers</h4>
              </div>
              <div className='advantage-item'>
                  <h2>19,5K</h2>
                  <h4>successful cases</h4>
              </div>
              <div className='advantage-item'>
                  <h2>4.8/5</h2>
                  <h4>rating</h4>
              </div>
            </div>
            <a href='#' className='btn-join'>Join Whatsapp</a>
            <div className='getApp-links'>
                <div className='getApp-item'>
                    <div className='getApp-img'>
                        <img src={googlePlay} alt='googlePlay-logo'/>
                    </div>
                    <div className='getApp-content'>
                        <h4>
                          get it on
                        </h4>
                        <h4>Google Play</h4>
                    </div>
                </div>
                <div className='getApp-item'>
                    <div className='getApp-img'>
                        <img src={appStore} alt='appStore-logo'/>
                    </div>
                    <div className='getApp-content'>
                        <h4>
                          Available on the
                        </h4>
                        <h4>App Store</h4>
                    </div>
                </div>
            </div>
        </div>
        <div className='feedbacks'>

        </div>
      </main>
    </div>
  )
}
