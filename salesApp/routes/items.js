var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Item = require('../models/Item.js')

router.get('/', function(req, res, next) {
  Item.find(function (err, items) {
    if (err) return next(err);
    res.json(items);
  });
});

router.post('/', function(req, res, next) {
	Item.create(req.body, function (err, post) {
		if (err) return next(err);
		res.json(post);
	});
});

router.get('/:id', function(req, res, next) {
	Item.findById(req.params.id, function (err, post) {
		if (err) return next(err);
		res.json(post);
	});
});

router.put('/:id', function(req, res, next){
	Item.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
		if (err) return next(err);
		res.json(post);
	});
});

router.delete('/:id', function(req, res, next) {
  Item.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
