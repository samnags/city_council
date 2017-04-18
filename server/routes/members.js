// const { Members } = ('../models/member')

const router  = require('express').Router();
const { members } = require('../controllers/index')

// actually routing to /api/members
router.get('/members', members.list);

router.post('/members', members.create);

module.exports = router;
