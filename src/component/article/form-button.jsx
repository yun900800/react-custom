import React,{useState} from "react";
import PropTypes from "prop-types";
import styles from './form-button.module.css';

const FormButton = ({ onClick, setQuery, query,text }) => {
    return (
        <form
            onSubmit={(event) => {
                onClick(event);
                event.preventDefault();
            }}
            className={styles['input-button-container']}
        >
            <input
                type="text"
                value={query}
                placeholder={query}
                onChange={(event) => setQuery(event.target.value)}
                className={styles['input-field']}
            />
            <button
                type="submit"
                className={styles['submit-button']}
            >
                {text}
            </button>
        </form>
    );
};

FormButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  setQuery: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default FormButton;
