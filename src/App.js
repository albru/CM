import React from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import Greetings from './components/Main/Greetings/Greetings';
import Features from './components/Main/Features/Features';

function App() {
  return (
    <div className="App">
      <Layout>
        <Greetings />
        <Features />
      </Layout>
    </div>
  );
}

export default App;
