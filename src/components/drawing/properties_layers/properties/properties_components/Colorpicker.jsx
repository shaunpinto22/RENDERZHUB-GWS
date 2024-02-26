import React from 'react'
import './colorpicker.css'

import { useState, Fragment } from 'react';
import Wheel from '@uiw/react-color-wheel';
import { hsvaToHex } from '@uiw/color-convert';


const Colorpicker = ({hsva, setHsva}) => {
    // const [hsva, setHsva] = useState({ h: 258, s: 53.9, v: 90.2, a: 1 });
    return (
        <Fragment>
            <Wheel color={hsva} onChange={(color) => setHsva({ ...hsva, ...color.hsva })} />
            <div style={{ width: '50%', height: 34, marginTop: 20, background: hsvaToHex(hsva) }}></div>
            <div className='hex_code_window'>
                <div className="hex_code_title">HEX</div>
                <div className="hex_code">{hsvaToHex(hsva)}</div>
            </div>
        </Fragment>
    )
}

export default Colorpicker
