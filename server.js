var express = require('express');
var app = express();
var port = process.env.PORT || 8000

app.use(express.static(__dirname + '/material'));

app.get('/', (req, res) => res.sendStatus(200));
app.listen(port,function(){
  console.log('Node app is running on port', port);
});