import React, { useState } from 'react'
import { images } from './Images'
import ImageCard from './ImageCard'

const Slide = () => {
  const [imageIndex, setImageIndex] = useState(0)
  
  const handleNextClick = () =>{
    setImageIndex((imageIndex+1) % images.length) 
  }
  
  return (
    <div>
    <div className='flex justify-center items-center'>
        <button  onClick={()=>{
          if(imageIndex === 0) setImageIndex(images.length - 1);
          else setImageIndex(imageIndex - 1)}
          } className='p-2 font-bold text-3xl m-5 py-6'>{"⬅️"}</button>
        <img className="w-1/2 h-[450px]" src={images[imageIndex].image_url} alt={images[imageIndex].caption}></img>
        <button onClick={handleNextClick} className='p-2 font-bold text-3xl  m-5 py-6'>{"➡️"}</button>
    </div>
      <div className='flex justify-center'>
      {images.map((i, index) =>(<ImageCard key={index} info={i} isActive={index===imageIndex} onClick={()=>{setImageIndex(index)}}/>) )}
      {/* images.<ImageCard info={images[0]}/> */}
    </div>
    </div>
  )
}

export default Slide