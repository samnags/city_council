// const { Members } = ('../models/member')

const router  = require('express').Router();
const { members } = require('../controllers/index')

// actually routing to /api/members
router.get('/members', (req, res) => res.status(200).send({
  message: 'You have arrived at the api'
}));

router.post('/members', members.create);

module.exports = router;
