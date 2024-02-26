import React from 'react'
import './properties_layers.css'
import Properties from './properties/Properties'
import Layers from './layers/Layers'

const Properties_Layers = ({hsva, setHsva, drawWidth, setDrawWidth}) => {
  return (
    <div className='properties-layers'>
      <div className="properties_panel"><Properties hsva={hsva} setHsva={setHsva} drawWidth={drawWidth} setDrawWidth={setDrawWidth}/></div>
      <div className="layers_panel"><Layers/></div>
    </div>
  )
}

export default Properties_Layers
