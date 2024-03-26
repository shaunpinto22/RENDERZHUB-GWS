import React, {useState} from 'react'
import './job.css'
import Nav from '../home/home_componet/Navbar'
import Upload from '../rhstudio/rhstudio_component/Upload'
import ProfileRadiusPic from '../rhstudio/rhstudio_component/ProfileRadiusPic'

const Job = () => {
    const [selectedTool, setSelectedTool] = useState('job');
  return (
    <div className='jobContainer'>
      <Nav selectedTool={selectedTool} setSelectedTool={setSelectedTool}/>
      <div className="jobSection">
          <div className="topNav"><Upload /><ProfileRadiusPic /></div>
          <div className="jobCards">
            
          </div>
      </div>
    </div>
  )
}

export default Job
