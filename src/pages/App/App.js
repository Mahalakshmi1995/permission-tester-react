import React from 'react';
import './App.scss';

const App = () => {

    const logData = () => {
        console.log('foo');
    };

    return (
        <div className="app">
            <span>Test App</span>
            {logData()}
        </div>
    );
};

export default App;
