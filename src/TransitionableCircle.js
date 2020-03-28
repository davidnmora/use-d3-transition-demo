import React from 'react'
import useD3Transition from 'use-d3-transition'


const TransitionableCircle = ({cx, cy, ...staticAttributes}) => {
	const {ref, attrState} = useD3Transition({attrsToTransitionTo: {cx, cy}, deps: [cx, cy]})
	
	return (
		<circle
			{...staticAttributes}
			
			ref={ref}
			cx={attrState.cx}
			cy={attrState.cy}
		/>
	)
}

export default TransitionableCircle
