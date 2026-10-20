const express = require('express');
const router = express.Router();
const CarAd = require('../models/CarAd');

// Get all car ads for a user
router.get('/get_posts', async (req, res) => {
  const search = req.query.search;
  const ads = await CarAd.find({ username: search });
  res.json(ads);
});

// Edit ad
router.post('/edit', async (req, res) => {
  const updated = await CarAd.findOneAndUpdate(
    { _id: req.body._id },
    req.body,
    { new: true }
  );
  res.json(updated);
});

// Delete ad
router.post('/remove', async (req, res) => {
  await CarAd.findOneAndDelete({ _id: req.body.cid });
  res.json({ message: 'Deleted successfully' });
});

module.exports = router;
