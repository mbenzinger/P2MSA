
import React, { startTransition } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initThinBackend, ensureIsUser } from 'thin-backend';
import { ThinBackend } from 'thin-backend-react';

// DEPENDENCIES
const express = require('express')
const { Sequelize } = require('sequelize')
const app = express()




// This needs to be run before any calls to `query`, `createRecord`, etc.
initThinBackend({
    // This url is different for each backend, you can find the backend url in the project documentation
    host: THIN_URI
});

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
const PORT = process.env.PORT
const THIN_URI = process.env.THIN_URI
const AWS_RDS = process.env.AWS_RDS
const AWS_RDS_NAME = process.env.AWS_RDS_NAME
const AWS_RDS_PSWRD = process.env.AWS_RDS_PSWRD

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Shoe Box'
    })
})

// CONTROLLERS 
const shoesController = require('./controllers/shoes_controller')
app.use('/shoes', shoesController)

// React entrypoint component
// function App() {
//     //The `requireLogin` triggers a redirect to the login page if not logged in already
//    return <ThinBackend requireLogin>
//        <div>Hello World</div>
//    </ThinBackend>
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`Listending on port: ${process.env.PORT}`)
})