const router  = require('express').Router();
const { meetings } = require('../controllers/index')

// actually routing to /api/members
router.get('/meetings', meetings.list);

router.post('/meetings', meetings.create);

module.exports = router;
