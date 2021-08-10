import React from 'react';
import UserContext from './userContext';
import { useContext,useState } from "react";

function Settings (){
    const user = useContext(UserContext);
    const [contactInfo, setContactInfo] = useState({
        firstName: "",
        lastName: "user.name.first",
        email: "",
        phone: "",
      });
    if(user){
  return (

<form class="account-settings" action="">
  <div class="input">
    <label for="firstname">First</label>
    <input id="firstName" type="text"/>
  </div>
  <div class="input">
    <label for="firstname">Last</label>
    <input id="lastName" type="text"/>
  </div>
  <div class="input input--wide">
    <label for="phone">Phone</label>
    <input id="phone" type="text"/>
  </div>
  <div class="input input--wide">
    <label for="email">Email</label>
    <input id="email" type="text"/>
  </div>
  <div class="input">
    <label for="birth-month">Birth Month</label>
    <select><option>1</option></select>
  </div>
  <div class="input">
    <label for="birth-month">Birth Day</label>
    <select><option>1</option></select>
  </div>
  <div class="input">
    <label for="birth-month">Preferred Language</label>
    <select>
      <option>English</option>
      <option>Español</option>
    </select>
  </div>
</form>

  )

    }
  return (<div></div>);
  }
  export default Settings;