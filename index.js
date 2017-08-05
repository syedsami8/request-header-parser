var express = require('express');
var app = express();

app.set('port',(process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));


app.get('/api/whoami', function (req, res) {
    
    res.send({
        ipaddress: req.headers['x-forwarded-for'] ||
                   req.connection.remoteAddress || req.ip,
        language: req.headers["accept-language"].split(",")[0],
        software: req.headers["user-agent"].match(/\((.*?)\)/)[1]
    });
    
});

app.listen(app.get('port'), function () {
    console.log('Running on 5555 port!');
});
