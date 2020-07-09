import React from 'react';

function useHover() {
	let [hover, setHover] = React.useState(false);

	let bind = {
		onMouseOver: (e)=>setHover(true),
		onMouseLeave: (e)=>setHover(false)
	}

	return [
		hover,
		bind
	]
}

export default useHover;
