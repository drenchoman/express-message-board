var express = require('express');
var router = express.Router();
var dayjs= require('dayjs')
var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)


const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: dayjs().format('dddd/MMM/YY'),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: dayjs().format('dddd/MMM/YY'),
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',
  { title: 'Mini Message Board',
    messages: messages,

  });
});

router.get('/new', function(req, res, next) {
  res.render('form',
  {
    title: "Send a Message!",

  });
});

router.post('/', function(req, res, next){
  let submissionText = req.body.text
  let submissionUser = req.body.user
messages.push({
  text: submissionText,
  user: submissionUser,
  added: dayjs().format('dddd/MMM/YY'),
});
res.redirect('/')
})

module.exports = router;
