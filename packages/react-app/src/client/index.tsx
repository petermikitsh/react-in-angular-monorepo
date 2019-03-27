import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

export default function render(container: HTMLElement) {
  ReactDOM.render(<App />, container);
}

if (!PRODUCTION) {
  const root = document.createElement('div');
  document.body.appendChild(root);
  render(root);
}
