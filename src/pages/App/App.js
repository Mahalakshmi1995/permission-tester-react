import React, { useState } from 'react';
import './App.scss';

const App = () => {
    const [accessToken, setAccessToken] = useState('');
    const [refreshToken, setRefreshToken] = useState('');
    const [customerId, setCustomerId] = useState('');

    const handleGetAccessToken = () => {
        if (window.AccessTokenHandler) {
            const accessToken = window.AccessTokenHandler.getAccessToken();
            console.log('access: ', accessToken);
            setAccessToken(accessToken);
        }
    };

    const handleGetRefreshToken = () => {
        if (window.RefreshTokenHandler) {
            const refreshToken = window.RefreshTokenHandler.getRefreshToken();
            console.log('refresh:', refreshToken);
            setRefreshToken(refreshToken);
        }
    };

    const handleGetCustomerId = () => {
        if (window.CustomerIdHandler) {
            const customerId = window.CustomerIdHandler.getCustomerId();
            console.log('customer id: ', customerId);
            setCustomerId(customerId);
        }
    };

    const handleSendSMS = () => {
        window.open(`smsto:9677960622?payload=Sample SMS Message`, '_self');
    };

    const handleSendWhatsapp = () => {
        window.open(`whatsapp:9677960622?payload=Sample Whatsapp Message`, '_self');
    };

    const handleWebviewClose = () => {
        if (window.ActionHandler) {
            window.ActionHandler.closeWebView();
        }
    };

    return (
        <div className="app">
            <div className="app-head">Test App</div>
            <div className="app-body">
                <div>
                    <div>Access Token</div>
                    <div className="content">
                        <button type="button" onClick={handleGetAccessToken}>Click</button>
                        <span>{accessToken}</span>
                    </div>
                </div>
                <hr />
                <div>
                    <div>Refresh Token</div>
                    <div className="content">
                        <button type="button" onClick={handleGetRefreshToken}>Click</button>
                        <div>{refreshToken}</div>
                    </div>
                </div>
                <hr />
                <div>
                    <div>Customer ID</div>
                    <div className="content">
                        <button type="button" onClick={handleGetCustomerId}>Click</button>
                        <div>{customerId}</div>
                    </div>
                </div>
                <hr />
                <div>
                    <div>Send SMS</div>
                    <div className="content">
                        <button type="button" onClick={handleSendSMS}>Click 1</button>
                        <a href="smsto:9677960622?payload=Sample SMS Message">Click 2</a>
                    </div>
                </div>
                <hr />
                <div>
                    <div>Send Whatsapp</div>
                    <div className="content">
                        <button type="button" onClick={handleSendWhatsapp}>Click 1</button>
                        <a href="whatsapp:9677960622?payload=Sample Whatsapp Message">Click 2</a>
                    </div>
                </div>
                <hr />
                <div>
                    <div>Close Webview</div>
                    <div className="content">
                        <button type="button" onClick={handleWebviewClose}>Close</button>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    );
};

export default App;
