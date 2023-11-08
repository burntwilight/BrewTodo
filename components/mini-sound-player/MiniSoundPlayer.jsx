'use client'

import useSound from 'use-sound'
import { PiPlayLight, PiPauseLight } from 'react-icons/pi'
import { useState, useEffect } from 'react'
import Slider from './Slider'

const MiniSoundPlayer = () => {
  const audioUrl = '/audio/lofiforwebsite.mp3';
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(.5)

  const [play, { pause, sound }] = useSound(audioUrl, { 
      volume: volume,
      onplay: () => setIsPlaying(true),
      onend: () => setIsPlaying(false),
      onpause: () => setIsPlaying(false),
      format: ['mp3']
    }
  );

  const handlePlayPause = () => {
    if (!isPlaying) {
      play()
    } else {
      pause()
    }
  };

  useEffect(() => {
    if (sound) {
      sound.play()
    }

    return () => {
      if (sound) {
        sound.unload()
      }
    }
  }, [sound])


  return (
    <div className='
      flex 
      justify-center 
      items-center
    '>
      {
        isPlaying ? 
        <div className='
          hidden
          sm:flex
          justify-center 
          items-center
          pr-4
          '>
          <p className='text-text text-sm max-h-6 w-full whitespace-nowrap pr-4'>
            Mmmmm... 
          </p>
        </div>
        : 
        <div className='
          hidden 
          sm:flex 
          justify-center 
          items-center 
          p-4 
          max-h-1 
          w-full
          '
          >
          <p className='text-text text-sm max-h-6 w-full whitespace-nowrap pr-4'>
            Psst... 
          </p>
          <p className='text-text text-sm max-h-6 w-full whitespace-nowrap pr-4'>
            Wanna listen to some chill tunes?
          </p>
          <p className='text-text text-sm max-h-6 w-full whitespace-nowrap'>
            Click the play button!
          </p>
       </div>
      }
      
      
        { isPlaying ? 
          <div className='sm:w-48 mr-4 bg-background text-text flex justify-end align-middle'>
            <Slider 
              value={volume}
              onChange={setVolume}
            />
          </div>
          :
          <div className='hidden'/>
        }
      
      <button className='flex justify-center items-center w-[32px] h-[32px] hover:bg-primary transition rounded-full p-1 border border-text' onClick={handlePlayPause}>
          {isPlaying ? <PiPauseLight className='h-6 w-6' /> : <PiPlayLight className='h-6 w-6' />}
      </button>
    </div>
  )
}

export default MiniSoundPlayer