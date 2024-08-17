import React from 'react';
import './App.css';
import Footer from "./components/footer"
import HomePage from './pages/homePage';
import Menu from './components/menu';

function App() {
  return (
    <div>
      <Menu />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
