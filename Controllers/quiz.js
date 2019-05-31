// Require needed modules
let csv = require("fast-csv")
let express = require('express')
let request =  require('request')

//Declare an express router
let router = express.Router()

// GET article from API
router.get('/', (req, res) => {
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

  router.post('/', function (req, res) {
    csv
      .fromPath("../real_news.csv")
      .on("data", function(data){
        console.log(data)
      })
    });

module.exports = router