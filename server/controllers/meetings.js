// refactor to destructring later
const _ = require('lodash')
const { Meeting } = require('../models');

module.exports = {
  create(req, res) {
    let newMeeting = _.pick(req.body, 'date', 'inSession');
    console.log(newMeeting)
    return Meeting
      .create(newMeeting)
      .then(meeting => res.status(201).send(meeting))
      .catch(error => res.status(400).send(error))
  },
  list(req, res) {
    return Meeting
      .all()
      .then(meeting => res.status(200).send(meeting))
      .catch(error => res.status(400).send(error))
  }
};
