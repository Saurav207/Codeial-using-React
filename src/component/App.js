import React from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import propsTypes from 'prop-types';

import { fetchPosts } from '../actions/posts';
import {PostsLists, NavBar} from './index';

//create some dummy components
const Login = () => 
  <div>Login</div>;



const SignUp = () => 
  <div>SignUp</div>;


const Home = () => 
  <div>Home</div>;



class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    const { posts } = this.props;
    return (
      <Router>
         <div>
          <NavBar />
          {/* <PostsLists posts = {posts}/> */}
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/login">LogIn</Link>
            </li>

            <li>
              <Link to="/signup">SignUp</Link>
            </li>

          </ul>

          <Route exact  path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/signUp" component={SignUp}/>
        </div>
      </Router>
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
