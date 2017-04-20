// refactor to destructring later
const _ = require('lodash')
const { attendance } = require('../models');
const { district } = require('../models');

module.exports = {  
  create(req, res) {
    let newAttendancer = _.pick(req.body, 'meetingId', 'memberId', 'attended');
    console.log(newAttendance)
    return attendance
      .create(newAttendance)
      .then(attendance => res.status(201).send(attendance))
      .catch(error => res.status(400).send(error))
  },
  list(req, res) {
    return attendance
    .findAll()
      .then(attendances => res.status(200).send(attendances))
      .catch(error => res.status(400).send(error))
  }
};
