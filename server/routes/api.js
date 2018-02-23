const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'Angusales'
});

connection.connect();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('Express RESTful API');
});

router.get('/customers', (req, res) => {
  connection.query('select * from Customers', (err, rows, fields) => {
    if (!err) {
      res.send(rows)
    } else {
      console.log(err)
    }
  });

});

router.get('/companies', (req, res) => {
  const options = {sql:'select Companies.*, group_concat(Customers.firstName) as customers from Companies right join Customers on Customers.company_name = Companies.company_name group by Companies.company_name'};
  connection.query(options, (err, rows, fields) => {
    if (!err) {
      res.send(rows)
    } else {
      console.log(err)
    }
  });

});

router.post('/companies', (req, res) => {
  let company = new Object({
    company_name: req.body.company_name,
    address: req.body.address,
    country: req.body.country
  });
  connection.query('insert into Companies set ?', company, (err, result) => {
    if (!err) {
      res.send(result)
    } else {
      console.log(err)
    }
  })
});


router.post('/customers', (req, res) => {
  let customer = new Object()
  customer.firstName = req.body.firstName;
  customer.lastName = req.body.lastName;
  customer.company_name = req.body.company;
  customer.customer_email = req.body.email;
  customer.phone = req.body.phone;


  connection.query('insert into Customers set ?', customer, (err, result) => {
    if (!err) {
      res.send(result)
    } else {
      console.log(err)
    }
  })
});



module.exports = router;