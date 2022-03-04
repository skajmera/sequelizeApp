const User = require('../models').User;
const Channel = require('../models').Channel;

module.exports = {


  getById(req, res) {
    return User
      .findByPk(req.params.id, 
        // {
        // include: [{
        //   model: Channel,
        //   as: 'channels'
        // }
        // ,{
        //   model: Course,
        //   as: 'courses'
        // }
    // ],
    //   }
      )
      .then((user) => {
        if (!user) {
          return res.status(404).send({
            message: 'User Not Found',
          });
        }
        return res.status(200).send(user);
      })
      .catch((error) => res.status(400).send(error.message));
  },

  add(req, res) {
    return User
      .create({
        // _id: req.body.classroom_id,
        name: req.body.name,
        email: req.body.email,
      })
      .then((user) => res.status(201).send(user))
      .catch((error) => res.status(400).send(error));
  },


  update(req, res) {
    return User
      .findByPk(req.params.id, {
        // include: [{
        //   model: Channel,
        //   as: 'classroom'
        // },{
        //   model: Course,
        //   as: 'courses'
        // }],
      })
      .then(user => {
        if (!user) {
          return res.status(404).send({
            message: 'User Not Found',
          });
        }
        return user
          .update({
            name: req.body.name,
            email: req.body.email
          })
          .then(() => res.status(200).send(user))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return User
      .findByPk(req.params.id)
      .then(user => {
        if (!user) {
          return res.status(400).send({
            message: 'User Not Found',
          });
        }
        return user
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },


};