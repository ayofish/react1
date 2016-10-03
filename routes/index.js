var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'React Tutorial' });
});

function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}

router.get('/api/comments', function(req, res, next) {
    if (typeof req.session.comments === "undefined") {
        req.session.comments = [];
    }
    // var data = [
    //     { id: 1, author: "Pete Hunt", text: "This is one comment" },
    //     { id: 2, author: "Jordan Walke", text: "This is *another* comment" }
    // ];

    res.status(200).json(req.session.comments);
});

router.post('/api/comments', function(req, res, next) {
    var data = [
        { id: 1, author: "Pete Hunt", text: "This is one comment" },
        { id: 2, author: "Jordan Walke", text: "This is *another* comment" }
    ];
    var comment = req.body;
    comment.id = guid();
    req.session['comments'].push(comment);
    res.status(200).json(comment);
});


module.exports = router;
