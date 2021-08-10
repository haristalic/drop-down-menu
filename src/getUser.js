import { useState, useEffect } from "react";
import axios from 'axios';

const useUser = () =>{
const url ="https://api.randomuser.me/";
const  [user,setUser] = useState(null);
useEffect(() =>{
axios.get(url).then(response =>{
 setUser(response.data.results[0]);
})
},[url]);
return user;
};


export default useUser;
