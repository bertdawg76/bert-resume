var mongoose = require('mongoose');
var dbURI = process.env.mlabURI;


mongoose.connect(dbURI);

mongoose.connection.on('connected', function(){
  console.log('mongoose connected!');
});

require('../Models/user');
require('../Models/info');
require('../Models/skills');

