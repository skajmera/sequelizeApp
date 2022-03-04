const Channel = require('../models').Channel;
const User = require('../models').User;

module.exports = {
//   list(req, res) {
//     return Channel
//       .findAll({
//         include: [{
//           model: User,
//           as: 'user'
//         }],
//         order: [
//           ['createdAt', 'DESC'],
//           [{ model: User, as: 'user' }, 'createdAt', 'DESC'],
//         ],
//       })
//       .then((channel) => res.status(200).send(channel))
//       .catch((error) => { res.status(400).send(error); });
//   },

  getById(req, res) {
    return Channel
      .findByPk(req.params.id, {
        include: [{
          model: User,
          as: 'users'
        }],
      })
      .then((channel) => {
        if (!channel) {
          return res.status(404).send({
            message: 'Channel Not Found',
          });
        }
        return res.status(200).send(channel);
      })
      .catch((error) => {
        console.log(error);
        res.status(400).send(error);
      });
  },

  add(req, res) {
    return Channel
      .create({
        title: req.body.title,
        user_id:req.body.user_id
      })
      .then((channel) => res.status(201).send(channel))
      .catch((error) => res.status(400).send(error));
  },

  addWithStudents(req, res) {
    return Channel
      .create({
        title: req.body.title,
        user_id: req.body.user_id,
      }, {
      	include: [{
          model: User,
          as: 'users'
        }]
      })
      .then((channel) => res.status(201).send(channel))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Channel
      .findByPk(req.params.id, {
        include: [{
          model: User,
          as: 'users'
        }],
      })
      .then(channel => {
        if (!channel) {
          return res.status(404).send({
            message: 'Channel Not Found',
          });
        }
        return channel
          .update({
            title: req.body.title
          })
          .then(() => res.status(200).send(channel))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return Channel
      .findByPk(req.params.id)
      .then(channel => {
        if (!channel) {
          return res.status(400).send({
            message: 'Channel Not Found',
          });
        }
        return channel
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

};