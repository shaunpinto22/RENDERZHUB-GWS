import React, { useState } from 'react'
import './threedcanavasgetstarted.css'

import { Canvas } from '@react-three/fiber'
import { useGLTF, Stage, PresentationControls } from '@react-three/drei'

const Model = (props) => {
    const { scene } = useGLTF("/RH3D.glb");
    return <primitive object={scene} {...props} />
}

const ThreeDCanavasGetStarted = () => {

    return (
        <div className='ThreeDCanvasContainerGS'>
            <Canvas dpr={[1, 2]} camera={{ fov: 45 }}>
                <color attach="background" args={["#101010"]} />
                <PresentationControls speed={1.5} global zoom={5} polar={[-0.1, Math.PI / 4]}>
                    <Stage environment={"studio"}>
                        <Model scale={0.02} />
                    </Stage>
                </PresentationControls>
            </Canvas>
        </div>
    )
}

export default ThreeDCanavasGetStarted
