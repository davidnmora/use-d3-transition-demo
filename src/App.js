import React, {useState, useCallback} from 'react';
import './App.css';
import TransitionableCircle from "./TransitionableCircle";


function App() {
  const svgCanvas = {
    width: window.innerWidth * 0.8,
    height: 200,
    margin: 20,
  }
  const left = {
    cx: svgCanvas.margin,
    cy: svgCanvas.height / 2,
  }
  const right = {
    cx: svgCanvas.width - svgCanvas.margin,
    cy: svgCanvas.height / 2,
  }
  
  const [circlePosition, setCirclePosition] = useState(left)
  const togglePosition = useCallback(() => {
    circlePosition.cx === left.cx
      ? setCirclePosition(right)
      : setCirclePosition(left)
  }, [circlePosition])
  
  return (
    <div className="App">
      <h1><code>useD3Transition</code> Demo: animated circle</h1>
      <div>
        <button onClick={togglePosition}>Toggle circle position</button>
      </div>
      <svg width={svgCanvas.width} height={svgCanvas.height} style={{backgroundColor: 'white'}}>
        <TransitionableCircle
          cx={circlePosition.cx}
          cy={circlePosition.cy}
          
          r={20}
          style={{fill: 'skyblue'}}
        />
      </svg>
    </div>
  );
}

export default App;
