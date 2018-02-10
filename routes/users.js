var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});




router.get('/list', function (req, res, next) {

  mongoose.connect('mongodb://admin:YhyeVVW6UEtSjcPp@dev-shard-00-00-4iqtc.mongodb.net:27017,dev-shard-00-01-4iqtc.mongodb.net:27017,dev-shard-00-02-4iqtc.mongodb.net:27017/test?ssl=true&replicaSet=dev-shard-0&authSource=admin');
  var db = mongoose.connection;
  var carSchema = mongoose.Schema({
    model: String, 
    year: Number,
    brand: String,
    color: String,
    owners: [String],
    metadata: Object
  });
  var Car = mongoose.model('cars', carSchema);

  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function () {
    // we're connected!
    console.log('we are connected');

    var Chavelita = new Car({ model: 'Ferrari f430', year: 2017, brand: 'Ferrari', owners: ['Cesar', 'José Manuel'], metadata: {attr1: '123', attr2: 'asd'} });
    Chavelita.save(function (err, fluffy) {
      if (err) return console.error(err);
      else return console.log('saved');
    });

  });


  var response = { status: true, message: 'success', data: [] };
  res.status(200).send(response);
});

router.get('/list1', (req, res) => {
  var response = { status: true, message: 'success', data: [] };
  res.status(200).send(response);
});

module.exports = router;





