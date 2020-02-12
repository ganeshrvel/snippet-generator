import React, { useState } from 'react';
import styles from './SnippetViewer.scss';
import {
  SnippetViewerAppType,
  SnippetViewerProps
} from './SnippetViewer.types';

const SnippetViewer: React.FC<SnippetViewerProps> = props => {
  const { desc, snippet, tabTrigger } = props;

  const [appType, setAppType] = useState<SnippetViewerAppType>('vscode');

  const handleAppTypeClick = (type: SnippetViewerAppType) => {
    setAppType(type);
  };

  let snippetBody = '';

  switch (appType) {
    case 'vscode':
      snippetBody = `"${desc}": {
  "prefix": "${tabTrigger}",
  "body": [
    "${snippet}"
  ],
  "description": "${desc}"
}`;
      break;
    case 'sublime':
      snippetBody = `<snippet>
  <content><![CDATA[
${snippet}
]]></content>
  <tabTrigger>${tabTrigger}</tabTrigger>
  <description>${desc}</description>
  <!-- Optional: Set a scope to limit where the snippet will trigger -->
  <!-- <scope >source.python</scope > -->
</snippet>`;
      break;

    case 'atom':
      snippetBody = `'${desc}':
'prefix': '${tabTrigger}'
'body': """
  ${snippet}
"""`;
      break;

    default:
      break;
  }

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

        <textarea readOnly value={snippetBody} />
      </div>
    </div>
  );
};

export default SnippetViewer;
