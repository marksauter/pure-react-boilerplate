import React from 'react';
import { connect } from 'react-fela';

import mapStylesToProps from './styles';

export const Header =
  ({ text, styles = {} }) => (
    <header className={styles.container}>
      <h1 className={styles.title}>{ text }</h1>
    </header>
  );

export default connect(mapStylesToProps)(Header);
