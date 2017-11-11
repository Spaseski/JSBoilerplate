var express = require('express');
var path = require('path');
var open = require('open');
var webpack = require('webpack');

var port = 3000;
var app = express();
var compiler = webpack(compiler);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: '/'
}))

app.get('/', function(req, res) {
   res.sendfile(path.join(__dirname, '../app/index.html')); 
});

app.listen(port, function(err){
    if(err) {
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
});