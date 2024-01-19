import React from 'react'

const ImageCard = ({ info, onClick, isActive }) => {
  
  return (
    <div className='w-48 h-36 m-2 p-2'>
        <img className={`${isActive?"border-4 border-blue-400 border-spacing-2 rounded-md p-2 ":" "}`} src={info.image_url} alt={info.caption} onClick={onClick}></img>
    </div> 
  )
}

export default ImageCard