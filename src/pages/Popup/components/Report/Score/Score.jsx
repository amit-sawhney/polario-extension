import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Score.scss';

const DEFAULT_SCORE = -1;
const BIAS_SCORES = {
    "left": 1,
    "left-center": 3,
    "least": 4,
    "least biased": 4,
    "right-center": 3,
    "right": 1,
    "fake": 0,
    "conspiracy": 0,
    "conspiracy/pseudoscience": 0,
    "satire": 0,
    "questionable": 1,
    "pro-science": 4,
}
const ACCURACY_SCORES = {
    "": 0,
    "not parsed": 0,
    "unlisted": 0,
    "satire": 0,
    "fake": 0,
    "very low": 1,
    "low": 2,
    "mixed": 3,
    "mostly factual": 4,
    "high": 5,
    "very high": 6,
}

/**
 * Calculates and displays the score for the current web page
 * @param {string} accuracy the accuracy associated with the web page
 * @param {string} bias the bias associated with the web page
 */
const Score = ({ accuracy, bias }) => {

    const [score, setScore] = React.useState(DEFAULT_SCORE);

    React.useEffect(() => {
        let temp_score = 0;
        temp_score += BIAS_SCORES[bias] + ACCURACY_SCORES[accuracy];
        setScore(temp_score);
    }, []);

    return (
        <div className="score-content">
            <CircularProgressbarWithChildren value={score * 10}>
                <h1 className="score-text">{score}</h1>
            </CircularProgressbarWithChildren>
        </div>
    )
}

Score.propTypes = {
    accuracy: PropTypes.string.isRequired,
    bias: PropTypes.string.isRequired
}

export default Score;