import React, { useState } from 'react';
import styles from './index.scss';
import { HomeProps } from './index.types';
import EditorWindow from './components/EditorWindow';
import SnippetViewer from './components/SnippetViewer';

const Home: React.FC<HomeProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerWrapper}>
        <EditorWindow />
        <SnippetViewer />
      </div>
    </div>
  );
};

export default Home;
