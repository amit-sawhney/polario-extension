import React from 'react';
import { PropTypes } from 'prop-types';
import axios from 'axios';
import './Report.scss';

const MBFC_API_URL = "http://mbfcapi.herokuapp.com/";
const DEFAULT_REPORT = {
    name: "DEFAULT_REPORT_NAME",
    display_name: "DEFAULT_DISPLAY_NAME",
    url: "DEFAULT_URL",
    bias: "DEFAULT_BIAS",
    accuracy: "DEFAULT_ACCURACY",
    mbfc_url: "DEFAULT_MBFC_URL",
    verified_date: "DEFAULT_VERIFIED_DATE",
}
const REPORT_NOT_FOUND = 404;

/**
 * Generates a JSX report and fetches data from MBFC
 * @param {{url: String}} props Contains the URL for the current page
 */
const Report = (props) => {

    const [report, setReport] = React.useState(DEFAULT_REPORT);

    React.useEffect(() => {
        const response = retrieveMBFCReport(props.url);
        response.then(response => {
            setReport(response);
        });
    }, []);


    return (
        <div>
            <h1>Report page</h1>
            <h2>{`Received URL: ${report.bias}`}</h2>
        </div>
    )
}

Report.propTypes = {
    url: PropTypes.string.isRequired
}

export default Report;

/**
 * returns the 
 * @param {string} url The current page url.
 */
async function retrieveMBFCReport(url) {
    console.log(url);
    const response = await axios.get(MBFC_API_URL);
    const data = response.data;
    const report = data.sources.find(source => {
        // MBFC API doesn't include "www." for certain sources
        return source.url.indexOf(url) !== -1 || source.url.indexOf(url.substring(4)) !== -1;
    });
    if (report === undefined && report === null) {
        return REPORT_NOT_FOUND;
    } else {
        return report;
    }
}