const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const memorySchema = new Schema({
     source: {
         type: String,
         required: true
     },
     disregarded: {
         type: Boolean,
         default: true
     }
});

module.exports = mongoose.model("Memory", memorySchema);
