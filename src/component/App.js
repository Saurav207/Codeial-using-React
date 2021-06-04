import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import propsTypes from 'prop-types';

import { fetchPosts } from '../actions/posts';
import { NavBar, Home, Page404, Login, Signup} from './';

//create some dummy components

const SignUp = () => <div>SignUp</div>;

// const Home = (props) => {
//   console.log(props);
//   return <div>Home</div>;
// };

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
          {/* <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/login">LogIn</Link>
            </li>

            <li>
              <Link to="/signup">SignUp</Link>
            </li>
          </ul> */}
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => {
                return <Home {...props} posts={posts} />;
              }}
            />
            <Route path="/login" component={Login} />
            <Route path="/signUp" component={Signup} />
            <Route component={Page404} />
          </Switch>
        </div>
      </Router>
    );
  }
}
function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}
App.propTypes = {
  posts: propsTypes.array.isRequired,
};

export default connect(mapStateToProps)(App);
