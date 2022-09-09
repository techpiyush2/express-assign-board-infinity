const express = require('express');
const AllControllers = require('../controllers/allControllers')

const router = express.Router();

router.post('/student/add', AllControllers.craeteStudent);
router.get('/student/studentsList', AllControllers.getStudentsList);


module.exports = router;




