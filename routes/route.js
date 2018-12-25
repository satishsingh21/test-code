const controller = require('./../controllers/signupController');

module.exports = function(app) {

    // app.post('/api/validateToken', (req, res, next)=>{
    //     verify(req, res,next ).catch(console.error);
    // });
    app.post('/api/validateToken', controller.validateToken);
}