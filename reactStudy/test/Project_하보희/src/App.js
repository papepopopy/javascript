import React from 'react';
import { Routes, Route } from "react-router-dom";

// 라우팅 할 페이지
import MainPage from './pages/User/MainPage';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './components/common/assets/styles/App.css'

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element = {<MainPage />}/>
      </Routes>
      <Footer />
    </div>
  )
}
export default App;
