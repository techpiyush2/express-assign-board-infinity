const express = require('express');
const AllControllers = require('../controllers/allControllers')

const router = express.Router();


router.post('/age', AllControllers.getAge);


module.exports = router;