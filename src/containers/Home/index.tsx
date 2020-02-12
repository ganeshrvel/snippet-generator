import React, { useState } from 'react';
import styles from './index.scss';
import { HomeProps } from './index.types';
import EditorWindow from './components/EditorWindow';
import SnippetViewer from './components/SnippetViewer';

const Home: React.FC<HomeProps> = () => {
  const [desc, setDesc] = useState('');
  const [tabTrigger, setTabTrigger] = useState('');
  const [snippet, setSnippet] = useState('');

  const handleSnippetValuesChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
    type: 'desc' | 'tabTrigger' | 'snippet'
  ) => {
    const { value } = event.target;

    switch (type) {
      case 'desc':
        setDesc(value);
        break;

      case 'tabTrigger':
        setTabTrigger(value);
        break;

      case 'snippet':
        setSnippet(value);
        break;

      default:
        break;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerWrapper}>
        <EditorWindow onSnippetValuesChange={handleSnippetValuesChange} />
        <SnippetViewer desc={desc} tabTrigger={tabTrigger} snippet={snippet} />
      </div>
    </div>
  );
};

export default Home;
