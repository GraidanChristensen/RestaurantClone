import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
