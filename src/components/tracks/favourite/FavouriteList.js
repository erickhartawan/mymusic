import React, { Component } from 'react'


const FavouriteList = ({favourite}) =>{
  return (
    <>
    {
      favourite && favourite.map((item,index) =>{
      return(
        <div 
        className="card"
        key={index}
        >
        <div className="card-title"> Favourite Lyrics </div>
        <div className="card-text">
        {item.track_name}
          </div>
        </div>
      )
    }
    )
  }
</>
  )
} 
export default FavouriteList