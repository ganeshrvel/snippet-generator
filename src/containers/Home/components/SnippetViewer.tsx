import React, { useState } from 'react';
import styles from './SnippetViewer.scss';
import {
  SnippetViewerAppType,
  SnippetViewerProps
} from './SnippetViewer.types';
import { getSnippetBody } from '../helpers';
import { imgsrc } from '../../../utils/imgsrc';

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
            <img
              alt="Visual Studio Code"
              src={imgsrc('button-icons/vscode.png')}
            />
          </button>
          <button
            type="button"
            onClick={() => {
              handleAppTypeClick('sublime');
            }}
          >
            <img alt="Sublime Text" src={imgsrc('button-icons/sublime.png')} />
          </button>
          <button
            type="button"
            onClick={() => {
              handleAppTypeClick('atom');
            }}
          >
            <img alt="Atom" src={imgsrc('button-icons/atom.png')} />
          </button>
        </div>

        <pre>{getSnippetBody(appType, desc, tabTrigger, snippet)}</pre>
      </div>
    </div>
  );
};

export default SnippetViewer;
