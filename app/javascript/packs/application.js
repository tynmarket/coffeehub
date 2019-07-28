import '../styles/application';
import 'url-search-params-polyfill';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './components/App';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.querySelector('#app'));
});
