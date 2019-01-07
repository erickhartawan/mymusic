import React, { Component } from 'react'
import { connect } from "react-redux"
import { compose } from "redux"
import { firestoreConnect } from "react-redux-firebase"
import "./favourite.css"
import Spinner from "../../layout/Spinner"
import FavouriteList from "./FavouriteList"


// export class Favorite extends Component {
//   render() {
//     console.log(this.state)
//     return (
//       <div className="container">
//         <h2>Favourite List</h2>
//         <ul>
//           {
//             this.state.map((items,index) =>(
//             <li 
//             index={index}>
//             {items.title}
//             </li>
//             ))
//           }
//         </ul>
//       </div>
//     )
//   }
// }

const Favourite = (props) =>{
  const { favourite } = props;
  // if (props.firestore.ordered === 1) {
  return(
    <div className="container">
      <FavouriteList favourite={favourite} />
    </div>
)

  // } else {
  //   return <Spinner />
  // }
}

const mapStateToFavouriteProps = (state) =>{
  console.log(state)
  return {
    favourite: state.firestore.ordered.favourites
  }
}

export default compose(
  connect(mapStateToFavouriteProps),
  firestoreConnect([
  {
    collection:"favourites"
  }
])
)(Favourite);