
const { Router } = require("express");

const router = Router();

const sales = require('./sales');

router.use('/', sales);

module.exports = router;