import React, { useState } from 'react';
import './toolbar.css'
import Canvas, {penDraw} from '../canvas/Canvas';

const Toolbar = ({selectedTool, setSelectedTool}) => {

  //used this in properties file and layers file also
  //Task to link these functions to properties file instead of copy-paste code
  //Reminder not to copy state...let both files state be independent...it shouldn't be linked

  // const [selectedTool, setSelectedTool] = useState(null);

  const pen = (tool) => {
    if(selectedTool===tool){
      penDraw();
    }
  }

  const handleToolClick = (tool) => {
    setSelectedTool((prevTool) => (prevTool === tool ? null : tool));
  };

  const getToolStyles = (tool) => {
    return selectedTool === tool
      ? {
        background: 'var(--icon-bg-color-hover)',
        color: 'var(--icon-svg-color-hover)',
      }
      : {};
  };

  //experiment to add shape icons
  const shapeTools = (tool) => {
    return (
      <>
        <div className="icon rect_tool" onClick={() => handleToolClick('rect')}
          style={getToolStyles('rect')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M2 20V4h20v16zm2-2h16V6H4zm0 0V6z" /></svg>
        </div>
        <div className="icon circle_tool" onClick={() => handleToolClick('circle')}
          style={getToolStyles('circle')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20m0-8" /></svg>
        </div>
        <div className="icon line_tool" onClick={() => handleToolClick('line')}
          style={getToolStyles('line')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" fillRule="evenodd" d="M.808.808a1 1 0 0 1 1.414 0l16.97 16.97a1 1 0 0 1-1.414 1.414L.808 2.222a1 1 0 0 1 0-1.414" clipRule="evenodd" /></svg>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="toolbarEdit">
        <div className='tools'>
          <div className="icon move_tool" onClick={() => handleToolClick('move')}
            style={getToolStyles('move')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="4" d="m8 6l35 19l-19 2l-10.005 17z" /></svg>
          </div>
          <div className="icon brush_tool" onClick={() => {handleToolClick('brush'); pen('brush');}}
            style={getToolStyles('brush')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32"><path fill="currentColor" d="M24.813 4.03c-.837 0-1.68.337-2.313.97L9.812 17.5l-.624.594c-.75.14-1.467.51-2.032 1.125c-.833.908-.995 2.02-1.312 3.218c-.318 1.196-.72 2.526-1.688 4l-1 1.562H5c3.915 0 6.495-1.87 7.813-3.188l.03-.03c.603-.617.94-1.395 1.063-2.188l.5-.47l12.688-12.5v-.03a3.253 3.253 0 0 0 0-4.594c-.634-.633-1.445-.97-2.282-.97zm0 1.97c.313 0 .608.14.875.406c.533.534.533 1.248 0 1.782l-9.032 8.937l-1.812-1.813l9.062-8.906c.267-.266.593-.406.907-.406M13.405 16.72l1.813 1.81l-1.5 1.47l-1.814-1.813l1.5-1.468zM9.97 20.03a2.31 2.31 0 0 1 1.467.595c.778.712.796 1.954-.03 2.78c-.87.87-2.408 1.986-4.657 2.407c.48-1.05.815-2.03 1.03-2.843c.334-1.255.578-2.116.845-2.407c.347-.38.838-.546 1.344-.532z" /></svg>
          </div>
          <div className="icon shape_tool" onClick={() => { handleToolClick('shape'); shapeTools('shape'); pen('shape');}}
            style={getToolStyles('shape')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M11 13.5v8H3v-8zm-2 2H5v4h4zM12 2l5.5 9h-11zm0 3.86L10.08 9h3.84zM17.5 13c2.5 0 4.5 2 4.5 4.5S20 22 17.5 22S13 20 13 17.5s2-4.5 4.5-4.5m0 2a2.5 2.5 0 0 0-2.5 2.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5" /></svg>
          </div>
          <div className="icon bezier_tool" onClick={() => handleToolClick('bezier')}
            style={getToolStyles('bezier')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"><path fill="currentColor" d="M221.07 144.41A96.68 96.68 0 0 0 181 88h59a8 8 0 0 0 0-16h-81a32 32 0 0 0-62 0H16a8 8 0 0 0 0 16h59a96.68 96.68 0 0 0-40.07 56.41A32 32 0 1 0 51.08 146A80.6 80.6 0 0 1 99 93.44a32 32 0 0 0 58.06 0A80.6 80.6 0 0 1 204.92 146a32 32 0 1 0 16.15-1.57ZM56 176a16 16 0 1 1-16-16a16 16 0 0 1 16 16m72-80a16 16 0 1 1 16-16a16 16 0 0 1-16 16m88 96a16 16 0 1 1 16-16a16 16 0 0 1-16 16" /></svg>
          </div>
          <div className="icon pencil_tool" onClick={() => handleToolClick('pencil')}
            style={getToolStyles('pencil')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m16.862 4.487l1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8l.8-2.685a4.5 4.5 0 0 1 1.13-1.897zm0 0L19.5 7.125" /></svg>
          </div>
          <div className="icon magnifier_tool" onClick={() => handleToolClick('magnifier')}
            style={getToolStyles('magnifier')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1024 1024"><path fill="currentColor" d="M1014.64 969.04L703.71 656.207c57.952-69.408 92.88-158.704 92.88-256.208c0-220.912-179.088-400-400-400s-400 179.088-400 400s179.088 400 400 400c100.368 0 192.048-37.056 262.288-98.144l310.496 312.448c12.496 12.497 32.769 12.497 45.265 0c12.48-12.496 12.48-32.752 0-45.263zM396.59 736.527c-185.856 0-336.528-150.672-336.528-336.528S210.734 63.471 396.59 63.471c185.856 0 336.528 150.672 336.528 336.528S582.446 736.527 396.59 736.527" /></svg>
          </div>
          <div className="icon erazer_tool" onClick={() => handleToolClick('erazer')}
            style={getToolStyles('erazer')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="-1.5 -2.5 24 24"><path fill="currentColor" d="M12.728 12.728L8.485 8.485l-5.657 5.657l2.122 2.121a3 3 0 0 0 4.242 0zM11.284 17H14a1 1 0 0 1 0 2H3a1 1 0 0 1-.133-1.991l-1.453-1.453a2 2 0 0 1 0-2.828L12.728 1.414a2 2 0 0 1 2.828 0L19.8 5.657a2 2 0 0 1 0 2.828z" /></svg>
          </div>
          <div className="icon bucket_tool" onClick={() => handleToolClick('bucket')}
            style={getToolStyles('bucket')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="currentColor"><path fillRule="evenodd" d="M8.203 2.004c1.261 0 2.304 1.103 2.476 2.538l8.483 8.484l-7.778 7.778a3 3 0 0 1-4.243 0L2.9 16.562a3 3 0 0 1 0-4.243l2.804-2.805V4.961c0-1.633 1.12-2.957 2.5-2.957m.5 2.957v1.553l-1 1V4.961c0-.327.224-.591.5-.591c.277 0 .5.264.5.591m0 5.914V9.342l-4.39 4.391a1 1 0 0 0 0 1.414l4.243 4.243a1 1 0 0 0 1.414 0l6.364-6.364l-5.63-5.63v3.48l-.003.128h-2.01a.698.698 0 0 0 .012-.129" clipRule="evenodd" /><path d="M16.859 16.875a3 3 0 1 0 4.242 0l-2.121-2.121z" /></g></svg>
          </div>
          <div className="icon text_tool" onClick={() => handleToolClick('text')}
            style={getToolStyles('text')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 12 12"><path fill="currentColor" d="M2 2.75A.75.75 0 0 1 2.75 2h6a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V3.5H6.5v5h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5H5v-5H3.5v.75a.75.75 0 0 1-1.5 0z" /></svg>
          </div>
        </div>
        <div className='defaultColorPicker'>
          <div className="switch_tool">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12V9a3 3 0 0 1 3-3h13m-3-3l3 3l-3 3m3 3v3a3 3 0 0 1-3 3H4m3 3l-3-3l3-3" /></svg>
          </div>
          <div className="rectTwoColor"></div>
          <div className="rectOneColor"></div>
        </div>
      </div>
    </>
  )
}

export default Toolbar
