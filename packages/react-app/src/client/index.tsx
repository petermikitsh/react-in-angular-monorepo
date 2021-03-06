import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

export default function render(container: HTMLElement) {
  ReactDOM.render(<App />, container);
}
