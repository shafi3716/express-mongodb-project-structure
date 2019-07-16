var router = require('express').Router();

// authentication
router.use('/api', require('./auth/auth'));

module.exports = router;