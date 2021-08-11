const express = require('express');
const db = require('../db');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const data = await db.all();
    res.json(data);
  } catch (err) {
    res.sendStatus(500);
    console.log(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const data = await db.one(req.params.id);
    res.json(data);
  } catch (err) {
    res.sendStatus(500);
    console.log(err);
  }
});

module.exports = router;
