import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Application from './Application';
import {TonConnectUIProvider} from '@ion-gateway/ui-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <TonConnectUIProvider manifestUrl="http://localhost:3000/iongateway-manifest.json">
            <Application/>
        </TonConnectUIProvider>
    </React.StrictMode>
);
