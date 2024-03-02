import React from 'react'
import './profile.css'
import Nav from '../home/home_componet/Navbar'

const Profile = () => {
  return (
    <div className='profilePageContainer'>
        <div>
          <Nav/>
        </div>
        <div className='profileContainer'>
            <div className="bannerPicContainer">
                <div className='profilePicContainer'></div>
            </div>
            <div className="profileTexts">
              <span className='username'>Gransil Dsouza</span>
            </div>
        </div>
    </div>
  )
}

export default Profile
