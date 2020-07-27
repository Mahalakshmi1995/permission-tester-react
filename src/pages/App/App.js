import React, { useState, useEffect} from 'react';
import {isIOS} from 'react-device-detect'
//import axios from 'axios';
import './App.scss';




const App = () => {
    //eslint-disable-next-line
    const [accessToken, setAccessToken] = useState('');
    const [refreshToken, setRefreshToken] = useState('');
    const [customerId, setCustomerId] = useState(''); 
    const [expiresIn,setExpiry]=useState('');  
    let iosAccessToken = '';
    let iosRefreshToken = '';    
    let iosCustomerID = '';
    let iosExpiresIn = '';

    //eslint-disable-next-line
    const SwiftAccessTokenHandler = ( AccessToken)=>{    
        iosAccessToken = AccessToken ;     
    }
    
     //eslint-disable-next-line
     const SwiftRefreshTokenHandler = ( RefreshToken)=>{    
        iosRefreshToken = RefreshToken ;     
   }

    //eslint-disable-next-line
    const SwiftExpiresInHandler = ( Expiry )=>{    
        iosExpiresIn = Expiry;   
   }

    //eslint-disable-next-line
    const SwiftGetCustomerIdHandler = ( CustomerId )=>{    
        iosCustomerID = CustomerId ;     
   }

    useEffect(()=>{
     window.AccessTokenHandler = SwiftAccessTokenHandler;
     window.RefreshTokenHandler = SwiftRefreshTokenHandler;
     window.ExpiresInHandler = SwiftExpiresInHandler;
     window.CustomerIDHandler = SwiftGetCustomerIdHandler;
    });
   
   
    const handleGetAccessToken = async() => {  
    
        if (isIOS  === true){          
            setAccessToken(iosAccessToken); 
        }else{
        if (window.AccessTokenHandler) {            
            const accessToken = window.AccessTokenHandler.getAccessToken();            
            setAccessToken(accessToken);
        }}
       
       
    };
   
   const handleGetRefreshToken = () => {
    if (isIOS  === true){          
        setRefreshToken(iosRefreshToken); 
    }else{
        if (window.RefreshTokenHandler) {
            const refreshToken = window.RefreshTokenHandler.getRefreshToken();
            console.log('refresh:', refreshToken);
            setRefreshToken(refreshToken);
        }
    }
    };

    const handleGetCustomerId = () => {
        if (isIOS  === true){          
            setCustomerId(iosCustomerID); 
        }else{
        if (window.CustomerIdHandler) {
            const customerId = window.CustomerIdHandler.getCustomerId();
            console.log('customer id: ', customerId);
            setCustomerId(customerId);
        }
    }
    };

    const handleGetExpiresInTime = () => {
        if (isIOS  === true){          
            setExpiry(iosExpiresIn); 
        }
    }

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

    const handleNewWindow = () => {
        window.open('https://www.google.com/', '_blank', 'noopener,noreferrer');
    };

    const handleSameWindow = () => {
        window.open('https://cdnjs.com/', '_self');
    };

    return (
        <div className="app">
            <div className="app-head">Test App</div>
            <div className="app-body">
                <div>
                    <div>All Headers</div>
                    <div className="content">
                        <button type="button" onClick={handleGetAccessToken}>Click</button>
                        <div>{accessToken}</div>
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
                    <div>Expires In</div>
                    <div className="content">
                        <button type="button" onClick={handleGetExpiresInTime}>Click</button>
                        <div>{expiresIn}</div>
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
                    <div>Open New Window</div>
                    <div className="content">
                        <button type="button" onClick={handleNewWindow}>Click 1</button>
                        <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">Click 2</a>
                    </div>
                </div>
                <hr />
                <div>
                    <div>Redirection</div>
                    <div className="content">
                        <button type="button" onClick={handleSameWindow}>Click 1</button>
                        <a href="https://cdnjs.com/">Click 2</a>
                    </div>
                </div>
                <hr />
                <div>
                    <div>Mail</div>
                    <div className="content">
                        <a href="mailto:test@lynk.co.in?subject=Lynk Subject&body=Lynk Message Body">Click</a>
                    </div>
                </div>
                <hr />
                <div>
                    <div>Phone</div>
                    <div className="content">
                        <a href="tel:9677960622">Click</a>
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

