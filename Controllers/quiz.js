// Require needed modules
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

module.exports = router