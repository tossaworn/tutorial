var express = require('express');
var router = express.Router();
const studentsController = require('../controllers/students_controller.js')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.all('/test', function (req, res, next) {
  res.send('ทดสอบ');
});
router.post('/students/read', function (req, res, next) {
  return studentsController.read(req.body, res);
});
router.post('/students/create', function (req, res, next) {
  return studentsController.create(req.body, res);
});
router.post('/students/update', function (req, res, next) {
  return studentsController.update(req.body, res);
});
router.post('/students/del', function (req, res, next) {
  return studentsController.del(req.body, res);
});

module.exports = router;
