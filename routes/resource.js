var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var elephant_controller = require('../controllers/elephantCollection');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating an Elephant.
router.post('/elephant', elephant_controller.elephant_create_post);
// DELETE request to delete Costume.
router.delete('/elephant/:id', elephant_controller.elephant_delete);
// PUT request to update Costume.
router.put('/elephant/:id', elephant_controller.elephant_update_put);
// GET request for one Costume.
router.get('/elephant/:id', elephant_controller.elephant_detail);
// GET request for list of all Costume items.
router.get('/elephant', elephant_controller.elephant_list);
module.exports = router;