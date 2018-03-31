var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.get('/about_me', function (req, res,next) {
  var name = req.query.name; 
  var tel = req.query.tel; 
  res.render('about_me', { name:name,tel:tel});
});


module.exports = router;

