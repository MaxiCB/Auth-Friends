import React, { useState, useEffect } from 'react';

import { axiosWithAuth } from "../../utils/axiosWithAuth";

const Dashboard = (props) => {

    const [friends, setFriends] = useState([]);

    const fetchFriends = () => {
        axiosWithAuth()
          .get("http://localhost:3333/friends")
          .then(res => setFriends(res.data));
      };
    
      const addFriend = friend => {
        console.log(friend);
        // Do not need to send id, server handles this
        // {
        //   id: 1
        //   name: 'Joe',
        //   age: 24,
        //   email: 'joe@lambdaschool.com',
        // }
      };

      useEffect(() => {
        fetchFriends();
    }, [])

    return (
        <>
Dashboard
        </>
    )
}

export default Dashboard