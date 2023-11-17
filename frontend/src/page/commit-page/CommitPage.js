import React, { useState } from "react";
import { CommitPageWrapper, CommitDetails, CodeDiff } from "./CommitPage.style";
import useFetchData from "../../customHooks/useFetchData";

const CommitPage = ({ match }) => {
  const { owner, repository, oid } = match.params;
  const [commitDetails, setCommitDetails] = useState([]);
  const [codeDiff, setCodeDiff] = useState([]);
  const [error, setError] = useState(null);

  const commitDetailsUrl = `http://localhost:5000/repositories/${owner}/${repository}/commits/${oid}`;
  const codeDiffUrl = `http://localhost:5000/repositories/${owner}/${repository}/commits/${oid}/diff`;

  useFetchData(commitDetailsUrl, setCommitDetails, setError);
  useFetchData(codeDiffUrl, setCodeDiff, setError);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <CommitPageWrapper>
      {commitDetails.map((commit, index) => (
        <CommitDetails key={index}>
          <h1>Commit Details</h1>
          <h2>{commit.message}</h2>
          <p>Author: {commit.author?.name}</p>
          <p>Date: {commit.author?.date}</p>
          <p>Committer: {commit.committer?.name}</p>
          <p>Commit Date: {commit.committer?.date}</p>
          <p>Parent Commit: {commit.parents?.[0]?.oid}</p>
        </CommitDetails>
      ))}
      <h2>Code Diff</h2>
      {codeDiff.map((fileDiff, index) => (
        <div key={index}>
          <h3>{fileDiff.headFile?.path}</h3>
          <CodeDiff>
            {fileDiff.hunks.map((hunk, hunkIndex) => (
              <div key={hunkIndex}>
                <pre>{hunk.header}</pre>
                {hunk.lines.map((line, lineIndex) => (
                  <div key={lineIndex} style={{ backgroundColor: getBackgroundColor(line) }}>
                    {line.content}
                  </div>
                ))}
              </div>
            ))}
          </CodeDiff>
        </div>
      ))}
    </CommitPageWrapper>
  );
};
  
  const getBackgroundColor = (line) => {
    if (line.baseLineNumber === null) {
      return '#ffcccc'; // Added lines
    } else if (line.headLineNumber === null) {
      return '#ffe6cc'; // Removed lines
    } else {
      return '#ffffff'; // Unchanged lines
    }
  };
  
  export default CommitPage;