// refactor to destructring later
const _ = require('lodash')
const Member = require('../models').Member;


module.exports = {
  create(req, res) {
    let newMember = _.pick(req.body, 'firstName', 'lastName', 'party', 'firstDay', 'inOffice');
    return Member
      .create({newMember})
      .then(member => res.status(201).send(todo))
      .catch(error => res.status(400).send(error))
  }
};
