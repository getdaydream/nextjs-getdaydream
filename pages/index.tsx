import React, { Fragment } from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import Header from '../containers/Header';

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Home</title>
      </Head>
      <Header></Header>
    </Fragment>
  );
};

export default Home;
