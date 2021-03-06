import React from 'react';
import styles from './EditorWindow.scss';
import { EditorWindowProps } from './EditorWindow.types';

const EditorWindow: React.FC<EditorWindowProps> = props => {
  const { onSnippetValuesChange } = props;

  return (
    <div className={styles.container}>
      <input
        placeholder="Description"
        className={styles.desc}
        onChange={event => {
          onSnippetValuesChange(event, 'desc');
        }}
        autoFocus // eslint-disable-line jsx-a11y/no-autofocus
      />
      <input
        placeholder="Tab Trigger"
        className={styles.tabTrigger}
        onChange={event => {
          onSnippetValuesChange(event, 'tabTrigger');
        }}
      />
      <textarea
        placeholder="Snippet"
        className={styles.snippet}
        onChange={event => {
          onSnippetValuesChange(event, 'snippet');
        }}
      />
    </div>
  );
};

export default EditorWindow;
