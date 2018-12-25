const mongoose = require ( 'mongoose');

module.exports = function() {
    //mongoose.connect('mongodb://localhost/mSupplyDb')
    mongoose.connect('mongodb://127.0.0.1/my_database_new')
    .then(() => {
        console.log("connection successful");
    })
    .catch(error => {
        console.log(error);
        console.log("connection failed");
    });
}