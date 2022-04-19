import React from 'react'
import { PhotoCard } from '../PhotoCard'
import {photos} from '../../../api/db.json'

export const ListOfPhotoCard = () => {
  return (
    <div>
        {photos.map(photo=>(
            <PhotoCard {...photo}/>
        ))}
    </div>
  )
}
