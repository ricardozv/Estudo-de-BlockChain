const express = require('express')
const uuid = require('uuid/v1');
const app = express();
const bodyParser = require('body-parser');
const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();
const nodeAddresss = uuid().split('-').join('');
const port = process.argv[2];


app.get('/blockchain', function(req, res){
    res.send(bitcoin);
});

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: false}));



app.post('/transaction', function(req, res){
    const blockIndex = bitcoin.createNewTransaction(req.body.amount, req.body.sender, req.body.recipient)
    res.json({note: `Transaction will be added in block ${blockIndex}`});
});


app.listen(port, function(){
    console.log('Listening on port 3001...');

});


