const mongoose = require('mongoose');

const commitSchema = new mongoose.Schema({
  oid: String,
  message: String,
  author: {
    name: String,
    date: Date,
    email: String,
  },
  committer: {
    name: String,
    date: Date,
    email: String,
  },
  parents: [
    {
      oid: String,
    },
  ],
});

const Commit = mongoose.model('Commit', commitSchema);

module.exports = Commit;
