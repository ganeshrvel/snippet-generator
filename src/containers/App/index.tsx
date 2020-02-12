import React from 'react';
import '../../styles/scss/global.scss';
import styles from './index.scss';
import Header from '../Header';
import Home from '../Home';

const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Home />
    </div>
  );
};

export default App;
