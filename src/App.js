import React from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import Greetings from './components/Sections/Greetings/Greetings';
import Features from './components/Sections/Features/Features';
import Services from './components/Sections/Services_/Services';

function App() {
  return (
    <div className="App">
      <Layout>
        <Greetings />
        <Features />
        <Services />
      </Layout>
    </div>
  );
}

export default App;
