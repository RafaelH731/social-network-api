const { connect, connection } = require('mongoose');

connect('mongodb://localhost/thoughtsAndResponses', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
