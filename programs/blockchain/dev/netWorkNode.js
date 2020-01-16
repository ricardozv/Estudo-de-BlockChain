const rp = require('request-promise');

app.post('/register-and-broadcast-node', function(req, res){
    const newNodeUrl = req.body.newNodeUrl;

});
if(bitcoin.netWorkNodes.indexOf(newNodeUrl) == -1)
bitcoin.netWorkNodes.push(newNodeUrl);

const regNodesPromises = [];

bitcoin.netWorkNodes.forEach(netWorkNodes => {
const requestOptions = {
    uri: netWorkNodeUrl + '/register-node', methode: 'POST', body: newtransaction, json: true
};

Promise.all(regNodesPromisses).then(data => {
        //use the data
});

regNodesPromises.push(rp(requireOptions));

});

rp(requestOptions);

body: {
    newNodeUrl:newNodeUrl
};

json: true;