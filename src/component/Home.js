import React, { Component } from 'react';
import { PostsLists } from './';

class Home extends Component {
  render() {
    const { posts } = this.props;

    return (
      <div>
        <PostsLists posts={posts} />
      </div>
    );
  }
}

export default Home;
