import React from 'react'
import './customization.css'

const Customization = () => {
  return (
    <div className='customizationContainer'>
      <form action="" method="post">
          <div>
            <div className="formElementContainer left"><label htmlFor="proPic">Profile Picture</label></div>
            <div className="formElementContainer right"><input type="file" name="proPic"/></div>
          </div>
          <div>
            <div className="formElementContainer left"><label htmlFor="banPic">Banner Picture</label></div>
            <div className="formElementContainer right"><input type="file" name="banPic"/></div>
          </div>
          <div>
            <div className="formElementContainer left"><label htmlFor="fname">Full Name</label></div>
            <div className="formElementContainer right"><input type="text" name="fname"/></div>
          </div>
          <div>
            <div className="formElementContainer left"><label htmlFor="uname">Username</label></div>
            <div className="formElementContainer right"><input type="text" name="uname"/></div>
          </div>
          <div>
            <div className="formElementContainer left"><label htmlFor="speciality">Speciality</label></div>
            <div className="formElementContainer right"><input type="text" name="speciality"/></div>
          </div>
          <div>
            <div className="formElementContainer left"><label htmlFor="artStation">ArtStation</label></div>
            <div className="formElementContainer right"><input type="text" name="artStation"/></div>
          </div>
          <div>
            <div className="formElementContainer left"><label htmlFor="insta">Instagram</label></div>
            <div className="formElementContainer right"><input type="text" name="insta"/></div>
          </div>
          <div>
            <div className="formElementContainer left"><label htmlFor="linkedin">LinkedIn</label></div>
            <div className="formElementContainer right"><input type="text" name="linkedin"/></div>
          </div>
          <div>
            <div className="formElementContainer center"><input type="submit" value="Save"/></div>
          </div>
        </form>
    </div>
  )
}

export default Customization
