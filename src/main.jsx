import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/global.scss'

console.log('MAIN LOADED');

document.documentElement.setAttribute('data-theme', 'light');

// Meta Pixel
const script = document.createElement('script');
script.async = true;
script.src = 'https://connect.facebook.net/en_US/fbevents.js';
script.onload = () => {
  window.fbq('init', '972192929225708');
  window.fbq('track', 'PageView');
};
document.head.appendChild(script);

window._fbq = window.fbq = function() {
  if (window.fbq.callMethod) {
    window.fbq.callMethod.apply(window.fbq, arguments);
  } else {
    window.fbq.queue.push(arguments);
  }
};
window.fbq.push = window.fbq;
window.fbq.loaded = true;
window.fbq.version = '2.0';
window.fbq.queue = [];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)