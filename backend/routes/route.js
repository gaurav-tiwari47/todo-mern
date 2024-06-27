const express = require('express');
const router = express.Router();

const { addTodo } = require('./../controllers/control')

router.post('/addTodo',addTodo);

module.exports = router;