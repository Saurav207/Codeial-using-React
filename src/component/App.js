import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import propsTypes from 'prop-types';

import { fetchPosts } from '../actions/posts';
import { NavBar, Home, Page404, Login, Signup } from './';
import jwt_Decode from 'jwt-decode';
import { authenticateUser } from '../actions/auth';

//create some dummy components
const Settings = () => <div>Settings</div>;

const PrivateRoute = (privateRouteProps) => {
  const { isloggedin, path, component: Component } = privateRouteProps;
  return (
    <Route
      path={path}
      render={(props) => {
        return isloggedin ? <Component {...props} /> : <Redirect to="/" />;
      }}
    />
  );
};

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());

    const token = localStorage.getItem('token');

    if (token) {
      const user = jwt_Decode(token);

      console.log('user', user);
      this.props.dispatch(
        authenticateUser({
          email: user.email,
          _id: user._id,
          name: user.name,
        })
      );
    }
  }

  render() {
    const { posts, auth } = this.props;
    return (
      <Router>
        <div>
          <NavBar />

          <Switch>
            <Route
              exact
              path="/"
              render={(props) => {
                return <Home {...props} posts={posts} />;
              }}
            />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <PrivateRoute
              path="/settings"
              component={Settings}
              isloggedin={auth.isloggedin}
            />
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
    auth: state.auth,
  };
}
App.propTypes = {
  posts: propsTypes.array.isRequired,
};

export default connect(mapStateToProps)(App);
