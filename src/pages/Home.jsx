import React from 'react';
import styles from '../scss/app.module.scss';
// import Title from '@components/Title';
// import SubTitle from '@components/SubTitle';

const Home = () => {
  return (
    <>
      <div className={styles.app}>
        <h1 className={styles.appTitle}>
          Webpack, React and Babel Boilerplate
        </h1>
        <h3 className={styles.subtitle}>
          Support {/* eslint-disable */}
          Css Modules and Scss
        </h3>
      </div>
    </>
  );
};

export default Home;
