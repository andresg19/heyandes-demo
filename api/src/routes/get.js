const { Router } = require("express");
require('dotenv').config();
const router = Router();

router.get('/', async(req, res, next) => {
  try {
    res.send('hello world!');
  } catch (error) {
    res.send('error', `${error}`);
  }
});

  module.exports = router;