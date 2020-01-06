import React, { useState } from "react";
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

const FirendsList = props => {
  const [showUpdate, setShowUpdate] = useState(false);

  const friends = props.friends;

  let friendUpdate = {
      name: '',
      age: '',
      email: ''
  }

  const deleteFriend = id => {
    props.delete(id);
  };

  const updateFriend = id => {
    props.updateFriend(id, friendUpdate);
    console.log(friendUpdate)
  };

  return (
    <ListGroup>
      {friends.map(friend => {
        return (
          <ListGroupItem>
            <ListGroupItemHeading>{friend.name}</ListGroupItemHeading>
            <ListGroupItemText>
              {"AGE: " + friend.age + " " + "EMAIL: " + friend.email}
            </ListGroupItemText>
            <Button onClick={e => setShowUpdate(!showUpdate)}>UPDATE</Button>
            <Button onClick={e => deleteFriend(friend.id)}>X</Button>
            {showUpdate ? (
                <>
              <InputGroup>
                <Input placeholder="New Name:" onChange={e => friendUpdate.name = e.target.value}/>
            </InputGroup>
            <InputGroup>
                <Input placeholder="New Email:" onChange={e => friendUpdate.email = e.target.value}/>
                <InputGroupAddon addonType="append">
                  <Button color="primary" onClick={e => updateFriend(props.id)}>Update</Button>
                </InputGroupAddon>
              </InputGroup>
            <InputGroup>
                <Input placeholder="New Age:" onChange={e => friendUpdate.age = e.target.value}/>
            </InputGroup>
            </>
            ) : (
              <></>
            )}
          </ListGroupItem>
        );
      })}
    </ListGroup>
  );
};

export default FirendsList;
