const membersController = require('../controllers').members;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'You\'ve hit the Members Api'
  }));

  app.post('/api/members', membersController.create);
};
