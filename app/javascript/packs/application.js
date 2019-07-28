import 'url-search-params-polyfill';
import * as ReactDOM from 'react-dom';
import '../styles/application';
import { App } from './components/App';
import * as React from 'react';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.querySelector('#app'));
});
