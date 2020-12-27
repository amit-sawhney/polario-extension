import React from 'react';
import { PropTypes } from 'prop-types';
import axios from 'axios';
import './Report.scss';

/**
 * Generates a JSX report and fetches data from MBFC
 * @param {{url: String}} props Contains the URL for the current page
 */
const Report = (props) => {

    const [bias, setBias] = React.useState("DEFAULT_BIAS");
    const [accuracy, setAccuracy] = React.useState("DEFAULT_ACCURACY");

    React.useEffect(() => {

    }, []);

    return (
        <div>
            <h1>Report page</h1>
            <h2>{`Received URL: ${props.url}`}</h2>
        </div>
    )
}

Report.propTypes = {
    url: PropTypes.string.isRequired
}

export default Report;

