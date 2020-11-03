import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const App = styled.div`
  ${tw` h-screen flex flex-col justify-center items-center border  `};
  line-height: 3rem;
`;

const AppTitle = styled.h1`
  ${tw` text-gray-700 text-4xl `}
`;
const AppSubtitle = styled.h4`
  ${tw` text-gray-800 text-xl `}
`;

const Home = () => {
  return (
    <>
      <App>
        <AppTitle>Webpack, React and Babel Boilerplate</AppTitle>
        <AppSubtitle>
          Support {/* eslint-disable */}
          <a href='https://tailwindcss.com/' target='_blank' tw='text-teal-600'>
            TailwindCss{' '}
          </a>{' '}
          and
          <a
            target='_blank'
            href='https://styled-components.com/'
            tw='text-yellow-600'
          >
            {' '}
            Styled-Component
          </a>
        </AppSubtitle>
      </App>
    </>
  );
};

export default Home;
