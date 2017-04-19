// refactor to destructring later
const _ = require('lodash')
const { District } = require('../models');

module.exports = {
  create(req, res) {
    let newDistrict = _.pick(req.body, 'districtId');
    console.log(newDistrict)
    return District
      .create(newDistrict)
      .then(district => res.status(201).send(district))
      .catch(error => res.status(400).send(error))
  },
  list(req, res) {
    return District
      .all()
      .then(districts => res.status(200).send(districts))
      .catch(error => res.status(400).send(error))
  }
};
