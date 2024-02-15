import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from './contexts/authContext';
import { FBAuthProvider, useFBAuth } from "./contexts/facebookContext";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <AuthProvider>
      <FBAuthProvider>
            <App />
      </FBAuthProvider>
    </AuthProvider>
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
