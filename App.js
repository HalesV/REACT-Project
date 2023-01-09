import React from 'react';
import { useState, useEffect } from 'react';
import Player from './components/Player/Player';

function App() {
  const [songs] = useState([
    {
      title: "Miami",
      artist: "Dreamchaser",
      img_src: "./images/song-1.jpg",
      src: "./music/miami-dreamchaser.mp3"
    },
    {
      title: "Hawaii",
      artist: "Sunlover",
      img_src: "./images/song-2.jpg",
      src: "./music/hawaii-sunlover.mp3"
    },
    {
      title: "Maldives",
      artist: "Islander",
      img_src: "./images/song-3.jpg",
      src: "./music/maldives-islander.mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
    </div>
  );
}

export default App;