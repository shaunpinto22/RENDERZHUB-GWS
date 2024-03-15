import React from 'react'
import './shop.css'
import Nav from '../home/home_componet/Navbar'
import Upload from '../rhstudio/rhstudio_component/Upload'
import ProfileRadiusPic from '../rhstudio/rhstudio_component/ProfileRadiusPic'

const Shop = () => {
  return (
    <div className='shopPage'>
      <div className='navContainer'>
        <Nav/>
      </div>
      <div className='shopContainer'>
        <div className="topNav"><Upload/><ProfileRadiusPic/></div>
        <div className='shopCards'>
          <div className='shopCard'>
            <div className='shopImg'></div>
            <div className="shopInfo">
              <div className='shopInfoMain'>
                <span>Title Here..</span>
                <span>Description Here..</span>
              </div>
              <div className='shopInfoFooter'>
                <span className='shopInfoUsername'>By:username</span>
                <span className='shopInfoPrice'>$price</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop
