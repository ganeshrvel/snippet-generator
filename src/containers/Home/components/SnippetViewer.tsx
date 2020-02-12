import React, { useState } from 'react';
import classnames from 'classnames';
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

  const appTypeButtonList: {
    type: SnippetViewerAppType;
    label: string;
    iconSrc: string;
  }[] = [
    {
      type: 'vscode',
      label: 'Visual Studio Code',
      iconSrc: 'button-icons/vscode.png'
    },
    {
      type: 'sublime',
      label: 'Sublime Text',
      iconSrc: 'button-icons/sublime.png'
    },
    {
      type: 'atom',
      label: 'Atom',
      iconSrc: 'button-icons/atom.png'
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.innerWrapper}>
        <div className={styles.buttonWrapper}>
          {appTypeButtonList.map(a => (
            <button
              key={a.type}
              className={classnames({
                [styles.isActive]: a.type === appType
              })}
              type="button"
              onClick={() => {
                handleAppTypeClick(a.type);
              }}
            >
              <img alt={a.label} src={imgsrc(a.iconSrc)} />
            </button>
          ))}
        </div>

        <pre>{getSnippetBody(appType, desc, tabTrigger, snippet)}</pre>
      </div>
    </div>
  );
};

export default SnippetViewer;
