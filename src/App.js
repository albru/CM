import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import Layout from './hoc/Layout/Layout';
import MainPage from './containers/MainPage/MainPage';

import Spinner from './components/UI/Spinner/Spinner';

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

let routes = (
  <Switch>
    <Route path="/portfolio" exact render={(props) => <Portfolio {...props}/>} />
    <Route path="/services" exact render={(props) => <Services {...props}/>} />
    <Route path="/contacts" exact render={(props) => <Contacts {...props}/>} />
    <Route path="/auth" exact render={(props) => <Auth {...props}/>} />
    <Route path="/order" exact render={(props) => <Order {...props}/>} />
    <Route path="/orders" exact render={(props) => <Orders {...props}/>} />
    <Route path="/" exact render={(props) => <MainPage {...props}/>} />
    <Redirect to="/" />
  </Switch>
)


function App() {
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

export default App;
