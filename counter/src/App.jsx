import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const handleIncrease = () => {
    setCount((prev) => Number(prev) + Number(step));
  };

  const handleDecrease = () => {
    setCount((prev) => Number(prev) - Number(step));
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <h1>Count: {count}</h1>

      {/* Optional messages */}
      {count === 10 && <p className="msg success">🎉 You hit +10!</p>}
      {count === -10 && <p className="msg danger">😬 You hit -10!</p>}

      <div className="step-control">
        <label>Step: &nbsp;</label>
        <input
          type="number"
          value={step}
          onChange={(e) => setStep(e.target.value)}
          placeholder="Enter step size"
        />
      </div>


      <div className="controls">
        <button onClick={handleIncrease}>Increment</button>
        <button onClick={handleDecrease}>Decrement</button>
        <button className="reset" onClick={handleReset}>RESET </button>
      </div>

      
    </div>
  );
}

export default App;
