import React from 'react';
import styles from '../../styles/scss/app.module.scss';
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
        <img src='./public/suzy.jpeg' alt='' />
      </div>
    </>
  );
};

export default Home;
