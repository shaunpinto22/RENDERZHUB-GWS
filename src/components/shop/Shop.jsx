import React, {useState} from 'react'
import './shop.css'
import Nav from '../home/home_componet/Navbar'
import Upload from '../rhstudio/rhstudio_component/Upload'
import ProfileRadiusPic from '../rhstudio/rhstudio_component/ProfileRadiusPic'
import Cardpopup from './shop_component/Cardpopup'

const Shop = () => {

  const [cardClick, setCardClick]=useState(false);
  const cardPopup = () => {
    setCardClick(true);
  }

  return (
    <div className='shopPage'>
      <div className='navContainer'>
        <Nav/>
      </div>
      <div className='shopContainer'>
        <div className="topNav"><Upload/><ProfileRadiusPic/></div>
        <div className='shopCards'>
          <div className='shopCard' onClick={cardPopup}>
            <div className='shopImg'></div>
            <div className="shopInfo">
              <div className='shopInfoMain'>
                <span className='shopInfoTitle'>Title Here..</span>
                <span className='shopInfoDesc'>Description Here..</span>
              </div>
              <div className='shopInfoFooter'>
                <span className='shopInfoUsername'>By:username</span>
                <span className='shopInfoPrice'>$price</span>
              </div>
            </div>
          </div>
          <Cardpopup trigger={cardClick} setTrigger={setCardClick}>
            <h1>Popup test</h1>
          </Cardpopup>
        </div>
      </div>
    </div>
  )
}

export default Shop
