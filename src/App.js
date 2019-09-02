import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

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

const AdvConstructor = React.lazy(() => {
  return import('./containers/AdvConstructor/AdvConstructor');
});

const Services = React.lazy(() => {
  return import('./containers/Services_/Services');
});

let routes = (
  <Switch>
    <Route path="/portfolio" exact render={(props) => <Portfolio {...props}/>} />
    <Route path="/services" exact render={(props) => <Services {...props}/>} />
    <Route path="/contacts" exact render={(props) => <Contacts {...props}/>} />
    <Route path="/constructor" exact render={(props) => <AdvConstructor {...props}/>} />
    <Route path="/" exact render={(props) => <MainPage {...props}/>} />
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
      <Layout>
        <Suspense fallback={bigSpinner}>
          {routes}
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;
