var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Grantfundme' });
});


/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Grantfundme' });
});

/* GET thank you page. */
router.post('/thanks', function (req, res) {
  console.log(req.body);
  res.render('thanks', {req: req.body});
});




module.exports = router;




/* MONGOOSE */
const mongoose = require('mongoose');
const options = { connectTimeoutMS: 5000,
useNewUrlParser: true
}
mongoose.connect("mongodb://ur9sutkz1w2vikoqk4df:FfxZlhA2niJV4lab8FKt@bqfuq26pdsw2xgc-mongodb.services.clever-cloud.com:27017/bqfuq26pdsw2xgc"
);
options, function(err) {
console.log(err);
}

/* Form Schema */
const formSchema = mongoose.Schema({
firstName: {type:String, trim:true},
lastName: {type:String, trim:true},
mail: {type:String, trim:true},
city: {type:String, trim:true},
url: {type:String, trim:true}
});

/* Create form model */
var formModel = mongoose.model('users', formSchema);

router.post("/thanks", function(req, res, next) {
  
  const newUser = new formModel ({
  firstName: req.body.firstname,
  lastName: req.body.lastname,
  mail: req.body.email,
  city: req.body.city,
  url: req.body.website
});
newUser.save(function(error, user, next) {
console.log(newUser);
res.send({err: 0, redirectUrl: "/thankyou"});
});
});

module.exports = router;








