import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initThinBackend, ensureIsUser } from 'thin-backend';
import { ThinBackend } from 'thin-backend-react';

// CONFIGURATION
const PORT = process.env.PORT
const THIN_URI = process.env.THIN_URI
const app = express()

// This needs to be run before any calls to `query`, `createRecord`, etc.
initThinBackend({
    // This url is different for each backend, you can find the backend url in the project documentation
    host: THIN_URI
});

// React entrypoint component
//function App() {
    // The `requireLogin` triggers a redirect to the login page if not logged in already
//    return <ThinBackend requireLogin>
//        <div>Hello World</div>
//    </ThinBackend>
//}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
