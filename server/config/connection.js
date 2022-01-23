const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// switch to drop database and reset
// mongoose.connect('mongodb://localhost/googlebooks',function(){
//     /* Drop the DB */
//     mongoose.connection.db.dropDatabase();
// });

module.exports = mongoose.connection;
