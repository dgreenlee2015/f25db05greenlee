const mongoose = require("mongoose")
const elephantSchema = mongoose.Schema({
    elephant_name: String,
    elephant_population: String,
    elephant_avg_weight: String,
})

module.exports = mongoose.model("Elephant", elephantSchema)
