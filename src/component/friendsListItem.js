import React from 'react';
import { Link } from 'react-router-dom';
function FriendsListItem(props) {
  return (
    <div>
      {props.friend && (
        <Link className="friends-item" to={`user/${props.friend._id}`}>
          <div className="friends-img">
            <img
              src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
              alt="user-dp"
            />
          </div>
          <div className="friends-name">{props.friend.email}</div>
        </Link>
      )}
      
    </div>
  );
}

export default FriendsListItem;
