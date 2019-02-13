import React from 'react';
import {connect} from 'react-redux'
import {signIn} from '../../store/actions/authActions';
import { reactReduxFirebase } from 'react-redux-firebase';
import { store } from '../../index';


class SignIn extends React.Component{
  state ={
    email: '',
    password:'',
  }
  handleSubmit = (e) =>{
    this.props.signIn(this.state)
  }
  handleChange = (e) =>{
    this.setState({
      [e.target.id] : e.target.value
    })
  }
  render(){
    return(
      <div className="d-flex justify-content-center mt-3">
        <form onSubmit={this.handleSubmit}>
        <h5 >Sign-in</h5> 
          <div class="form-group ">
            <label for="email">Email address</label>
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" placeholder="Password" />
          </div>
          <button
          className="btn btn-primary"
          type="submit"
          >Log in</button>
        </form>
      </div>

    )
  }
}

const mapStateToProps = (state) =>{
  return{
    authError: state.auth.authError
  }
}
const mapDispatchToProps = (state) => {
  return{
    signIn: (creds) => store.dispatch(signIn(creds))
  }
} 

export default connect(mapStateToProps,mapDispatchToProps)(SignIn)