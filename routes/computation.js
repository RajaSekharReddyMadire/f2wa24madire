var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  var max=100
  var x
  console.log(req.query.x)
  if(req.query.x!=undefined)
  {
    x=req.query.x
  }
  else
  {
    x=Math.floor(Math.random()*max)
  }
  let result=Math.clz32(x)
  res.render('Computation',{x:x,result:result});
});

module.exports = router;
