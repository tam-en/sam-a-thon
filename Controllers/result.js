router.get('/result/:id', (req, res) => {
  if(!req.user) {
    res.redirect('/auth/signup')
  } else {
    db.result.findAll({
      where: { userId: req.user.id }
    })
    .then((result) => {
      res.render('result/index', { result })
    })
    .catch((err) => {
      console.log('Error in GET /result', err)
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
      where: { userId: req.user.id }
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