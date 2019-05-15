const express = require('express');
const router = express.Router();

const ctrlUser = require('./controllers/loginController');

router.post('/authenticate', ctrlUser.authenticate)

module.exports = router;