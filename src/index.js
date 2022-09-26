import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Sports from './catagory/Sports';
import Politics from './catagory/Politics';
import Business from './catagory/Business';
import Travel from './catagory/Travel';
import Technology from './catagory/Technology';
import News from './News/News';
import News2 from './News/News2';
import News3 from './News/News3';
import News4 from './News/News4';
import New1 from './News/New1';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes >
  <Route path='/' element={   <App />}></Route>
  <Route path='/Sports' element={   <Sports />}></Route>
  <Route path='/Politics' element={   <Politics />}></Route>
  <Route path='/Business' element={   <Business />}></Route>
  <Route path='/Travel' element={   <Travel />}></Route>
  <Route path='/Technology' element={   <Technology/>}></Route>
  <Route path='/:id/News' element={   <News/>}></Route>
  <Route path='/News' element={   <News/>}></Route>
  <Route path='/New1' element={   <New1/>}></Route>
  <Route path='/News2' element={   <News2/>}></Route>
  <Route path='/News3' element={   <News3/>}></Route>
  <Route path='/News4' element={   <News4/>}></Route>

  </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
