const mongoose = require('mongoose');

// Wrap Mongoose around local connection to MongoDB
mongoose.connect('mongodb+srv://adrianman562:jrn3mSTVJycEpRdS@cluster0.f8z3vcf.mongodb.net/?retryWrites=true&w=majority', {
  // useFindAndModify: false,  
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// Export connection 
module.exports = mongoose.connection;