import React, {useState, useCallback} from 'react';
import './App.css';
import TransitionableCircle from "./TransitionableCircle";

function App() {
  const [circlePosition, setCirclePosition] = useState({cx: 100, cy: 100})
  const togglePosition = useCallback(() => {
    circlePosition.cx === 100
      ? setCirclePosition({cx: 200, cy: 200})
      : setCirclePosition({cx: 100, cy: 100})
  }, [circlePosition])
  
  return (
    <div className="App">
      <h1><code>useD3Transition</code> Demo: animated circle</h1>
      <button onClick={togglePosition}>Toggle circle position</button>
      <svg>
        <TransitionableCircle
          cx={circlePosition.cx}
          cy={circlePosition.cy}
          
          r={50}
          style={{fill: 'skyblue'}}
        />
      </svg>
    </div>
  );
}

export default App;
