import React, { useState } from 'react';
import styles from './SnippetViewer.scss';
import { SnippetViewerProps } from './SnippetViewer.types';

const SnippetViewer: React.FC<SnippetViewerProps> = props => {
  const { desc, snippet, tabTrigger } = props;

  const snippetBody = `"${desc}": {
  "prefix": "${tabTrigger}",
  "body": [
    ""${snippet}""
  ],
  "description": "${desc}"
  }`;

  return (
    <div className={styles.container}>
      <textarea readOnly value={snippetBody} />
    </div>
  );
};

export default SnippetViewer;
