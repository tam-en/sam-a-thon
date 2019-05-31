router.get('/', (req, res) => {
  if(!req.user) {
    res.redirect('/auth/signup')
  } else {
    db.result.findAll({
      where: { userId: req.user.id }
    })
    .then((faves) => {
      res.render('profile/index', { faves })
    })
    .catch((err) => {
      console.log('Error in GET /favorites', err)
      res.render('404')
    })
  }
})


router.post('/result', (req, res) => {
  if( !req.user) {
    res.redirect('/auth/signup')
  } else {
    console.log(req.body)
    console.log(req.user.id)
    db.result.findAll({
      
    })
    .then((result) => {
      res.redirect('/profile')
    })
    .catch(err => {
      console.log(err)
      res.redirect('/login')
    })
  }
})