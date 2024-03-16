import React from 'react'
import './cardpopup.css'

const Cardpopup = (props) => {
  return (props.trigger) ? (
    <div className='cardpopup'>
      <div className='cardpopup-inner'>
        <div className="icon-svg close-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 6L6 18M6 6l12 12"/></svg>
        </div>
        {props.children}
      </div>
    </div>
  ) : "";
}

export default Cardpopup
