import React, {useState} from 'react'
import './threedCanvas.css'

import { Canvas } from '@react-three/fiber'
import { useGLTF, Stage, PresentationControls } from '@react-three/drei'

const Model = (props) => {
  const {scene} = useGLTF("/bmw.glb");
  return <primitive object={scene} {...props} />
}

const ThreeDCanvas = () => {
  return (
    <div className='ThreeDCanvasContainer'>
      <Canvas dpr={[1,2]} camera={{fov:45}} style={{"border-radius": "23px", "position": "absolute", "height": "258px", "width": "459px", "touchAction":"none"}}>
        <color attach="background" args={["#101010"]}/>
        <PresentationControls speed={1.5} global zoom={5} polar={[-0.1, Math.PI/4]}>
          <Stage environment={"studio"}>
            <Model scale={0.02}/>
          </Stage>
        </PresentationControls>
      </Canvas>
    </div>
  )
}

export default ThreeDCanvas
