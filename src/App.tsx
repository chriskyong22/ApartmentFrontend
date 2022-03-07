import React from 'react';
import { Counter } from './features/counter/Counter';
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./components/Home/Home";

import './StyleSheets/Public/App.css';

function App() {
  return (
    <div className="layout">
      <Header/>
      <div className="main-content">
        <Home/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
