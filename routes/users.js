const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    if (req.session.comments == undefined) {
      req.session.comments = []
    }
    var data = {
        title: 'Expresso',
        greet: 'Hello!',
        username: '',
        content : '行楽シーズンです。あなたは何をしたいですか？',
        comments: req.session.comments
    };
    res.render('users', data);
});

router.post('/post', (req, res, next) => {
    var msg = req.body['message'];
    var comment = req.body.uname + 'さん： ' + msg;
    req.session.comments.unshift(comment);
    var data = {
        title: 'Expresso',
        greet: 'Hello!',
        username: req.body.uname,
        content: req.body.uname + 'さんは「' + msg + '」と送信しました。',
        comments: req.session.comments
    };
    res.render('users', data);
});

module.exports = router;