// Require needed modules
let express = require('express')
let request =  require('request')

//Declare an express router
let router = express.Router()

// Reference the models
let db = require('../models')

//GET /profile
router.get('/', (req, res) => {
  if(!req.user) {
    res.redirect('/auth/signup')
  } else {
    db.result.findAll({
      where: { userId: req.user.id }
    })
    .then((faves) => {
      res.render('profile/index', { results })
    })
    .catch((err) => {
      console.log('Error in GET /results', err)
      res.render('404')
    })
  }
})

//GET/edit/:id
router.get('/edit/:id', (req, res) => {
  db.user.findByPk(req.params.id)
    .then(user => {
      res.render('profile/edit', { user })
    })
  })

// PUT (put edited user info on profile)
router.put('/edit', (req, res) => {
  db.user.update({
    userName: req.body.userName,
    age: req.body.age,
    gender: req.body.gender,
    educationLevel: req.body.educationLevel,
    politicalView: req.body.politicalView,
    travel: req.body.travel
  },
  {where: { id: req.user.id } }
  )
  .then(function(user) {
      res.redirect('/profile')
    }).catch(function(error) {
        res.render('404')
    })
})

//POST results
router.post('/results', (req, res) => {
  if( !req.user) {
    res.redirect('/auth/signup')
  } else {
    console.log(req.body)
    console.log(req.user.id)
    db.result.create({
      userId: req.user.id,
      
    })
    .then((results) => {
      res.redirect('/profile')
    })
    .catch(err => {
      console.log(err)
      res.redirect('/signup')
    })
  }
})


// DELETE /remove/faves
router.delete('/', (req, res) => {
  db.result.destroy({
    where: { id: req.body.id }
  })
  .then(deletedResult => {
    res.redirect('/profile')
  })
  .catch(err => {
    console.log(err)
    res.render('404')
  })
})

module.exports = router