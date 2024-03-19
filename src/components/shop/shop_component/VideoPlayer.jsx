import React, { useEffect, useRef, useState } from 'react'
import './videoplayer.css'

import {FaPlay, FaPause, FaStop, FaExpand, FaCompress, FaVolumeUp, FaVolumeMute} from 'react-icons/fa'

const VideoPlayer = ({src,thumbnail}) => {

    const videoRef = useRef(null);
    const intervalRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [progress, setProgress] = useState(0);
    const [volume, setVolume] = useState(1);
    const [isMuted, setIsMuted] = useState(false);
    const [useNativeControls, setUseNativeControls] = useState(window.innerWidth<767,);

    useEffect(() => {
        const handleResize = () => {
            setUseNativeControls(window.innerWidth<767);
        };
        window.addEventListener('resize',handleResize);
        return()=>{
            window.removeEventListener('resize',handleResize);
        };
    }, []);

    const updateProgess = () => {
        if(videoRef.current){
            const value = (videoRef.current.currentTime/videoRef.current.duration)*100;
            setProgress(value);
        }
    };

    const startProgressLoop = () => {
        if(intervalRef.current){
            clearInterval(intervalRef.current);
        }
        intervalRef.current=setInterval(() => {
            updateProgess();
        },1000);
    };

    const stopProgressLoop = () => {
        if(intervalRef.current){
            clearInterval(intervalRef.current);
            intervalRef.current=null;
        }
    };

    const togglePlayPause = () => {
        if(videoRef.current){
            if(videoRef.current.paused){
                videoRef.current.play();
                setIsPlaying(true);
                startProgressLoop();
            }else{
                videoRef.current.pause();
                setIsPlaying(false);
                stopProgressLoop();
            }
        }
    };

    useEffect(() => {
        const video = videoRef.current;
        const handleVideoEnd = () => {
            setIsPlaying(false);
            setProgress(0);
            stopProgressLoop();
        };
        if(video){
            video.addEventListener('ended',handleVideoEnd);
        }
        return () => {
            if(video){
                video.removeEventListener('ended',handleVideoEnd);
            }
            stopProgressLoop();
        }
    }, []);

    const renderCustomControls = () => {
        return(
            <>
                <div className="controlsVideo">
                    <button onClick={togglePlayPause}>
                        {isPlaying?<FaPause/>:<FaPlay/>}
                    </button>
                    <button onClick={stopVideo}>
                        <FaStop/>
                    </button>
                    <input type="range" min='0' max='100' value={progress} onChange={handleSeek}/>
                    <button onClick={toggleMute}>
                        {isMuted?<FaVolumeMute/>:<FaVolumeUp/>}
                    </button>
                    <input type="range" min='0' max='1' value={volume} onChange={handleVolumeChange}/>
                    <button onClick={toggleFullScreen}>
                        {isFullScreen?<FaCompress/>:<FaExpand/>}
                    </button>
                </div>
            </>
        );
    };

    const stopVideo = () => {
        if(videoRef.current){
            videoRef.current.pause();
            videoRef.current.currentTime=0;
            setIsPlaying(false);
        }
    }

    const handleSeek = (event) => {
        const seekTo = (event.target.value/100)*videoRef.current.duration;
        videoRef.current.currentTime = seekTo;
        setProgress(event.target.value);
    }

    const toggleMute = () => {
        const currentVolume = videoRef.current.volume;
        if(currentVolume > 0){
            videoRef.current.volume = 0;
            setVolume(0);
            setIsMuted(true);
        }else{
            videoRef.current.volume = 1;
            setVolume(1);
            setIsMuted(false);
        }
    }

    const handleVolumeChange = (event) => {
        const newVolume = event.target.value;
        videoRef.current.volume = newVolume;
        setVolume(newVolume);
        setIsMuted(newVolume===0);
    }

    const toggleFullScreen = () => {
        if (!isFullScreen) {
            if (videoRef.current.requestFullscreen){ 
                videoRef.current.requestFullscreen();
            }else if(videoRef.current.mozRequestFullscreen){
                videoRef.current.mozRequestFullscreen();
            }else if(videoRef.current.webkitRequestFullscreen){
                videoRef.current.webkitRequestFullscreen();
            }else if(videoRef.current.msRequestFullscreen){
                videoRef.current.msRequestFullscreen();
            }else{
                if (document.exitFullscreen){ 
                    document.exitFullscreen();
                }else if(document.mozCancelFullScreen){
                    document.mozCancelFullscreen();
                }else if(document.webkitExitFullscreen){
                    document.webkitExitFullscreen();
                }else if(document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            };
        }
        setIsFullScreen (!isFullScreen);
    };

    document.addEventListener('fullscreenchange', ()=>{
        setIsFullScreen(!!document.fullscreenElement);
    });

    useEffect(()=>{
        const handleFullScreenChange = () => 
            setIsFullScreen(!!document.fullscreenElement);
        document.addEventListener('fullscreenchange',handleFullScreenChange);
        return()=>{
            document.removeEventListener('fullscreenchange',handleFullScreenChange);
        }
    },[]);

  return (
    <div className='videoplayerContainer'>
        <video
        width='100%'
        height='100%'
        style={{"borderRadius":"23px"}}
        className='video-player'
        ref={videoRef}
        src='/RendersHub_Prototype.mp4'
        // poster={thumbnail}
        onClick={togglePlayPause}
        onPlay={startProgressLoop}
        onPause={stopProgressLoop}
        controls={useNativeControls}
        />
        {!useNativeControls && renderCustomControls()}
    </div>
  )
}

export default VideoPlayer
