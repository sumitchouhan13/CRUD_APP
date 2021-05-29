// const express = require('express');
// const mongoose = require('mongoose');
import express  from 'express';
import mongoose from 'mongoose';
import route from './route/routes.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const { Router }  = express;

app.use(bodyParser.json({extended : true}));
app.use(bodyParser.urlencoded({extended : true}))
app.use(cors());
app.use('/users' , route);

const PORT = 8000;
const URL = 'mongodb://user:sumitchouhan@crud-shard-00-00.p7vzq.mongodb.net:27017,crud-shard-00-01.p7vzq.mongodb.net:27017,crud-shard-00-02.p7vzq.mongodb.net:27017/PROJECT0?ssl=true&replicaSet=atlas-nptw8a-shard-0&authSource=admin&retryWrites=true&w=majority';

mongoose.connect(URL , {useNewUrlParser : true , useUnifiedTopology : true , useFindAndModify : false}).then(() => {
    app.listen(PORT , () => {
        console.log(`Server is running on PORT ${PORT}`);
    });
}).catch(error => {
    console.log('Error' , error.message);
})
