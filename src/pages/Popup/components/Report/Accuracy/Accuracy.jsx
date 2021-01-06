import React from 'react';
import PropTypes from 'prop-types';
import './Accuracy.scss';

/**
 * Returns the JSX for accuracy display of Page URL
 * @param {{accuracy: String}} accuracy Props contains the variables
 */
const Accuracy = ({ accuracy }) => {

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
            <div className={`accuracy-wrapper ${ACCURACY_COLOR_SCHEME[accuracy]}`}>
                {accuracy}
            </div>
        </div>
    )
}

Accuracy.propType = {
    accuracy: PropTypes.string.isRequired
}

export default Accuracy;