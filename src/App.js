import React from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import Greetings from './components/Main/Greetings/Greetings';

function App() {
  return (
    <div className="App">
      <Layout>
        <Greetings />
      </Layout>
    </div>
  );
}

export default App;
