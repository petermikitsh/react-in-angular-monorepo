import render from './index';

if (!PRODUCTION) {
  const root = document.createElement('div');
  document.body.appendChild(root);
  render(root);
}
