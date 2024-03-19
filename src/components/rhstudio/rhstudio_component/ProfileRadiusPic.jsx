import React, {useState} from 'react'
import './profileradiuspic.css'
import DropDownProfile from './DropDownProfile'

const ProfileRadiusPic = () => {
  const [openProfile, setOpenProfile] = useState(false);
  return (
    <>
      <div className='profileradiuspic' onClick={()=> setOpenProfile((prev)=>!prev)}>
      </div>
      {
        openProfile && <DropDownProfile/>
      }
    </>
  )
}

export default ProfileRadiusPic
