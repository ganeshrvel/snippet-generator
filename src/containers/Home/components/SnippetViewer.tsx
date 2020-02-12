import React, { useState } from 'react';
import styles from './SnippetViewer.scss';
import {
  SnippetViewerAppType,
  SnippetViewerProps
} from './SnippetViewer.types';
import { getSnippetBody } from '../helpers';

const SnippetViewer: React.FC<SnippetViewerProps> = props => {
  const { desc, snippet, tabTrigger } = props;

  const [appType, setAppType] = useState<SnippetViewerAppType>('vscode');

  const handleAppTypeClick = (type: SnippetViewerAppType) => {
    setAppType(type);
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerWrapper}>
        <div className={styles.buttonWrapper}>
          <button
            type="button"
            onClick={() => {
              handleAppTypeClick('vscode');
            }}
          >
            VSCode
          </button>
          <button
            type="button"
            onClick={() => {
              handleAppTypeClick('sublime');
            }}
          >
            Sublime
          </button>
          <button
            type="button"
            onClick={() => {
              handleAppTypeClick('atom');
            }}
          >
            Atom
          </button>
        </div>

        <textarea
          readOnly
          value={getSnippetBody(appType, desc, tabTrigger, snippet)}
        />
      </div>
    </div>
  );
};

export default SnippetViewer;
