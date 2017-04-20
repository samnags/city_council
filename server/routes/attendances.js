const router  = require('express').Router();
const { attendances } = require('../controllers/index')

// actually routing to /api/attendances
router.get('/attendances', attendances.list);

router.post('/attendances', attendances.create);

module.exports = router;
