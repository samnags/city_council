const router  = require('express').Router();
const { districts } = require('../controllers/index')

// actually routing to /api/districts
router.get('/districts', districts.list);

router.post('/districts', districts.create);

module.exports = router;
