import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Layout from './hoc/Layout/Layout';
import MainPage from './containers/MainPage/MainPage';

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
  return (
    <div className="App">
      <Layout>
        <Suspense fallback={<p>Loading...</p>}>
          {routes}
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;
