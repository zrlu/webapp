import React from "react";
import PropTypes from "prop-types";

const EditText = (props) => {
    return (
        <div className="EditText">
            <div className="EditText-title">
                {props.name}
            </div>

            <div className="EditText-input">
                <input type={props.type} onChange={props.onChange} value={props.value}/>
            </div>
        </div>
    )
};

EditText.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
};

export default EditText;