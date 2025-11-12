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
exports.elephant_detail = async function(req, res)
{
    console.log("detail" + req.params.id)
    try
    {
        result = await Elephant.findById(req.params.id)
        res.send(result)
    }
    catch(error)
    {
        res.status(500)
        res.send(`{"error":document for id ${req.params.id} not found}`);
    }
};

// Handle Costume create on POST.
exports.elephant_create_post = async function(req, res)
{
    console.log(req.body)
    let document = new Elephant();
    document.elephant_name = req.body.elephant_name;
    document.elephant_population = req.body.elephant_population;
    document.elephant_avg_weight = req.body.elephant_avg_weight;
    try
    {
        let result = await document.save();
        res.send(result);
    }
    catch(err)
    {
        res.status(500);
        res.send(`{"error":${err}}`);
    }
};

// Handle Costume delete from on DELETE.
exports.elephant_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Elephant delete DELETE ' + req.params.id);
};

// Handle Costume update form on PUT.
exports.elephant_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Elephant update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.elephant_View_all_Page = async function(req, res)
{
    try
    {
        theElephants = await Elephant.find();
        res.render('elephant', {title: 'Elephant Search Results', results: theElephants});
    }
    catch(err)
    {
        res.status(500);
        res.send(`{"error":${err}}`);
    }
};