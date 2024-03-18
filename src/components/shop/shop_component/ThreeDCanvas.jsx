import React, {useState} from 'react'
import './threedCanvas.css'

import { Canvas } from '@react-three/fiber'
import { useGLTF, Stage, PresentationControls } from '@react-three/drei'


const Model = (props) => {
  const {scene} = useGLTF("/bmw.glb");
  return <primitive object={scene} {...props} />
}

const ThreeDCanvas = () => {
  const [selectedTool, setSelectedTool] = useState(null);
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
  const getToolStyles1 = (tool) => {
    return selectedTool === tool
      ? {
        height: '500px',
        width: '500px',
      }
      : {};
  };

  // style={getToolStyles1('fullScreen')}
  // style={{"border-radius": "23px", "position": "absolute", "height": "258px", "width": "459px", "touchAction":"none"}}

  return (
    <div className='ThreeDCanvasContainer' style={getToolStyles1('fullScreen')}>
      <Canvas dpr={[1,2]} camera={{fov:45}} style={ (selectedTool==='fullScreen')?{"borderRadius": "23px", "position": "absolute", "height": "500px", "width": "500px", "touchAction":"none", "transition":"var(--transition)"}:{"borderRadius": "23px", "position": "absolute", "height": "258px", "width": "459px", "touchAction":"none","transition":"var(--transition)"}}>
        <color attach="background" args={["#101010"]}/>
        <PresentationControls speed={1.5} global zoom={5} polar={[-0.1, Math.PI/4]}>
          <Stage environment={"studio"}>
            <Model scale={0.02}/>
          </Stage>
        </PresentationControls>
      </Canvas>
      <div className='icon-svg fullScreen' onClick={() => handleToolClick('fullScreen')} style={getToolStyles('fullScreen')}><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M21.29 4.12L16.7 8.71l1.59 1.59c.63.63.18 1.71-.71 1.71H13c-.55 0-1-.45-1-1v-4.6c0-.89 1.08-1.34 1.71-.71l1.59 1.59l4.59-4.59a.996.996 0 0 1 1.41 0c.38.4.38 1.03-.01 1.42M4.12 21.29l4.59-4.59l1.59 1.59c.63.63 1.71.18 1.71-.71V13c0-.55-.45-1-1-1h-4.6c-.89 0-1.34 1.08-.71 1.71l1.59 1.59l-4.59 4.59a.996.996 0 0 0 0 1.41c.4.38 1.03.38 1.42-.01"></path></svg></div>
    </div>
  )
}

export default ThreeDCanvas
