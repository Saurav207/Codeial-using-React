import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserProfile } from '../actions/profile';
import { APIUrls } from '../helpers/url';
import { getAuthTokenLocalStorage } from '../helpers/utils';
import {addFriend} from '../actions/friends'


class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: null,
      error: null,
    };
  }
  componentDidMount() {
    const { match } = this.props;
    if (match.params.userId) {
      this.props.dispatch(fetchUserProfile(match.params.userId));
    }
  }
  checkIfUserIsAFriend = () => {
    console.log('this.props', this.props);
    const { match, friends } = this.props;
    console.log('hello', friends);

    const userId = match.params.userId;
    console.log('save', friends);

    const index = friends.map((friend) => friend.to_user._id).indexOf(userId);

    if (index !== -1) {
      return true;
    }
    return false;
  };


  handleAddFriend = async () => {
    const userId = this.props.match.params.userId;
   const url = APIUrls.addFriend(userId);
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${getAuthTokenLocalStorage()}`,
      },
    };
    const response = await fetch(url, options);
    //now this response is convert to json
    const data = await response.json();//this response.json gives me another promise

    if(data.success) {
       this.setState({ 
         success: true
       });

       //to store the user which is get from this  data so dispatch the action 
       this.props.dispatch(addFriend(data.data.friendship));
    }
    else {
      this.setState({ 
        success: null, 
        error: data.messages,
      });
    }
  }

  render() {
    // const { user } = this.props.auth;
    const {
      match: { params },
    } = this.props;
    console.log('this.props', params);

    const user = this.props.profile.user;
    if (this.props.profile.inProgress) {
      return <h1>Loading!</h1>;
    }
    const isUserAFriend = this.checkIfUserIsAFriend();
    const { success, error } = this.state;
    return (
      <div className="settings">
        <div className="img-container">
          <img
            src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
            alt="user-dp"
          />
        </div>

        <div className="field">
          <div className="field-label">Name</div>
          <div className="field-value">{user.name}</div>
        </div>

        <div className="field">
          <div className="field-label">Email</div>
          <div className="field-value">{user.email}</div>
        </div>

        {/* <div className="field">
          <div className="field-label">Password</div>
          <div className="field-value">Password</div>
        </div> */}

        <div className="btn-grp">
          {/* <button className="button save-btn">Add Friend</button> */}
          {!isUserAFriend ? (
            <button className="button save-btn" onClick={this.handleAddFriend}>Add Friend</button>
          ) : (
            <button className="button save-btn">Remove Friend</button>
          )}
          {success && (
            <div className="alert success-dailog">
              Friend added successfully
            </div>
          )}
          {error && <div className="alert error-dailog">{error}</div>}
        </div>
      </div>
    );
  }
}
function mapStateToProps({ profile, friends }) {
  return {
    profile,
    friends,
  };
}
export default connect(mapStateToProps)(UserProfile);
