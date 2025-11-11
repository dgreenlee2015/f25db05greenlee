var Elephant = require('../models/elephant');

// List of all Elephants
exports.elephant_list = async function(req, res)
{
    try
    {
        theElephants=await Elephant.find();
        res.send(theElephants);
    }
    catch(err)
    {
        res.status(500);
        res.send(`{"error":${err}}`);
    }
};
// for a specific Costume.
exports.elephant_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Elephant detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.elephant_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Elephant create POST');
};
// Handle Costume delete from on DELETE.
exports.elephant_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Elephant delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.elephant_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Elephant update PUT' + req.params.id);
};