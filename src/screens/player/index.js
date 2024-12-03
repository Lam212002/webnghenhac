import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import "./player.css"
import apiClient from "../../spotify"
import SongCart from '../../components/SongCart';
import Queue from '../../components/queue';

export default function Player() {
  const location = useLocation();
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  console.log(location);
  useEffect(() => {
    if (location.state) {
      apiClient
        .get("playlists/" + location.state?.id + " /tracks")
        .then((res) => {
          setTracks(res.data.items);
          setCurrentTrack(res.data?.items[0]?.track);
        });
    }
  }, [location.state]);
  return (

    <div className='screen-container flex'>
      <div className='left-player-body'>

      </div>
      <div className='right-player-body'>
        <SongCart album={currentTrack.album}/>
        <Queue/>
      </div>
    </div>
  )
}
