import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import styles from './index.scss';

const Header = () => {
  return (
    <div className={styles.container}>
      <h1>
        <FontAwesomeIcon icon={faCode} />
        &nbsp;
        <span>Snippet Generator</span>
      </h1>
    </div>
  );
};

export default Header;
