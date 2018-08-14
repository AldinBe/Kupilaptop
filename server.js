var express = require('express');
var app = express()
var port = process.env.PORT || 5000
var body_parser = require('body-parser')
var mongojs = require('mongojs')
var db = mongojs('localhost:27017/kupilaptopDB', ['laptopi', 'users'])


app.use(body_parser.json())
app.use(express.static(__dirname + '/static'))

app.get('/laptopi', function (req, res) {
  console.log('I received a GET request');

  db.laptopi.find(function (err, docs) {
    console.log(docs);
    res.json(docs);
  });
});

app.get('/users', function (req, res) {
  console.log('I received a GET request');

  db.users.find(function (err, docs) {
    console.log(docs);
    res.json(docs);
  });
});


app.post('/laptopi', function(req, res) {
  req.body._id = null;
  var laptop = req.body;
  db.collection('laptopi').insert(laptop, function(err, data) {
      if (err) return console.log(err);
      res.setHeader('Content-Type', 'application/json');
      res.send(laptop);
  })
});

app.post('/users', function(req, res) {
  req.body._id = null;
  var user = req.body;
  db.collection('users').insert(user, function(err, data) {
      if (err) return console.log(err);
      res.setHeader('Content-Type', 'application/json');
      res.send(user);
  })
});


app.delete('/laptopi/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);
  db.laptopi.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});


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
    update: {$set: {ime: req.body.ime,brend: req.body.brend,vrsta: req.body.vrsta,procesor: req.body.procesor,procesorGeneracija: req.body.procesorGeneracija,brzinaProcesora: req.body.brzinaProcesora,ram: req.body.ram,graficka: req.body.graficka,vrstaGraficke: req.body.vrstaGraficke,kapacitetGraficke: req.body.kapacitetGraficke,vrstaMemorije: req.body.vrstaMemorije,kapacitetMemorije: req.body.kapacitetMemorije,velicina: req.body.velicina,tourName: req.body.tourName, cijena: req.body.cijena}},
    new: true}, function (err, doc) {
      res.json(doc);
    }
  );
});

app.listen(port, function(){
  console.log('Node app is running on port', port)
})