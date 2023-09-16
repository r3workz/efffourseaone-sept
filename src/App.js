import React, { useState } from "react";
import InputField from "./components/InputField";
import Button from "./components/Buttons";

function App() {
    // State variables
    const [num1, setNum1] = useState(0); // number 1
    const [num2, setNum2] = useState(0); // number 2
    const [result, setResult] = useState(""); //for displaying result
    const [status, setStatus] = useState(""); //for displaying status

    return (
        <div className="app">
            <header>
                <h1>React Calculator</h1>
            </header>
            <main>
                {/* Input fields */}
                <InputField
                    name="num1"
                    placeholder="Number 1"
                    onChange={(e) => setNum1(e.target.value)}
                />
                <InputField
                    name="num2"
                    placeholder="Number 2"
                    onChange={(e) => setNum2(e.target.value)}
                />
                <div className="buttons">
                    {/* Buttons for different calculations */}
                    <Button
                        type="add"
                        num1={num1}
                        num2={num2}
                        setResult={setResult}
                        setStatus={setStatus}
                    />
                    <Button
                        type="subtract"
                        num1={num1}
                        num2={num2}
                        setResult={setResult}
                        setStatus={setStatus}
                    />
                    <Button
                        type="multiply"
                        num1={num1}
                        num2={num2}
                        setResult={setResult}
                        setStatus={setStatus}
                    />
                    <Button
                        type="divide"
                        num1={num1}
                        num2={num2}
                        setResult={setResult}
                        setStatus={setStatus}
                    />
                </div>
            </main>
            <footer>
                {/* Display Status message */}
                <div className={status}>{status}</div>
                {/* Display Calculation result */}
                <div className="result">{result}</div>
            </footer>
        </div>
    );
}

export default App;
