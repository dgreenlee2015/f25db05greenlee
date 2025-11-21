const mongoose = require("mongoose")
const elephantSchema = mongoose.Schema({
    elephant_name: {type: String, match: /^[A-Za-z ]*$/},
    elephant_population: {type: String, maxlength: 11, required: true},
    elephant_avg_weight: String,
})

module.exports = mongoose.model("Elephant", elephantSchema)
