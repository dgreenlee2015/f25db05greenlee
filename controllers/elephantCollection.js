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

// for a specific Elephant.
exports.elephant_detail = async function(req, res)
{
    console.log("detail " + req.params.id)
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

// Handle Elephant create on POST.
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

// Handle Elephant delete from on DELETE.
exports.elephant_delete = async function(req, res)
{
    console.log("delete " + req.params.id)
    try
    {
        result = await Elephant.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    }
    catch(err)
    {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

// Handle Elephant update form on PUT.
exports.elephant_update_put = async function(req, res)
{
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try
    {
        let toUpdate = await Elephant.findById(req.params.id)

        // Do updates of properties
        if(req.body.elephant_name)
            toUpdate.elephant_name = req.body.elephant_name;
        if(req.body.elephant_population)
            toUpdate.elephant_population = req.body.elephant_population;
        if(req.body.elephant_avg_weight)
            toUpdate.elephant_avg_weight = req.body.elephant_avg_weight;

        let result = await toUpdate.save();
        console.log("success" + result)
        res.send(result)
    }
    catch(err)
    {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed}`);
    }
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

// Handles a show one view with id specified by query
exports.elephant_view_one_Page = async function(req, res)
{
    console.log("single view for id " + req.query.id)
    try
    {
        result = await Elephant.findById(req.query.id)
        res.render('elephantdetail', {title: 'Elephant Detail', toShow: result});
    }
    catch(err)
    {
        res.status(500)
        res.send(`{'error':${err}}`);
    }
};

// Handle building the view for creating an elephant
exports.elephant_create_Page = function(req, res)
{
    console.log("create view")
    try
    {
        res.render('elephantcreate', {title: 'Elephant Create'});
    }
    catch(err)
    {
        res.status(500)
        res.send(`{'error':${err}}`);
    }
};