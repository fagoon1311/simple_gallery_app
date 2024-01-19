import React from 'react'
import { images } from './Images'
import ImageCard from './ImageCard'

const AllImages = () => {
  return (
    <div className='flex justify-center'>
        {images.map((i) =>(<ImageCard info={i}/>) )}
        {/* images.<ImageCard info={images[0]}/> */}
    </div>
  )
}

export default AllImages