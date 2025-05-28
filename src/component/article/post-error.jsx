import React from "react";
import PropTypes from "prop-types";
import styles from './form-button.module.css';

const PostError = ({msg}) => {
  return <div className={styles['post-error-container']}>{msg}</div>;
};

PostError.propTypes = {
  msg: PropTypes.string.isRequired,
};

export default PostError;
