// Require needed modules
let csv = require("fast-csv")
let express = require('express')
let request =  require('request')

//Declare an express router
let router = express.Router()

// GET article from API
router.get('/', (req, res) => {
    res.send('home')
  })

  // POST article from API
  router.post('/', (req, res) => {
    res.send('home')
  })

  router.post('/', function (req, res) {
    csv
      .fromPath("../real_news.csv")
      .on("data", function(data){
        console.log(data)
      })
      // const fileRows = [];
    
      // open uploaded file
      // csv.fromPath(req.file.path)
      //   .on("data", function (data) {
      //     fileRows.push(data); // push each row
      //   })
      //   .on("end", function () {
      //     console.log(fileRows)
      //     fs.unlinkSync(req.file.path); 
      //   })
    });

module.exports = router