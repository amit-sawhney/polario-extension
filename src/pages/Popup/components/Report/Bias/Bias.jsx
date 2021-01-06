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

  React.useEffect(() => {
    if (bias === "least biased" || bias === "least") {
      setDisplayBias("center");
    } else if (bias === "conspiracy" || bias === "conspiracy/pseudoscience" || bias === "pro-science" || bias === "questionable") {
      setIsPoliticalBias(false);
    } else if (bias === "not parsed") {
      setDisplayBias("No bias data");
    } else {
      setDisplayBias("ERROR: Invalid Bias");
    }
  }, []);

  return (
    <div className="bias-content">
      <div className="bias-boxes">
        <div className={`bias-box ${bias === "left" ? "left" : ""}`}>L</div>
        <div className={`bias-box ${bias === "left-center" ? "left-center" : ""}`}>L-C</div>
        <div className={`bias-box ${bias === "least" || bias === "least biased" ? "center" : ""}`}>C</div>
        <div className={`bias-box ${bias === "right-center" ? "right-center" : ""}`}>R-C</div>
        <div className={`bias-box ${bias === "right" ? "right" : ""}`}>R</div>
      </div>
      <article>This source generally has the following bias: {bias} </article>
    </div>
  )
};

Bias.propTypes = {
  bias: PropTypes.string.isRequired,
};

export default Bias;
