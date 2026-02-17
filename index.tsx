import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import './index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// Log to confirm the script is actually executing on the production server
console.log("Simtope: Connectivity Architect mounting...");

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);