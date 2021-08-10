import React from 'react';
import UserContext from './userContext';
import { useContext } from "react";

function User (){
    const user = useContext(UserContext);
    if(user){
  return (

        <div className="profile">
        <img src={user.picture.large} className="profile__image"></img>
        <div className="profile__name">{user.name.first} {user.name.last}</div>
        <div className="profile__title">Sex:{user.gender}</div>
        <div className="profile__title">Age: {user.dob.age}</div>
        <div className="profile__title">Phone: {user.phone}</div>
        <div className="profile__title">Country: {user.location.country}</div>
        <div className="profile__title">State: {user.location.state}</div>
        <div className="profile__title">City: {user.location.city}</div>
        <div className="profile__title">Street: {user.location.street.name} {user.location.street.number}</div>
        <div className="profile__title">Postcode: {user.location.postcode}</div>
        <div className="profile__title">Email: {user.email}</div>

    </div>

  )

    }
  return (<div></div>);
  }
  export default User;
