const express = require("express");

const app = express();

app.use(express.json());

//In-memory storage
let items = [];
let nextTd = 1;

app.get('/', (req,res) => {
    res.json({message: 'Hello from Express REST API'});
});