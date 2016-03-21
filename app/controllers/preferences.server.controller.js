mongoose = require('mongoose');
var User = require('./../schema.js').User;

exports.render = function(req, res) {
    User.findOne({username : req.session.username }, 'firstname lastname preferred_units email',function(err,obj){
        res.render('preferences', {
            name : req.session.name,
        	firstname : obj.firstname,
            lastname : obj.lastname,
            preferred_units : obj.preferred_units,
            email : obj.email,
            username : req.session.username
        });
    });
};
