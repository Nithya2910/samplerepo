const express = require("express");

const app = express();

app.use(express.json());

app.get('/',(req,res)=> {
    res.json({message: 'Hello from Express REST API'});
});

app.get('/about', (req,res) => {
    res.json({message: 'This is About Us page'});
});

app.get('/add/id1',(req,res)=> {
    res.json({message: 'Hello im from id1'});
});

app.get('/add/id2',(req,res)=> {
    res.json({message: 'Hello im from id2'});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Express REST API running on http://localhost:$(PORT)`);
});