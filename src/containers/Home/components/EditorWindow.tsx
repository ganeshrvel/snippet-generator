import React, { useState } from 'react';
import styles from './EditorWindow.scss';

const EditorWindow: React.FC = () => {
  return (
    <div className={styles.container}>
      <textarea placeholder="Description" className={styles.desc} />
      <textarea placeholder="Tab Trigger" className={styles.tabTrigger} />
      <textarea placeholder="Snippet" className={styles.snippet} />
    </div>
  );
};

export default EditorWindow;
