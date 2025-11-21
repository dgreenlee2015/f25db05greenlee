var express = require('express');
const elephant_controller = require('../controllers/elephantCollection');
var router = express.Router();

const secured = (req, res, next)=> {
    if(req.user)
    {
        return next();
    }
    res.redirect("/login");
}

/* GET elephants. */
router.get('/', elephant_controller.elephant_View_all_Page);

/* Get detail elephant page */
router.get('/detail', elephant_controller.elephant_view_one_Page);

/* Get create elephant page */
router.get('/create', elephant_controller.elephant_create_Page);

/* Get create update page */
router.get('/update', secured, elephant_controller.elephant_update_Page);

/* Get delete elephant page */
router.get('/delete', elephant_controller.elephant_delete_Page);

module.exports = router;
