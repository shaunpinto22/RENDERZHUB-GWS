import React, { useState } from 'react'
import './shop.css'
import Nav from '../home/home_componet/Navbar'
import Upload from '../rhstudio/rhstudio_component/Upload'
import ProfileRadiusPic from '../rhstudio/rhstudio_component/ProfileRadiusPic'
import Cardpopup from './shop_component/Cardpopup'
import ThreeDCanvas from './shop_component/ThreeDCanvas'

const Shop = () => {

  const [cardClick, setCardClick] = useState(false);
  const cardPopup = () => {
    setCardClick(true);
  }

  return (
    <div className='shopPage'>
      <div className='navContainer'>
        <Nav />
      </div>
      <div className='shopContainer'>
        <div className="topNav"><Upload /><ProfileRadiusPic /></div>
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
            <div className="cardInfoMainHead">
              <span className='cardInfoTitle'>Title here..</span>
              <span className='cardInfoDate'>Uploaded date..</span>
            </div>
            <div className='cardInfoMainBody'>
              <div className="cardMainBodyLeft">
                <div className='cardInfoThumbnail'><ThreeDCanvas/></div>
                <div className='cardInfoProfile'>
                  <div className='cardInfoProfilePic'></div>
                  <div className='cardInfoProfileText'>
                    <span>@username</span>
                    <div className='followbtn'>Follow +</div>
                  </div>
                </div>
                <div className="cardInfoCommentsContainer">
                  <span className='cardInfoCommentHead'>Comments</span>
                  <div className='cardInfoComments'>
                    {/* <div className='cardInfoComment'>No Comments</div> */}
                    <div className='cardInfoComment'>
                      <div className='cardInfoProfileComments'></div>
                      <div className='cardInfoProfileCommentsDetails'>
                        <div className='cardInfoProfileDetails'><span className='cardInfoProfileUsername'>@username</span><span className='cardInfoProfileTime'>Time..</span></div>
                        <div className='cardInfoProfileComment'><span>commenting........</span></div>
                      </div>
                    </div>
                    <div className='cardInfoComment'>
                      <div className='cardInfoProfileComments'></div>
                      <div className='cardInfoProfileCommentsDetails'>
                        <div className='cardInfoProfileComment'>
                          <form action="" className='commentForm'>
                            <input type="text" name='comment' placeholder='Enter your comment..'/>
                            <input type="submit" value='Publish'/>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>   
                </div>
              </div>
              <div className="cardMainBodyRight">
                <span className='cardInfoPrice'>$price</span>
                <div className='cardInfoPayments'>
                  <div className='cardInfoPayment'>
                    <div className="icon-svg pay-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M17.44 9.33h-1.1V6.4a4.34 4.34 0 0 0-8.68 0v2.93h-1.1a2.5 2.5 0 0 0-2.5 2.5v7.61a2.507 2.507 0 0 0 2.5 2.5h10.88a2.507 2.507 0 0 0 2.5-2.5v-7.61a2.5 2.5 0 0 0-2.5-2.5M8.66 6.4a3.34 3.34 0 0 1 6.68 0v2.93H8.66Zm10.28 13.04a1.511 1.511 0 0 1-1.5 1.5H6.56a1.511 1.511 0 0 1-1.5-1.5v-7.61a1.5 1.5 0 0 1 1.5-1.5h10.88a1.5 1.5 0 0 1 1.5 1.5Z" /><path fill="currentColor" d="M13 14.95a.984.984 0 0 1-.5.86v1.5a.5.5 0 0 1-1 0v-1.5a.984.984 0 0 1-.5-.86a1 1 0 0 1 2 0" /></svg></div><span>Secure payment</span>
                  </div>
                  <div className='cardInfoPayment'>
                    <div className="icon-svg pay-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor"><rect width="16" height="12" x="4" y="6" rx="2" /><path d="m4 9l7.106 3.553a2 2 0 0 0 1.788 0L20 9" /></g></svg></div><span>Support from sellers</span>
                  </div>
                  <div className='cardInfoPayment'>
                    <div className='icon-svg pay-icon'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path fill="currentColor" d="M18.586 18.414L16 15.834l-2.588 2.582L12 17l4-4l4 4z" /><path fill="currentColor" d="M1.586 17.414C1.196 17.024 1 16.512 1 16s.195-1.024.586-1.414l13-13C14.976 1.196 15.488 1 16 1s1.024.195 1.414.586l13 13c.39.39.586.902.586 1.414s-.195 1.024-.586 1.414l-13 13c-.39.39-.902.586-1.414.586s-1.024-.195-1.414-.586zM16 3L3 16l13 13l13-13z" /></svg></div><span>Access to future versions</span>
                  </div>
                </div>
                <div className="paybtn">
                  {/* <div className="icon-svg">
                    
                  </div> */}
                  <span>Pay</span>
                </div>
                <div className='cardInfoTable'>
                  <table border='1' cellSpacing='0'>
                    <tbody>
                      <tr>
                        <td><span className='cardInfoTableContents'>Created By</span></td>
                        <td><span className='cardInfoTableContents'>@username</span></td>
                      </tr>
                      <tr>
                        <td><span className='cardInfoTableContents'>Style</span></td>
                        <td><span className='cardInfoTableKeywords'>keywords</span></td>
                      </tr>
                      <tr>
                        <td><span className='cardInfoTableContents'>Tags</span></td>
                        <td><span className='cardInfoTableKeywords'>keywords</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className='cardInfoProduct'>
                  <table border='0' cellSpacing='0'>
                    <tbody>
                      <tr>
                        <td><span className='cardInfoProductContent cardInfoProductContentLeft'>Reviews</span></td>
                        <td><span className='cardInfoProductContent cardInfoProductContentRight'>number here..</span></td>
                      </tr>
                      <tr>
                        <td><span className='cardInfoProductContent cardInfoProductContentLeft'>License</span></td>
                        <td><span className='cardInfoProductContent cardInfoProductContentRight'>license here..</span></td>
                      </tr>
                      <tr>
                        <td><span className='cardInfoProductContent cardInfoProductContentLeft'>Rigged geometries</span></td>
                        <td><span className='cardInfoProductContent cardInfoProductContentRight'>Yes or No..</span></td>
                      </tr>
                      <tr>
                        <td><span className='cardInfoProductContent cardInfoProductContentLeft'>Animation</span></td>
                        <td><span className='cardInfoProductContent cardInfoProductContentRight'>Yes or No..</span></td>
                      </tr>
                      <tr>
                        <td><span className='cardInfoProductContent cardInfoProductContentLeft'>Geometry</span></td>
                        <td><span className='cardInfoProductContent cardInfoProductContentRight'>number here..</span></td>
                      </tr>
                      <tr>
                        <td><span className='cardInfoProductContent cardInfoProductContentLeft'>Download size</span></td>
                        <td><span className='cardInfoProductContent cardInfoProductContentRight'>number here..</span></td>
                      </tr>
                      <tr>
                        <td><span className='cardInfoProductContent cardInfoProductContentLeft'>Included formats</span></td>
                        <td><span className='cardInfoProductContent cardInfoProductContentRight'>different formats..</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </Cardpopup>
        </div>
      </div>
    </div>
  )
}

export default Shop
