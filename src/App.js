import React, {useState, useCallback} from 'react';
import './App.css';
import TransitionableCircle from "./TransitionableCircle";

function App() {
  const [circleIsLeft, setCircleIsLeft] = useState({cx: 100, cy: 100})
  const togglePosition = useCallback(() => {
    setCircleIsLeft(!circleIsLeft)
  }, [circleIsLeft])
  
  return (
    <div className="App">
      <h1><code>useD3Transition</code> Demo: animated circle</h1>
      <button onClick={togglePosition}>Toggle circle position</button>
      <svg width={400} height={400}>
        <TransitionableCircle
          cx={circleIsLeft ? 100 : 200}
          cy={20}
          
          r={50}
          style={{fill: 'skyblue'}}
        />
      </svg>
    </div>
  );
}

export default App;
