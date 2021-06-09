import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import routes from './routes';

function App() {
  return (
    <div className="App">
      <main>
        <Header/>
        {routes}
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
