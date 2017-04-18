// refactor to destructring later
const _ = require('lodash')
const { Member } = require('../models');

module.exports = {
  create(req, res) {
    let newMember = _.pick(req.body, 'firstName', 'lastName', 'party', 'firstDay', 'inOffice');
    console.log(newMember)
    return Member
      .create(newMember)
      .then(member => res.status(201).send(member))
      .catch(error => res.status(400).send(error))
  }
};

// .create({
//   firstName: req.body.firstName,
//   lastName: req.body.lastName,
//   party: req.body.party,
//   firstDay: req.body.firstDay,
//   inOffice: req.body.inOffice
// })
