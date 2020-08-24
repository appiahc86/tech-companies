const express = require('express');
const router = express.Router();
const Company = require('../models/Company');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

//Create new company
router.post('/create', (req, res)=>{

  const newCompany = new Company({
    name: req.body.name,
    location: req.body.location,
    ceo: req.body.ceo
  });

  newCompany.save().then(company => {
    res.send(company);
  });


});

//Get list of all companies
router.get('/all', (req, res) => {
  Company.find({}).lean().then(companies => {
    res.send(companies);
  });
});

//Edit Company
router.patch('/edit/:id', (req, res) => {
  const id = req.params.id;
  Company.findByIdAndUpdate(id, { $set: {
      name: req.body.name,
      location: req.body.location,
      ceo: req.body.ceo
    }})
      .then(updated =>{
    res.send(updated);
  });

});

//Delete
router.delete('/delete/:id', (req, res) => {
  const id = req.params.id;
  Company.findByIdAndRemove(id).then(removed => {
    res.send(removed);
  });
});

module.exports = router;
