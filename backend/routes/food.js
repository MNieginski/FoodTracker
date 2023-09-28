const express = require('express')
const router = express.Router()

const foodCtrl = require('../controllers/food')

// Routes

// Index
router.get("/", foodCtrl.index);

// Create
router.post("/", foodCtrl.create);

// Show
router.get("/:id", foodCtrl.show);

// Delete
router.delete("/:id", foodCtrl.delete);

// Update
router.put("/:id", foodCtrl.update);

module.exports = router