import React from "react";

const TempConvertButton = ({ convertTemperature }) => {
    /* TASK 4.3: Add a prop to TempConvertButton component to display the outputUnit */

    return <button onClick={convertTemperature}>Convert to </button>;
};

export default TempConvertButton;
