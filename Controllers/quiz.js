// Require needed modules
let csv = require("fast-csv")
let express = require('express')
let request =  require('request')
let real_json = [ {
  "author": "BBC News",
  "description": "US health officials warn the country may lose its \"measles elimination status\" amid multiple outbreaks.",
  "source": "{'id': 'bbc-news', 'name': 'BBC News'}",
  "title": "US in danger of losing measles elimination status",
  "url": "http://www.bbc.co.uk/news/world-us-canada-48468801",
  "real_or_fake": "1"
}]

let fake_json = [{
  "author": "",
  "description": "Attorney General William Barr told CBS that he believes special counsel Robert Mueller could have reached a decision on whether or not there was criminal activity after concluding Mueller's investigation into Russian interference in the 2016 election.",
  "source": "{'id': 'cnn', 'name': 'CNN'}",
  "title": "Barr: Mueller could've reached decision on obstruction - CNN Video",
  "url": "http://us.cnn.com/videos/politics/2019/05/30/robert-mueller-report-obstruction-cbs-intv-william-barr-sot-nr-vpx.cnn",
  "real_or_fake": "1"
},]

//Declare an express router
let router = express.Router()

// GET article from API
router.get('/quiz', (req, res) => {
  db.quiz.createOne({
    where: { userId: req.user.id }
  })
  csv
      .fromPath("../real_news.csv")
      .on("data", function(data){
        console.log(data)
      }) 
    res.send('/quiz')
  })
  

  // POST headline from csv to quiz 

  router.post('/quiz', function (req, res) {
    csv
      .fromPath("../real_news.csv")
      .on("data", function(data){
        console.log(data)
      })
    });

module.exports = router