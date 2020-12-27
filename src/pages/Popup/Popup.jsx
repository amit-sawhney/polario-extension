import React from 'react';
import './Popup.scss';
import Report from './components/Report/Report';

const Popup = () => {

  const [url, setUrl] = React.useState("DEFAULT_URL");

  React.useEffect(() => {

    chrome.runtime.sendMessage({ type: "REQ_PAGE_URL" });

    chrome.runtime.onMessage.addListener(function (message, callback) {
      if (message.type === "PAGE_URL") {
        setUrl(message.response);
      } else {
        console.error("Uncaught response: " + message);
      }
    });
  }, []);

  return (
    <div className="polario-content">
      <h1>Polario Report</h1>
      <h3>{`(${url})`}</h3>
      <Report url={url} />
    </div>
  );
};

export default Popup;
