
const { Router } = require("express");

const router = Router();

const get = require('./get');

router.use('/', get)

module.exports = router;