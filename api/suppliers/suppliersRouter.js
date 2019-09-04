const express = require('express');

const router = express.Router();

router.use(express.json());

router.get('/', (req, res) => {
  res.status(200).json({ message: 'suppliers route' });
});

router.get('/:name', (req, res) => {
  const { name } = req.params;
  res.status(200).json({ message: `${name}` });
});

module.exports = router;
