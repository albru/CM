import React, { Suspense, useEffect } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Layout from './hoc/Layout/Layout';
import MainPage from './containers/MainPage/MainPage';
import Spinner from './components/UI/Spinner/Spinner';
import Logout from './containers/Auth/Logout/Logout';

import * as actions from './store/actions/index';
import './App.css';

const Portfolio = React.lazy(() => {
  return import('./containers/Portfolio/Portfolio');
});

const Contacts = React.lazy(() => {
  return import('./containers/Contacts/Contacts');
});

const Order = React.lazy(() => {
  return import('./containers/Order/Order');
});

const Services = React.lazy(() => {
  return import('./containers/Services_/Services');
});

const Auth = React.lazy(() => {
  return import('./containers/Auth/Auth');
});

const Orders = React.lazy(() => {
  return import('./containers/Orders/Orders');
});

function App(props) {

  let routes = (
    <Switch>
      <Route path="/portfolio" exact render={(props) => <Portfolio {...props}/>} />
      <Route path="/services" exact render={(props) => <Services {...props}/>} />
      <Route path="/contacts" exact render={(props) => <Contacts {...props}/>} />
      <Route path="/auth" exact render={(props) => <Auth {...props}/>} />
      <Route path="/order" exact render={(props) => <Order {...props}/>} />
      
      {props.isAuth 
        ? <Route path="/logout" exact render={() => <Logout/>} />
        : null}
  
      {props.isAuth 
        ? <Route path="/orders" exact render={(props) => <Orders {...props}/>} />
        : null}
  
      <Route path="/" exact render={(props) => <MainPage {...props}/>} />
      <Redirect to="/" />
    </Switch>
  )
  
  useEffect(() => {
    props.onTryAutoSignUp()
  })

  const bigSpinnerStyles = {
    'minHeight': '100vh',
    'width': '100vw',
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'transform': 'translateY(-100px)'
  }
  const bigSpinner = (
    <div style={bigSpinnerStyles}>
      <Spinner />
    </div>
  )
  return (
    <div className="App">
      <React.StrictMode>
        <Layout>
          <Suspense fallback={bigSpinner}>
            {routes}
          </Suspense>
        </Layout>
      </React.StrictMode>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignUp: () => dispatch(actions.authCheckState())
  }
}

App.propTypes = {
  isAuth: PropTypes.bool,
  onTryAutoSignUp: PropTypes.func
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
