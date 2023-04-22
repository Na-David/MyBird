import React from "react";
import PropTypes from "prop-types";
import "antd/dist/reset.css";
import Head from "next/head";

import wrapper from "../store/configureStore";

const MyBird = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>My--Bird</title>
      </Head>
      <Component />
    </>
  );
};

MyBird.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(MyBird);
