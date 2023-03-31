import React from 'react'
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';

const MyBird = ({Component}) => {
  return (
    <Component />
  )
};

MyBird.propTypes = {
    Component: PropTypes.elementType.isRequired,
}

export default MyBird;
