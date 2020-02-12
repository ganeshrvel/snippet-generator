import React from 'react';
import styles from './index.scss';
import { SnackbarProps } from './index.types';

// a quick and dirty snackbar implementation
const Snackbar: React.FC<SnackbarProps> = props => {
  const { bodyText } = props;

  return <div className={styles.container}>{bodyText}</div>;
};

export default Snackbar;
