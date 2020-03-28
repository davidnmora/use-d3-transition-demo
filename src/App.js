import React, {useState, useCallback} from 'react';
import './index.css';
import TransitionableCircle from "./TransitionableCircle";


const CIRCLE_RADIUS = 40
const svgCanvas = {
  width: window.innerWidth * 0.8,
  height: 200,
  margin: CIRCLE_RADIUS,
}
const left = {
  cx: svgCanvas.margin,
  cy: svgCanvas.height / 2,
}
const right = {
  cx: svgCanvas.width - svgCanvas.margin,
  cy: svgCanvas.height / 2,
}

const Title = () => (
  <>
    <h1>
      <code>useD3Transition</code> animated circle demo
    </h1>
    <a href="https://www.npmjs.com/package/use-d3-transition" target="_blank" rel="noreferrer noopener">
      <svg width="90" height="90">
        <image xlinkHref="https://img.shields.io/npm/v/use-d3-transition.svg?style=flat"/>
      </svg>
    </a>
  </>
)

function App() {
  const [circlePosition, setCirclePosition] = useState(left)
  const togglePosition = useCallback(() => {
    circlePosition.cx === left.cx
      ? setCirclePosition(right)
      : setCirclePosition(left)
  }, [circlePosition])
  
  return (
    <div className="App">
      <Title/>
      <div>
        <button onClick={togglePosition}>Toggle circle position</button>
      </div>
      <svg width={svgCanvas.width} height={svgCanvas.height} style={{backgroundColor: 'white'}}>
        <TransitionableCircle
          cx={circlePosition.cx}
          cy={circlePosition.cy}
          
          r={CIRCLE_RADIUS}
          style={{fill: 'skyblue'}}
        />
      </svg>
    </div>
  );
}

export default App;
