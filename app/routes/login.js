let router = require('express').Router();

router.get('/', function(req, res, next) {
    res.render('pages/login');
});

router.post('/auth', function(req,res){
  StudentController.Add(req.body);
});

router.get('/get', function(req,res){
  StudentController.FindAll().then( function(users){
       res.json(users);
  });
});

router.post('/remove', function(req,res){
  StudentController.Remove(req.body.Username);
});

router.get('/findOne', function(req,res){
  StudentController.FindOne(req.query.Firstname).then( function(users){
       res.json(users);
  });
});

module.exports = router;
