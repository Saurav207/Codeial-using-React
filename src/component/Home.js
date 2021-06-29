import React, { Component } from 'react';
import { PostsLists } from './';
import FriendsList from './friendsList';

class Home extends Component {
  render() {
    const { posts, friends, isLoggedin } = this.props;

    return (
      <div className="home">
        <PostsLists posts={posts} />
        {isLoggedin && <FriendsList friends={friends} />}
      </div>
    );
  }
}

export default Home;
