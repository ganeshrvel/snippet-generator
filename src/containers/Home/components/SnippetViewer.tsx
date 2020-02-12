import React, { useState } from 'react';
import classnames from 'classnames';
import styles from './SnippetViewer.scss';
import {
  SnippetViewerAppType,
  SnippetViewerProps
} from './SnippetViewer.types';
import { getSnippetBody } from '../helpers';
import { imgsrc } from '../../../utils/imgsrc';
import Snackbar from '../../../components/Snackbar';
import { undefinedOrNull } from '../../../utils/functs';

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

// eslint-disable-next-line compat/compat
const isCopyAllowed = navigator.clipboard;

const SnippetViewer: React.FC<SnippetViewerProps> = props => {
  const { desc, snippet, tabTrigger } = props;

  const [appType, setAppType] = useState<SnippetViewerAppType>('vscode');
  const [snackbarText, setSnackbarText] = useState<string | null>(null);

  const handleAppTypeClick = (type: SnippetViewerAppType) => {
    setAppType(type);
  };

  const isSnackbarTextEmpty =
    undefinedOrNull(snackbarText) || snackbarText === '';

  const handleSnackbar = (text: string | null = null) => {
    if (undefinedOrNull(text)) {
      setSnackbarText(null);

      return;
    }

    setSnackbarText(text);

    setTimeout(() => {
      setSnackbarText(null);
    }, 5000);
  };

  const copyToClipboard = (text: string) => {
    if (!isCopyAllowed) {
      return;
    }

    // eslint-disable-next-line compat/compat
    navigator.clipboard.writeText(text);

    handleSnackbar(text);
  };

  const snippetBody = getSnippetBody(appType, desc, tabTrigger, snippet);

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

        <pre>{snippetBody}</pre>

        {isCopyAllowed && (
          <button
            type="button"
            className={styles.copyAll}
            onClick={() => {
              copyToClipboard(snippetBody);
            }}
          >
            Copy
          </button>
        )}

        {!isSnackbarTextEmpty && <Snackbar bodyText="Copied!" />}
      </div>
    </div>
  );
};

export default SnippetViewer;
