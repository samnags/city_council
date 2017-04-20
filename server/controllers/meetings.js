// refactor to destructring later
const _ = require('lodash')
const { meeting } = require('../models');

module.exports = {
  create(req, res) {
    console.log(req.body)
    let newMeeting = _.pick(req.body, 'date', 'inSession');
    console.log(newMeeting)
    return meeting
      .create(newMeeting)
      .then(meeting => res.status(201).send(meeting))
      .catch(error => res.status(400).send(error))
  },
  list(req, res) {
    return meeting
      .all()
      .then(meeting => res.status(200).send(meeting))
      .catch(error => res.status(400).send(error))
  }
};
