var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "hutaer" });
});

// 16进制转rgb格式
router.get('/tool/hex2rgb', function(req, res, next) {
	res.render('hex2rgb');
})

module.exports = router;
