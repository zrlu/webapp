import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const Button = (props) => {
    const {
        onClick,
        name
    } = props;

    return (
        <div className="Button">
            <button onClick={onClick}>{name}</button>
        </div>
    )
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
};

export default Button;