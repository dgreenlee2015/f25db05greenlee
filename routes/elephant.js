var express = require('express');
const elephant_controller = require('../controllers/elephantCollection');
var router = express.Router();

/* GET elephants. */
router.get('/', elephant_controller.elephant_View_all_Page);

/* Get detail elephant page */
router.get('/detail', elephant_controller.elephant_view_one_Page);

/* Get create elephant page */
router.get('/create', elephant_controller.elephant_create_Page);

module.exports = router;
