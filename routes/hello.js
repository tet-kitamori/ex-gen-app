const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    var data = {
        title: 'Expresso',
        greet: 'Hello!',
        content : '行楽シーズンです。あなたは何をしたいですか？'
    };
    res.render('hello', data);
});

router.post('/post', (req, res, next) => {
    var msg = req.body['message'];
    var data = {
        title: 'Expresso',
        greet: 'Hello!',
        content: 'あなたは「' + msg + '」と送信しました。'
    };
    res.render('hello', data);
});

module.exports = router;