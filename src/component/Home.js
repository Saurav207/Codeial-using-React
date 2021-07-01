import React, { Component } from 'react';
import { PostsLists, FriendsList } from './';


class Home extends Component {
  render() {
    const { posts, friends, isLoggedin } = this.props;
    console.log('hello1', this.props);

    return (
      <div className="home">
        <PostsLists posts={posts} />
        {isLoggedin && <FriendsList friends={friends} />}
      </div>
    );
  }
}

export default Home;
