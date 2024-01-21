import React from 'react'
import Loading from './Loading';


function getUser(){
  let user = sessionStorage.getItem('user');

  if(user){
    user = JSON.parse(user);
  }
  else{
    user = null;
  }
  return user;
}

const PrivateRoute = (props) => {

  const { children} = props;
  const user = getUser();

  return user?.token ? children : <Loading />;

}

export default PrivateRoute