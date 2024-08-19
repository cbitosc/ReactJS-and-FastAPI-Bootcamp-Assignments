import React, { useState, useEffect } from "react";
import TempConvertButton from "../components/TempConvertButton";

const TemperatureConverter = () => {
    const [inputTemp, setInputTemp] = useState("");
    const [inputUnit, setInputUnit] = useState("Celsius");
    const [outputUnit, setOutputUnit] = useState("Fahrenheit");
    const [outputTemp, setOutputTemp] = useState("");

    // TASK 4.2: Compute the convertedTemp for all the below cases.
    const convertTemperature = () => {
        let temp = parseFloat(inputTemp);
        if (isNaN(temp)) {
            setOutputTemp("Invalid Input");
            return;
        }

        let convertedTemp;
        if (inputUnit === "Celsius" && outputUnit === "Fahrenheit") {
        } else if (inputUnit === "Celsius" && outputUnit === "Kelvin") {
        } else if (inputUnit === "Fahrenheit" && outputUnit === "Celsius") {
        } else if (inputUnit === "Fahrenheit" && outputUnit === "Kelvin") {
        } else if (inputUnit === "Kelvin" && outputUnit === "Celsius") {
        } else if (inputUnit === "Kelvin" && outputUnit === "Fahrenheit") {
        } else {
            convertedTemp = temp; // Same unit conversion
        }

        setOutputTemp(convertedTemp.toFixed(2));
    };

    useEffect(() => {
        // TASK 4.5: Update the converted temperature automatically whenever inputTemp or inputUnit or outputUnit changes.
    }, []);

    return (
        <div className="page-bg converter">
            <div className="island">
                <h3>Temperature Converter</h3>
                <div className="input-section">
                    <select
                        value={inputUnit}
                        onChange={(e) => setInputUnit(e.target.value)}
                    >
                        <option value="Celsius">Celsius</option>
                        <option value="Fahrenheit">Fahrenheit</option>
                        <option value="Kelvin">Kelvin</option>
                    </select>
                    <input
                        type="number"
                        value={inputTemp}
                        onChange={(e) => setInputTemp(e.target.value)}
                        placeholder="Enter temperature"
                    />
                </div>
                <div className="output-section">
                    {/* TASK 4.1: Create a select component for outputUnit similar to the inputUnit select component. */}
                    <input
                        type="text"
                        value={outputTemp}
                        readOnly
                        placeholder="Converted temperature"
                    />
                </div>
                {/* TASK 4.4: Pass outputUnit as a prop to TempConvertButton */}
                <TempConvertButton convertTemperature={convertTemperature} />
            </div>
        </div>
    );
};

export default TemperatureConverter;
