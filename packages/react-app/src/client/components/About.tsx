import React from 'react';
import { Helmet } from 'react-helmet';
import Styles from './About.css';

export default () => (
  <React.Fragment>
    <Helmet>
      <title>About</title>
    </Helmet>
    <h1 className={Styles.title}>About</h1>
  </React.Fragment>
);
