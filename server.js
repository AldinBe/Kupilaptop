var express = require('express');
var app = express()
var port = process.env.PORT || 5000
var body_parser = require('body-parser')
var mongojs = require('mongojs')
var db = mongojs('localhost:27017/kupilaptopDB', ['laptopi'])

var urlencodedParser = body_parser.urlencoded({
  extended: false
})



app.use(body_parser.json())
app.use(express.static(__dirname + '/static'))

app.get('/laptopi', function (req, res) {
  console.log('I received a GET request');

  db.laptopi.find(function (err, docs) {
    console.log(docs);
    res.json(docs);
  });
});

app.post('/laptopi', urlencodedParser, function (req, res, next) {
  console.log(req.body)

  db.Kartica.insert(req.body, function (err, docs) {
    console.log('Card date inserted successfully')
    res.json(docs)
  })
})



app.get('/laptopi/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);
  db.laptopi.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});

app.put('/laptopi/:id', function (req, res) {
  var id = req.params.id;
  console.log(req.body.name);
  db.laptopi.findAndModify({
    query: {_id: mongojs.ObjectId(id)},
    update: {$set: {name: req.body.name, email: req.body.email, number: req.body.number}},
    new: true}, function (err, doc) {
      res.json(doc);
    }
  );
});

app.listen(port, function(){
  console.log('Node app is running on port', port)
})