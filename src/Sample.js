import axios from 'axios';
import React, { useEffect, useState } from 'react'

const baseurl = "https://bookingapptrial.azurewebsites.net"; //"https://localhost:44325" //http://192.168.1.200:7030/"; //


function Sample() {

    const [user, setUser] = useState({});

    // useEffect(() => {
    //     const userTokens = async () => {
          
    //       const res = await fetch("http://192.168.1.200:7030/user/get_userinfo",
    //       {
    //         credentials: 'include'
    //       });
      
    //       const data = await res.json();
      
    //       setUser(data.user)
    
    //      };
      
    //     userTokens();
    //     }, []);

    useEffect(() => {
      const user = {
          "username": "admin",
          "password": "admin"
          };
      //const userJSON = JSON.stringify(user);
  const userTokens = async () => {
    const {data} = await  axios.post(baseurl + '/login', user, {
      withCredentials: true
    })
    setUser(data.user)

    console.log(data.user);

   };

  userTokens();
  }, []);


  
  return (
    // <div>{user?.email}</div>
    <div>This is hosted on vercel {baseurl}</div>
  )
}

export default Sample


// useEffect(() => {
//   const user = {
//       "username": "admin",
//       "password": "admin"
//       };
//   const userJSON = JSON.stringify(user);
// const userTokens = async () => {
// const res = await  fetch('http://192.168.1.200:7030/login', {
//   method: 'POST',
//   credentials: 'include',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: userJSON
// })

// const data = await res.json();
// setUser(data.user)

// };

// userTokens();
// }, []);