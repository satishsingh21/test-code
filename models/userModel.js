const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
  name: { type: String, required: true},
  email: { type: String, required: true}
});

// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('User', userSchema);

module.exports = User;