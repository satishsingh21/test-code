const user = require('./../models/userModel')
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client('259138665692-fu7djqqbuj7vesmqtrb3idg4hggmcgrg.apps.googleusercontent.com');

var controller = {}
controller.validateToken = function(req, res, next){
    verify(req, res,next ).catch(console.error);
}


async function verify(req, res ,next) {
    const ticket = await client.verifyIdToken({
        idToken: req.body.token,
        audience: '259138665692-fu7djqqbuj7vesmqtrb3idg4hggmcgrg.apps.googleusercontent.com',  // Specify the CLIENT_ID of the app that accesses the backend
        // Or, if multiple clients access the backend:
        //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
    });
    const payload = ticket.getPayload();
    let userInst = new user({
        name : payload.name,
        email: payload.email
    })

    user.find({email : userInst.email}, (err, result)=>{
        if (result.length!=0) {
            if(result[0].email){
            console.log('EMAIL already exists, email: ' + result[0].email);      
            }                                    
            var err = new Error('EMAIL already exists, email: ');
            err.statusCode  = 310;
            return  next(err);
        }
        // call the built-in save method to save to the database
        userInst.save(function(err) {
            if (err) return next(err);
            res.send(userInst);
        });
        
    })
}

module.exports = controller;