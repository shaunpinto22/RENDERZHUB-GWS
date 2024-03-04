import React from 'react'
import './customization.css'

const Customization = () => {
  return (
    <div>
      <form action="" method="post">
          <div>
            <label htmlFor="proPic">Profile Picture</label>
            <input type="file" name="proPic"/>
          </div>
          <div>
            <label htmlFor="banPic">Banner Picture</label>
            <input type="file" name="banPic"/>
          </div>
          <div>
            <label htmlFor="fname">Full Name</label>
            <input type="text" name="fname"/>
          </div>
          <div>
            <label htmlFor="uname">Username</label>
            <input type="text" name="uname"/>
          </div>
          <div>
            <label htmlFor="speciality">Speciality</label>
            <input type="text" name="speciality"/>
          </div>
          <div>
            <label htmlFor="artStation">ArtStation</label>
            <input type="text" name="artStation"/>
          </div>
          <div>
            <label htmlFor="insta">Instagram</label>
            <input type="text" name="insta"/>
          </div>
          <div>
            <label htmlFor="linkedin">LinkedIn</label>
            <input type="text" name="linkedin"/>
          </div>
          <div>
            <input type="submit" value="Save"/>
          </div>
        </form>
    </div>
  )
}

export default Customization
