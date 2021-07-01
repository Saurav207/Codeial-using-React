import React from 'react';
import FriendsListItem from './friendsListItem';

const FriendsList = (props) => {
  //console.log('he',props);
  return (
    <div className="friends-list">
      <div className="header">Friends</div>

      {props.friends && props.friends.length === 0 && (
        <div className="no-friends">No friends found!</div>
      )}

      {props.friends &&
        props.friends.map((friend) => (
          <FriendsListItem friend={friend.to_user} key={friend._id} />
        ))}
    </div>
  );
};
export default FriendsList;
