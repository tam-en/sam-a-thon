// Require needed modules
let csv = require("fast-csv")
let express = require('express')
let request =  require('request')
// let real_json = [ {
//   "author": "BBC News",
//   "description": "US health officials warn the country may lose its \"measles elimination status\" amid multiple outbreaks.",
//   "source": "{'id': 'bbc-news', 'name': 'BBC News'}",
//   "title": "US in danger of losing measles elimination status",
//   "url": "http://www.bbc.co.uk/news/world-us-canada-48468801",
//   "real_or_fake": "1"
// }]

// let fake_json = [{
//   "author": "",
//   "description": "Attorney General William Barr told CBS that he believes special counsel Robert Mueller could have reached a decision on whether or not there was criminal activity after concluding Mueller's investigation into Russian interference in the 2016 election.",
//   "source": "{'id': 'cnn', 'name': 'CNN'}",
//   "title": "Barr: Mueller could've reached decision on obstruction - CNN Video",
//   "url": "http://us.cnn.com/videos/politics/2019/05/30/robert-mueller-report-obstruction-cbs-intv-william-barr-sot-nr-vpx.cnn",
//   "real_or_fake": "1"
// },]

//Declare an express router
let router = express.Router()
// Itsa fake db!
// IN the future, this will be randomly generated from your two jsons
let questions = [{
  "title": "Mueller speaks, but he's still an enigma",
  "real_or_fake": "1"
},
{
  "title": "Third House Republican blocks disaster aid bill",
  "real_or_fake": "1"
},
{
  "title": "Oregon, awash in marijuana, takes steps to curb production",
  "real_or_fake": "1"
},
{
  
  "title": "Is genetic modification the future of fighting disease?",
  "real_or_fake": "1"
},
{
  "title": "Barr: Mueller 'could've reached a conclusion' on obstruction of justice",
  "real_or_fake": "1"
}, 
{"title": "Report: Happiness Does Not Measurably Increase Based On Zipline Ownership Once Family Owns 7 Ziplines",
"real_or_fake": "0"
},
{
"title": "Special Guest At Sea Lion Show Just Another Sea Lion",
"real_or_fake": "0"
},
{
"title": "Fortnite Is Having Martin Shkreli Hold An In-Game Seminar On How To Jack Up Drug Prices",
"real_or_fake": "0"
},
{
"title": "Close Fucking Call: This Product That Got A New Look Still Has The Same Great Taste",
"real_or_fake": "0"
},
{
"title": "Why Are You Still Sleeping On U.S. Womens Soccer? Asks Sports Websites First Article About Womens Soccer In Four Years",
"real_or_fake": "0"
},] // MAKE SURE THERE ARE 10

let correct = 0
let wrong = 0

// let rof = Math.floor(Math.random() * 1)
// if rof === 0, than the headline is fake
// if rof === 1, than the headline is real

// GET article from API
router.get('/:index', (req, res) => {
  // if (rof === 0) {
  //   let toSend = {
  //     question: real_json[Math.floor(math.random*real_json.length)].question, 
  //     rof: 1 
  //   }
  // } else {
  //   let toSend = {
  //     question: fake_json[Math.floor(math.random*fake_json.length)].question, 
  //     rof: 0 
  //   }
  // }
  // console.log(toSend)
  let toSend = {
    question: questions[req.params.index].title,
    rof: questions[req.params.index].real_or_fake
  }
  res.render('quiz', {toSend})
})
  
  // POST headline from csv to quiz 

  router.post('/', function (req, res) {
    // Your res.body should be 
    // {
    //   questionId: 1,
    //   answer: 0
    // }

    // Find question by looking at questions[req.body.questionId]
    if (answer === questions[req.body.questionId].real_or_fake) { 
      correct = correct + 1
    } else {
      wrong = wrong + 1
    }

    if (questionId < 9) {
      res.redirect(`quiz/${questionId + 1}`) 
    } else if (questionId === 9) {
      res.redirect('/result')
    }
  });

  // add quiz/result

  router.get('/result', (req, res) => {
    final_score = correct
    // clear the right and wrong back to 0
    correct =0
    wrong = 0
    res.render('score', { correct: final_score })
  })

module.exports = router

