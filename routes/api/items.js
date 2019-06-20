const express = require('express');
const router = express.Router();

//model itemu
const Item = require('../../models/Item');

// @route   GET api/items
// @desc    get  all items
// @access Public // for now
router.get('/', (req, res) => {
  Item.find()
    .sort({ date: -1 }) //sortowanie datą desc
    .then(items => res.json(items))
    .catch(e => console.error(e));
});

module.exports = router;
