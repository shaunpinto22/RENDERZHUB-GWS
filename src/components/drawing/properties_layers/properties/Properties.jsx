import React, { useState } from 'react';
import './properties.css'
import Colorpicker from './properties_components/Colorpicker'
import Range from './properties_components/Range';


const Properties = ({hsva, setHsva, drawWidth, setDrawWidth}) => {

  const [showOptions, setShowOptions] = useState(true);

   // copied from toolbar later try to replace with link if possible
   const [selectedTool, setSelectedTool] = useState('color');

   const handleToolClick = (tool) => {
     setSelectedTool((prevTool) => (prevTool === tool ? null : tool));
   };

   const handleClick = (tool) => {
    if(selectedTool==='color')
      setShowOptions(showOptions);
    else if(selectedTool==='properties')
      setShowOptions(showOptions);
    else if(selectedTool==='palettes')
      setShowOptions(showOptions);
    else
      setShowOptions(showOptions);
  };
 
   const getToolStyles = (tool) => {
     return selectedTool === tool
       ? {
         background: 'var(--icon-bg-color-hover)',
         color: 'var(--icon-svg-color-hover)',
       }
       : {};
   };

   function handleChange(e){
    setDrawWidth(e.target.value);
   }
 

  return (
    <div className='properties'>
      <div className="propertiesBtns">
        <div className="btn propertiesBtn" onClick={() => {handleToolClick('color'); handleClick('color');}}
            style={getToolStyles('color')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path fill="currentColor" d="M256 185a167.85 167.85 0 0 1 134.9-18.28C382.36 99.83 325.12 48 256 48S129.64 99.83 121.1 166.67A167.85 167.85 0 0 1 256 185m80 146.73a167.51 167.51 0 0 1-52.37 118.08A135 135 0 0 0 344 464c75 0 136-61 136-136a136 136 0 0 0-59.06-112.08A168.53 168.53 0 0 1 336 331.73m-52.42-125.54a167.87 167.87 0 0 1 49.36 89.89a136.14 136.14 0 0 0 58.06-95.7a135.87 135.87 0 0 0-107.43 5.81ZM176.05 331.73a168.53 168.53 0 0 1-85-115.81A136 136 0 0 0 32 328c0 75 61 136 136 136a135 135 0 0 0 60.42-14.19a167.51 167.51 0 0 1-52.37-118.08m3.01-35.65a167.87 167.87 0 0 1 49.36-89.89A135.87 135.87 0 0 0 121 200.38a136.14 136.14 0 0 0 58.06 95.7m123.84 49.25a168.22 168.22 0 0 1-93.8 0A135.9 135.9 0 0 0 256 431.6a135.9 135.9 0 0 0 46.9-86.27M209 311.62a136 136 0 0 0 94 0a135.93 135.93 0 0 0-47-87.22a135.93 135.93 0 0 0-47 87.22" /></svg>
          <span>Colors</span>
        </div>
        <div className="btn propertiesBtn" onClick={() => {handleToolClick('properties'); handleClick('properties');}}
            style={getToolStyles('properties')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" /><path fill="currentColor" d="M16 15c1.306 0 2.418.835 2.83 2H20a1 1 0 1 1 0 2h-1.17a3.001 3.001 0 0 1-5.66 0H4a1 1 0 1 1 0-2h9.17A3.001 3.001 0 0 1 16 15m0 2a1 1 0 1 0 0 2a1 1 0 0 0 0-2M8 9a3 3 0 0 1 2.762 1.828l.067.172H20a1 1 0 0 1 .117 1.993L20 13h-9.17a3.001 3.001 0 0 1-5.592.172L5.17 13H4a1 1 0 0 1-.117-1.993L4 11h1.17A3.001 3.001 0 0 1 8 9m0 2a1 1 0 1 0 0 2a1 1 0 0 0 0-2m8-8c1.306 0 2.418.835 2.83 2H20a1 1 0 1 1 0 2h-1.17a3.001 3.001 0 0 1-5.66 0H4a1 1 0 0 1 0-2h9.17A3.001 3.001 0 0 1 16 3m0 2a1 1 0 1 0 0 2a1 1 0 0 0 0-2" /></g></svg>
          <span>Properties</span>
        </div>
        <div className="btn propertiesBtn" onClick={() => {handleToolClick('palettes'); handleClick('palettes');}}
            style={getToolStyles('palettes')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M5.75 3h8.5A2.75 2.75 0 0 1 17 5.75v8.5A2.75 2.75 0 0 1 14.25 17h-8.5A2.75 2.75 0 0 1 3 14.25v-8.5A2.75 2.75 0 0 1 5.75 3M4.5 5.75V7h11V5.75c0-.69-.56-1.25-1.25-1.25h-8.5c-.69 0-1.25.56-1.25 1.25M14.707 8l-4 4h2.586L15.5 9.793V8zm-1.414 0h-2.586l-4 4h2.586zm-8 4l4-4H6.707L4.5 10.207V12zM4.5 8.793L5.293 8H4.5zM14.707 12h.793v-.793z" /></svg>
          <span>Palettes</span>
        </div>
      </div>
      <div className="propertiesControls">
      {showOptions && selectedTool==='color' && (
        <Colorpicker hsva={hsva} setHsva={setHsva}/>
      )}
      {showOptions && selectedTool==='properties' && (
        <>
        <div className='pro_container'>
          <div className='pro_container_label'>
            <span>Stroke Width</span>
          </div>
          <div className='pro_container_settings'>
            <Range drawWidth={drawWidth} setDrawWidth={setDrawWidth}/>
            <form>
              <input type="number" value={drawWidth} onChange={handleChange}/>
            </form>
          </div>
        </div>
        </>
      )}
      {showOptions && selectedTool==='palettes' && (
        <h1>Palettes</h1>
      )}
      {showOptions && selectedTool===null && (
        <h1>None Selected</h1>
      )}
      </div>
    </div>
  )
}

export default Properties
