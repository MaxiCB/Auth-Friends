import React, { useState, useEffect } from "react";

import { axiosWithAuth } from "../../utils/axiosWithAuth";
import FirendsList from "../FriendsList/FriendsList";
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  InputGroup,
  InputGroupAddon,
  Button,
  Input
} from "reactstrap";

const Dashboard = props => {
  const [friends, setFriends] = useState([]);

  const [showNew, setShowNew] = useState(false);

  const fetchFriends = () => {
    axiosWithAuth()
      .get("http://localhost:3333/friends")
      .then(res => {
        setFriends(res.data);
        console.log(res.data);
      });
  };

  const newFriend = {
    name: "",
    age: 24,
    email: ""
  };

  const addFriend = friend => {
    console.log(friend);
    axiosWithAuth()
      .post("http://localhost:3333/friends", newFriend)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
    fetchFriends();
    // Do not need to send id, server handles this
    // {
    //   id: 1
    //   name: 'Joe',
    //   age: 24,
    //   email: 'joe@lambdaschool.com',
    // }
  };

  const updateFriend = (id, friend) => {
    axiosWithAuth()
      .put(`http://localhost:3333/friends/${id}`, friend)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
      setShowNew(false);
    fetchFriends();
  };

  const deleteFriend = id => {
    axiosWithAuth()
      .delete(`http://localhost:3333/friends/${id}`)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
    fetchFriends();
  };

  useEffect(() => {
    fetchFriends();
  }, []);

  return (
    <>
    <Button onClick={e => setShowNew(!showNew)}>Add New!</Button>
      {showNew ? (
        <>
          <InputGroup>
            <Input
              placeholder="New Name:"
              onChange={e => (newFriend.name = e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <Input
              placeholder="New Email:"
              onChange={e => (newFriend.email = e.target.value)}
            />
            <InputGroupAddon addonType="append">
              <Button color="primary" onClick={e => updateFriend(props.id)}>
                Add
              </Button>
            </InputGroupAddon>
          </InputGroup>
          <InputGroup>
            <Input
              placeholder="New Age:"
              onChange={e => (newFriend.age = e.target.value)}
            />
          </InputGroup>
        </>
      ) : (
        <></>
      )}
      <FirendsList
        friends={friends}
        delete={deleteFriend}
        updateFriend={updateFriend}
      />
    </>
  );
};

export default Dashboard;
