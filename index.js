var web3 = require("web3"),
    request = require("request");

web3.setProvider(new web3.providers.HttpProvider("http://localhost:8545"));
var eth = web3.eth;

var coinbase = eth.coinbase;
console.log("Address: " + coinbase);
var balance = eth.getBalance(coinbase);
console.log("Balance: " + balance);

request("http://api.cryptocoincharts.info/listCoins", function(err, res, body) {
    var data = JSON.parse(body);

    for(var i = 0; i < data.length; i++) {
        if(data[i].id == "etc") {
            console.log("Balance: " + data[i].price_btc * balance + "btc");
        }
    }
});
