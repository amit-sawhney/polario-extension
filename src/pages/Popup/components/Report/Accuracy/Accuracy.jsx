import React from 'react';
import PropTypes from 'prop-types';
import './Accuracy.scss';

/**
 * Returns the JSX for accuracy display of Page URL
 * @param {{accuracy: String}} accuracy the accuracy of the current URL
 * @param {{bias: String}} bias the bias of the current URL 
 */
const Accuracy = ({ accuracy, bias }) => {

    const ACCURACY_COLOR_SCHEME = {
        "mixed": "caution",
        "": "default",
        "fake": "warning",
        "low": "warning",
        "not parsed": "default",
        "high": "excellent",
        "very high": "excellent",
        "mostly factual": "caution",
        "satire": "warning",
        "unlisted": "default",
        "very low": "warning",
    }

    return (
        <div className="accuracy-content">
            {accuracy.length === 0 || accuracy === "not parsed" ? (
                <p>It appears there is no accuracy rating for the bias: <b style={{ textTransform: "uppercase" }}>{bias}</b></p>
            ) : (
                    <div className={`accuracy-wrapper ${ACCURACY_COLOR_SCHEME[accuracy]}`}>
                        {accuracy}
                    </div>
                )}
        </div>
    )
}

Accuracy.propType = {
    accuracy: PropTypes.string.isRequired,
    bias: PropTypes.string.isRequired,
}

export default Accuracy;