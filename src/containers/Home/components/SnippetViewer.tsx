import React, { useState } from 'react';
import styles from './SnippetViewer.scss';

const SnippetViewer: React.FC = () => {
  return (
    <div className={styles.container}>
      <textarea readOnly />
    </div>
  );
};

export default SnippetViewer;
