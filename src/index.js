
import React, { startTransition } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

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

// CONTROLLERS 
const shoesController = require('./controllers/shoes_controller')
app.use('/shoes', shoesController)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
)

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`Listending on port: ${process.env.PORT}`)
})