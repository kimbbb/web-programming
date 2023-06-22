import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Library from './0321/Library';
import Clock from "./0321/Clock.jsx"
import CommentList from './0321/CommentList';
import Login from './0321/Login';
import Count from './0323/CounterUse'
import EventPractice from './0323/EventPractice';
import Click from './0323/Click';
import Test from './0321/Test';
import ClickClass from './0323/ClickClass';
import Rock from '../src/rock/App.js'

// setInterval(() => {
//   const root = ReactDOM.createRoot(document.getElementById('root'));
//   root.render(
//     <React.StrictMode>
//       {/* <Library /> */}
//       <Clock/>
//       {/* <App/> */}
      
//     </React.StrictMode>
//   );
// }, 1000);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Library /> */}
    {/* <Clock/> */}
    {/* <App/> */}
    {/* <CommentList/> */}
    {/* <Login/> */}
    {/* <Count/> */}
    {/* <EventPractice/> */}
    {/* <Click/> */}
    {/* <ClickClass/> */}
    {/* <Rock/> */}
    <Test/>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
