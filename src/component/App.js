import React from 'react';
import { connect } from 'react-redux';
import propsTypes from 'prop-types';
import { fetchPosts } from '../actions/posts';
import {PostsLists} from './';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    const { posts } = this.props;
    return (
      <div>
        <nav className = "nav">
          <div className = "left-div">
            
              LOGO
          </div>
          <div className = "search-container">
            <img className="search-icon" src="https://image.flaticon.com/icons/png/512/64/64673.png" alt = "icon" />
            <input placeholder="Search" />
            <div className="search-results">
              <ul>
                <li className="search-results-row">
                  <img src="https://image.flaticon.com/icons/png/512/3135/3135715.png" alt="user-DP" />
                  <span>Sanju</span>
                </li>
                <li className="search-results-row">
                  <img src="https://image.flaticon.com/icons/png/512/3135/3135715.png" alt="user-DP" />
                  <span>Sanju</span>
                </li>
              </ul>
            </div>
          </div>
          <div className = "right-nav">
            <div className="user">
            <img src="https://image.flaticon.com/icons/png/512/3135/3135715.png" alt="user-DP" id="user-dp"/>
                  <span>Sanju</span>
              
            </div>
            <div className="nav-links">
              <ul>
                <li>Log in</li>
                <li>Log Out</li>
                <li>Register</li>
                
              </ul>
            </div>
          </div>


        </nav>
       <PostsLists posts = {posts}/>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}
App.propsTypes = {
  posts: propsTypes.array.isRequired,
}

export default connect(mapStateToProps)(App);
