import React, { Component } from 'react'
import { store } from "../../../index";
import "./favourite.css"


export class Favorite extends Component {
  
  state= store.getState().favourite;


  render() {
    console.log(this.state)
    return (
      <div className="container">
        <h2>Favourite List</h2>
        <ul>
          {
            this.state.map((items,index) =>(
            <li 
            index={index}>
            {items.title}
            </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default Favorite
