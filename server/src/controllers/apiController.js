const Commit = require('../models/comitModel');

const getCommit = async (req, res) => {
  try {
    const { owner, repository, oid } = req.params;

    // Customize the logic to fetch the commit based on owner, repository, and oid
    const commit = await Commit.findOne({ oid });

    if (!commit) {
      return res.status(404).json({ error: 'Commit not found' });
    }

    res.json(commit);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getCommit,
};
