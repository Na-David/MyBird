import React, { useCallback } from 'react';
import { Card, Button, Avatar } from 'antd';
import PropTypes from 'prop-types';



const UserProfile = ({setIsLoggedIn}) => {

  const onLogOut = useCallback(() => {
    setIsLoggedIn(false);
  },[]);

  return (
    <Card
      actions = {[
        <div key="reply">REPLY<br />0</div>,
        <div key="following">Followings<br />0</div>,
        <div key="follower">Followers<br />0</div>
      ]}
    >
      <Card.Meta
        avatar = {<Avatar>D-NA</Avatar>}
        title = "David-Bird" />
      <Button onClick={onLogOut}>Log Out</Button>
    </Card>
  )
}

UserProfile.prototype = {
  setIsLoggedIn: PropTypes.func.isRequired
}


export default UserProfile
