import React, { Component } from 'react'
import { Divider } from '@material-ui/core';

const FavouriteList = ({favourite}) =>{
  return (
    <div className="project-list section">
    {
      favourite && favourite.map((item,index) =>{
      return(
        <div 
        className="list-item"
        key={index}
        >
        {item.track_name}
        </div>
      )
    }
    )
  }
    </div>
  )
} 
export default FavouriteList