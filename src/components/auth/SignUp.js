import React, { Component } from 'react'
import {connect} from 'react-redux'
import {signUp} from "../../store/actions/authActions"
import { store } from '../../index';
class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    this.props.signUp(this.state)
  }
  render() {
    return (
      <div className="d-flex justify-content-center mt-3">
        <form onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="form-group">
            <label for="email">Email</label>
            <input type="email" id='email' class="form-control" onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label for="password">Password</label>
            <input type="password" id='password' className="form-control" onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label for="firstName">First Name</label>
            <input type="text" id='firstName' class="form-control" onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label for="lastName">Last Name</label>
            <input type="text" id='lastName' class="form-control" onChange={this.handleChange} />
          </div>
            <button 
            className="btn btn-primary"
            type="submit"
            >Sign Up</button>
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
    signUp: (creds) => store.dispatch(signUp(creds))
  }
} 

export default connect(mapStateToProps,mapDispatchToProps)(SignUp)