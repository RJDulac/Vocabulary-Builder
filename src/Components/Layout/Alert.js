import React from "react";

const Alert = ({ alert, setAlertToNull }) => {
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        {alert.message} <button onClick={setAlertToNull}>X</button>
      </div>
    )
  );
};

export default Alert;
