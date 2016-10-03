var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'React Tutorial' });
});

router.get('/api/comments', function(req, res, next) {
    var data = [
        { id: 1, author: "Pete Hunt", text: "This is one comment" },
        { id: 2, author: "Jordan Walke", text: "This is *another* comment" }
    ];
    res.status(200).json(data);
});

module.exports = router;
