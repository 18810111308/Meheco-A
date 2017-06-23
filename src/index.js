import React from 'react';
import ReactDOM from 'react-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<div><Header/><Footer/></div>, document.getElementById('root'));
registerServiceWorker();
