var express = require('express');
const elephant_controller = require('../controllers/elephantCollection');
var router = express.Router();

/* GET elephants. */
router.get('/', elephant_controller.elephant_View_all_Page);

module.exports = router;
