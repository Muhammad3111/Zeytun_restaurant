import React, { useRef, useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'
import './Intro.css';
import { meal } from '../../constants';

const Intro = () => {
  const [playVideo, setPalyVidoe] = useState(false)
  const vidRef = useRef()

  const handleVidoe = () => {
    setPalyVidoe((prevPlayVidoe) => !prevPlayVidoe)

    if (playVideo) {
      vidRef.current.pause()
    } else {
      vidRef.current.play()
    }
  }

  return (
    <div className='app__video'>
      <video
        src={meal}
        ref={vidRef}
        type="video/mp4"
        controls={false}
        loop
        muted
      />
      <div className="app__video-overlay flex__center">
        <div className="app__video-overlay_circle flex__center" onClick={handleVidoe}>
          {playVideo ? <BsPauseFill color='#fff' fontSize={30} /> : <BsFillPlayFill color='#fff' fontSize={30} />}
        </div>
      </div>
    </div>
  )
};

export default Intro;
