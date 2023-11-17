const mongoose = require('mongoose');

const lineSchema = new mongoose.Schema({
  baseLineNumber: Number,
  headLineNumber: Number,
  content: String,
});

const hunkSchema = new mongoose.Schema({
  header: String,
  lines: [lineSchema],
});

const fileSchema = new mongoose.Schema({
  path: String,
});

const commitDiffSchema = new mongoose.Schema({
  changeKind: String,
  headFile: fileSchema,
  baseFile: fileSchema,
  hunks: [hunkSchema],
});

const CommitDiff = mongoose.model('CommitDiff', commitDiffSchema);

module.exports = CommitDiff;
