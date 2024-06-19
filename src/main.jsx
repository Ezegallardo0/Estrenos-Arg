import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import 'bootswatch/dist/lux/bootstrap.min.css';

const root = createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain="dev-uv00kmo7v871ozw1.us.auth0.com"
    clientId="0thTtqcRs7QzkRLZJj3fJGw5K9k5Da4i"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
);