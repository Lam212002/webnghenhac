import React from 'react'
import AlbumImages from './albumImages'
import AlbumInfo from './albumInfo'
import "./songCart.css"

export default function SongCard({album}) {
  return (
    <div className="songCard-body">

      <AlbumImages url={album?.images[0]?.url}/>
      <AlbumInfo album={album}/>

    </div>
  )
}
