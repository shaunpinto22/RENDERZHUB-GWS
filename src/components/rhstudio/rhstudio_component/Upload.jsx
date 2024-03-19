import React,{useState} from 'react'
import './upload.css'
import Cardpopup from '../../shop/shop_component/Cardpopup';

const Upload = () => {

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

    const [cardClick, setCardClick] = useState(false);
    const cardPopup = () => {
        setCardClick(true);
  }

    return (
        <>
            <div className="upload" onClick={cardPopup}>
                <div className="icon-svg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="currentColor" d="M2.75 14A1.75 1.75 0 0 1 1 12.25v-2.5a.75.75 0 0 1 1.5 0v2.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25v-2.5a.75.75 0 0 1 1.5 0v2.5A1.75 1.75 0 0 1 13.25 14Z" /><path fill="currentColor" d="M11.78 4.72a.749.749 0 1 1-1.06 1.06L8.75 3.811V9.5a.75.75 0 0 1-1.5 0V3.811L5.28 5.78a.749.749 0 1 1-1.06-1.06l3.25-3.25a.749.749 0 0 1 1.06 0z" /></svg>
                </div>
                <span>Upload</span>
            </div>
            <Cardpopup trigger={cardClick} setTrigger={setCardClick} setSelectedTool={setSelectedTool}>
                <div><h2>Uploads</h2></div>
                <div className='uploadOptions'>
                    <div className='uploadOptionIcons' onClick={() => handleToolClick('3d')} style={getToolStyles('3d')}><div className='icon-svg'><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M10.55 2.876L4.595 6.182a2.978 2.978 0 0 0-1.529 2.611v6.414a2.978 2.978 0 0 0 1.529 2.61l5.957 3.307a2.978 2.978 0 0 0 2.898 0l5.957-3.306a2.978 2.978 0 0 0 1.529-2.611V8.793a2.978 2.978 0 0 0-1.529-2.61L13.45 2.876a2.978 2.978 0 0 0-2.898 0Z"></path><path d="M20.33 6.996L12 12L3.67 6.996M12 21.49V12"></path></g></svg></div><span>3D Models</span></div>
                    <div className='uploadOptionIcons' onClick={() => handleToolClick('image')} style={getToolStyles('image')}><div className='icon-svg'><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 256 256"><path fill="currentColor" d="M216 42H72a14 14 0 0 0-14 14v18H40a14 14 0 0 0-14 14v112a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14v-18h18a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14M70 56a2 2 0 0 1 2-2h144a2 2 0 0 1 2 2v67.57l-13.47-13.47a14 14 0 0 0-19.8 0l-21.42 21.41L117.9 86.1a14 14 0 0 0-19.8 0L70 114.2Zm116 144a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2V88a2 2 0 0 1 2-2h18v82a14 14 0 0 0 14 14h114Zm30-30H72a2 2 0 0 1-2-2v-36.83l36.58-36.58a2 2 0 0 1 2.83 0l49.66 49.66a6 6 0 0 0 8.49 0l25.65-25.66a2 2 0 0 1 2.83 0l22 22V168a2 2 0 0 1-2.04 2m-54-86a10 10 0 1 1 10 10a10 10 0 0 1-10-10"></path></svg></div><span>Images</span></div>
                    <div className='uploadOptionIcons' onClick={() => handleToolClick('video')} style={getToolStyles('video')}><div className='icon-svg'><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 256 256"><path fill="currentColor" d="m163.33 107l-48-32a6 6 0 0 0-9.33 5v64a6 6 0 0 0 9.33 5l48-32a6 6 0 0 0 0-10M118 132.79V91.21L149.18 112ZM216 42H40a14 14 0 0 0-14 14v112a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14m2 126a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2V56a2 2 0 0 1 2-2h176a2 2 0 0 1 2 2Zm12 40a6 6 0 0 1-6 6H32a6 6 0 0 1 0-12h192a6 6 0 0 1 6 6"></path></svg></div><span>Videos</span></div>
                    <div className='uploadOptionIcons' onClick={() => handleToolClick('audio')} style={getToolStyles('audio')}><div className='icon-svg'><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M10.75 18.692q.815 0 1.379-.563q.563-.564.563-1.379v-3.98h2.731v-1.54h-3.5v4.087q-.236-.257-.53-.383q-.293-.126-.643-.126q-.815 0-1.379.563q-.563.564-.563 1.379t.563 1.379q.564.563 1.379.563M6.615 21q-.69 0-1.152-.462Q5 20.075 5 19.385V4.615q0-.69.463-1.152Q5.925 3 6.615 3H14.5L19 7.5v11.885q0 .69-.462 1.152q-.463.463-1.153.463zM14 8V4H6.615q-.23 0-.423.192Q6 4.385 6 4.615v14.77q0 .23.192.423q.193.192.423.192h10.77q.23 0 .423-.192q.192-.193.192-.423V8zM6 4v4zv16z"></path></svg></div><span>Audio</span></div>
                    <div className='uploadOptionIcons' onClick={() => handleToolClick('job')} style={getToolStyles('job')}><div className='icon-svg'><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M10.021 1.021h6v2h-6zM20.04 7.41l1.434-1.434l-1.414-1.414l-1.433 1.433A8.989 8.989 0 0 0 7.53 5.881l1.42 1.44a7.038 7.038 0 0 1 4.06-1.3l.01.001v6.98l4.953 4.958A7.001 7.001 0 0 1 6.01 13.021h3l-4-4l-4 4h3A9 9 0 1 0 20.04 7.41"></path></svg></div><span>Job Postings</span></div>
                </div>
            </Cardpopup>
        </>
    )
}

export default Upload
