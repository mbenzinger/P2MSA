
import React, { startTransition } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';


// DEPENDENCIES
const express = require('express')
const { Sequelize } = require('sequelize')
const app = express()

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
const PORT = process.env.PORT
const AWS_RDS = process.env.AWS_RDS
const AWS_RDS_NAME = process.env.AWS_RDS_NAME
const AWS_RDS_PSWRD = process.env.AWS_RDS_PSWRD

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Shoe Box'
    })
})


// This needs to be run before any calls to `query`, `createRecord`, etc.
//initThinBackend({
    // This url is different for each backend, you can find the backend url in the project documentation
   // host: THIN_URI
//});



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
)

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`Listending on port: ${process.env.PORT}`)
})