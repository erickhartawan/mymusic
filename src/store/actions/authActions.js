export const signIn = (creds) => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();

    firebase.auth().signInWithEmailAndPassword(
      creds.email,
      creds.password
    ).then(() => {
      dispatch({type: 'LOGIN_SUCCESS'})
    }).catch((err) => {
      dispatch({type: 'LOGIN_ERROR', err});
    });
  }
} 

export const signOut = () =>{
  return (dispatch,getState,{getFirebase}) =>{
    const firebase = getFirebase();
    firebase.auth().signOut().then(() => {
      dispatch({type: 'SIGNOUT_SUCCESS'})
    });
  }
}

export const signUp = (creds) => {
  return (dispatch,getState, {getFirebase}) => {
    const firebase = getFirebase();

    firebase.auth().createUserWithEmailAndPassword(
      creds.email,
      creds.password
    ).catch(error => {console.log(error.message)})
  }
}