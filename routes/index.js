var express = require('express');
var router = express.Router();

const channelController = require('../controller').channel;
const userController = require('../controller').user;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ title: 'Express' });
});

/* Channel Router */
router.get('/api/channel/:id', channelController.getById);
router.post('/api/channel', channelController.add);
router.put('/api/channel/:id', channelController.update);
router.delete('/api/channel/:id', channelController.delete);


/// user Router
router.get('/api/user/:id', userController.getById);
router.post('/api/user', userController.add);
router.put('/api/user/:id', userController.update);
router.delete('/api/user/:id', userController.delete);


module.exports = router;