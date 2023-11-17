const CommitDiff = require('../models/diffModel');

const commitDiffData = [
  {
    "changeKind": "MODIFIED",
    "headFile": {
      "path": "cmd/repo-updater/repos/syncer.go"
    },
    "baseFile": {
      "path": "cmd/repo-updater/repos/syncer.go"
    },
    "hunks": [
      {
        "header": "@@ -63,7 +63,7 @@ type Syncer struct {",
        "lines": [
          {
            "baseLineNumber": 63,
            "headLineNumber": 63,
            "content": " type RunOptions struct {"
          },
          // ... (more lines)
        ]
      },
      {
        "header": "@@ -134,7 +134,7 @@ func (s *syncHandler) Handle(ctx context.Context, tx dbworkerstore.Store, record",
        "lines": [
          // ... (lines for the second hunk)
        ]
      }
    ]
  }
];

const getCommitDiff = async (req, res) => {
  try {
    // For simplicity, assuming you have a predefined commitDiffData
    // In real-world scenario, you would fetch this data from the database

    // Save the commit diff data to the database (optional)
    await CommitDiff.create(commitDiffData);

    // Send the commit diff data as the API response
    res.json(commitDiffData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getCommitDiff,
};
