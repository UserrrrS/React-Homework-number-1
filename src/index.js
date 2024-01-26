// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from "react";
import {createRoot} from "react-dom";

import Counter, { randNumber } from "./utils/functions";



const n = new Counter();
n.changeVal(randNumber(101))
console.log(n.val)
n.inc()
n.inc()

const tag = createRoot(document.getElementById("root"));

tag.render(<h1>{n.val}</h1>)

