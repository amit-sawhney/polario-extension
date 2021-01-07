import React from 'react';
import './NoReport.scss';
import * as animation from '../../../../assets/animations/error.json';
import Lottie from 'react-lottie';



const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation.default,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

/**
 * Returns default JSX for an unkown website
 */
const NoReport = () => {

    return (
        <div>
            <Lottie options={defaultOptions} height={120} width={120} />
            <h4>No report found!</h4>
        </div>
    )
}

export default NoReport;