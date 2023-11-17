const express = require('express');
const apiController = require('../controllers/apiController');
const diffController = require('../controllers/diffController'); // Add this line

const router = express.Router();

// Define your existing API endpoint
router.get('/repositories/:owner/:repository/commits/:oid', apiController.getCommit);

// Define the new API endpoint for commit diff
router.get('/repositories/:owner/:repository/commits/:oid/diff', diffController.getCommitDiff);

module.exports = router;
