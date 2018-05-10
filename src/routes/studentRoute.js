const express = require('express');
const router = express.Router();

const studentController = require('../controllers/studentController');

// router.get('/api/:studentid', studentController.getStudentInfo);

router.get('/api/:studentid', (req,res) => {
  res.send("Hello World!");
});

module.exports = router;
