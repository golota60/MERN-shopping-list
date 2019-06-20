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
    .then(items => res.json(items));
});

// @route   POST api/items
// @desc    add a post
// @access Public // for now
router.post('/', (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });

  newItem.save()
    .then(item => res.json(item));
});

// @route   DELETE api/items
// @desc    delete a post
// @access Public // for now
router.delete('/:id', (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success:false}))
}); 




module.exports = router;
