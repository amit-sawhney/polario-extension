import React from 'react';
import { PropTypes } from 'prop-types';
import './Bias.scss';

/**
 * Constructs and returns the Bias JSX
 * @param {String} bias the String bias returned from the MBFC
 */
const Bias = ({ bias }) => {

  const [displayBias, setDisplayBias] = React.useState("DEFAULT_DISPLAY_BIAS");
  const [isPoliticalBias, setIsPoliticalBias] = React.useState(true);

  const NONPOLITICAL_COLOR_SCHEME = {
    "conspiracy": "fake",
    "conspiracy/pseudoscience": "fake conspiracy-pseudo",
    "pro-science": "science",
    "questionable": "questionable",
    "fake": "fake",
    "satire": "fake",
  }

  React.useEffect(() => {
    if (bias === "least biased" || bias === "least") {
      setDisplayBias("center");
    } else if (bias === "conspiracy" || bias === "conspiracy/pseudoscience" || bias === "pro-science" || bias === "questionable" || bias === "fake" || bias === "satire") {
      setIsPoliticalBias(false);
    } else if (bias === "not parsed") {
      setDisplayBias("No bias data");
    } else if (bias === "left" || bias === "left-center" || bias === "right-center" || bias === "right") {
      setDisplayBias(bias);
    } else {
      setDisplayBias("ERROR: Invalid Bias");
    }
  }, []);

  return (
    <div className="bias-content">
      {isPoliticalBias ? (
        <div>
          <div className="bias-boxes">
            <div className={`bias-box ${bias === "left" ? "left" : ""}`}>L</div>
            <div className={`bias-box ${bias === "left-center" ? "left-center" : ""}`}>L-C</div>
            <div className={`bias-box ${bias === "least" || bias === "least biased" ? "center" : ""}`}>C</div>
            <div className={`bias-box ${bias === "right-center" ? "right-center" : ""}`}>R-C</div>
            <div className={`bias-box ${bias === "right" ? "right" : ""}`}>R</div>
          </div>
          <p>This source generally has the following bias: {displayBias} </p>
        </div>
      ) : (
          <div className={`nonpolitical-bias ${NONPOLITICAL_COLOR_SCHEME[bias]}`}>
            {bias}
          </div>
        )}
    </div>
  )
};

Bias.propTypes = {
  bias: PropTypes.string.isRequired,
};

export default Bias;
