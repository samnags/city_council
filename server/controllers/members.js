// refactor to destructring later
const _ = require('lodash')
const { member } = require('../models');
const { district } = require('../models');

module.exports = {
  create(req, res) {
    let newMember = _.pick(req.body, 'firstName', 'lastName', 'party', 'districtId', 'firstDay', 'inOffice');
    console.log(newMember)
    return member
      .create(newMember)
      .then(member => res.status(201).send(member))
      .catch(error => res.status(400).send(error))
  },
  list(req, res) {
    return member
    .findAll({
      include: [{
        model: district,        
      }],
    })
      .then(members => res.status(200).send(members))
      .catch(error => res.status(400).send(error))
  }
};

// closest solution so far
// got
//
// .findAll({
//   include: [{
//     model: district,
//     as: 'districtId',
//   }],
// })
