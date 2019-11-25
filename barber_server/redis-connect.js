const client = require('redis').createClient();

client.on('error', function (err) {
    console.log('Error ' + err);
});

module.exports = client;