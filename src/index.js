import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
 import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Appx from './Appx';
import Page from './Page';
import Test from './Test';
import Callbackhook from './Callbackhook';
import Memo from './Memo';
import MultiLanguage from './MultiLanguage';
// import GoogleApp from './GoogleApp';
import Good from './Goob';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
  {/* <Appx/>  */}
   {/* <Page/> */}
   {/* <Test/> */}
   {/* <Callbackhook/> */}
   {/* <MultiLanguage/> */}
   {/* <Memo/> */}
  {/* <Pagetask/> */}
  <Good/>
  {/* <GoogleApp/> */}
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
