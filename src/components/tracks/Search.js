import React, { Component } from 'react';
import axios from 'axios';
import { store } from '../../index';
import { fetchSearchData } from '../../store/actions';
import Spinner from "../layout/Spinner";
import "./Search.css"
import Result from './Result'

class Search extends Component {
  state = {
    trackTitle: {},
    track_result:{},
    test: {
      title: "My Lyfe"
    }

  }
  searchTrack = (e) => {
    e.preventDefault();
    const title = this.state.trackTitle;
    store.dispatch(fetchSearchData(title)).then(()=>{
      const track_result = store.getState().track_result;
      console.log(track_result);
      this.setState({track_result:track_result});
      console.log(this.state);
      // button = <TrackList />
    });
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    
    // const trackResult = store.getState().track_result;
    // let button
    // if (trackResult.length <= 1 ){
    // button = <Spinner />
    // } else{
    // button = <TrackList type={type}/>
    // }
    return (
      <>
      <div className='mb-4 text-center m-5'>
        <h1 className="text-lg">
          Search for lyric <i className="fas fa-music"></i>
        </h1>
        <div className="p-4">
          <form>
            <input
              className="form-control form-control-lg "
              type="text"
              name="trackTitle"
              placeholder="Song title here"
              onChange={this.onChange}
            />
            <input
              type="submit"
              onClick={this.searchTrack}
              className="btn indigo mt-4 btn-block"
              value="Search Track"
              disabled={!(this.state.trackTitle.length > 0)}
            />
          </form>
        </div>
      </div>
      <div className="d-flex flex-wrap justify-content-center" >
      <Result track_result={this.state.track_result} />
      </div>
      </>
    )




    // if (trackResult === undefined){
    //   button = <Spinner />
    //   return(
    //     <>
        
    //     <div className='card mb-4 text-center m-5'>
    //       <h1 className="card-header text-lg">
    //         Search for lyric <i className="fas fa-music"></i>
    //       </h1>
    //       <div className="card-body p-4">
    //         <form>
    //           <input
    //             className="form-control form-control-lg "
    //             type="text"
    //             name="trackTitle"
    //             placeholder="Song title here"
    //             onChange={this.onChange}
    //           />
    //           <input
    //             type="submit"
    //             onClick={this.searchTrack}
    //             className="btn btn-primary mt-4 btn-block"
    //             value="Search Track"
    //           />
    //         </form>
    //       </div>
    //     </div>
    //     {button}
    //     </>
    //   )
    // } else {
    //   button = <Spinner />
    //   return(
    //     <>
    //     <div className='card mb-4 text-center m-5'>
    //       <h1 className="card-header text-lg">
    //         Search for lyric <i className="fas fa-music"></i>
    //       </h1>
    //       <div className="card-body p-4">
    //         <form>
    //           <input
    //             className="form-control form-control-lg "
    //             type="text"
    //             name="trackTitle"
    //             placeholder="Song title here"
    //             onChange={this.onChange}
    //           />
    //           <input
    //             type="submit"
    //             onClick={this.searchTrack}
    //             className="btn btn-primary mt-4 btn-block"
    //             value="Search Track"
    //           />
    //         </form>
    //       </div>
    //     </div>
    //     <div className="row">{button}</div>
        
    //     </>
    //   )
    // }

      // <>
      // <div className='card mb-4 text-center m-5'>
      //   <h1 className="card-header text-lg">
      //     Search for lyric <i className="fas fa-music"></i>
      //   </h1>
      //   <div className="card-body p-4">
      //     <form>
      //       <input
      //         className="form-control form-control-lg "
      //         type="text"
      //         name="trackTitle"
      //         placeholder="Song title here"
      //         onChange={this.onChange}
      //       />
      //       <input
      //         type="submit"
      //         onClick={this.searchTrack}
      //         className="btn btn-primary mt-4 btn-block"
      //         value="Search Track"
      //       />
      //     </form>
      //   </div>
      // </div>
      // {button}
      // </>
  }
}

export default Search
