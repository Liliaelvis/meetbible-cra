import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Content from './Content';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <div className="content-wrap">
        <Navbar/>
        <Content/>
      </div>
      <Footer />
    </div>
  );
}
export default App;
