//polyfills
import 'core-js';
import 'raf/polyfill';

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { unregisterSW } from './utils';
import Routes from './Routes';
import './index.scss';

const rootElement = document.getElementById('root');
render(
    <BrowserRouter>
        <Routes />
    </BrowserRouter>,
    rootElement
);

unregisterSW();
