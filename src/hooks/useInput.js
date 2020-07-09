import React from 'react'

const useInput = (initialValue) => {
	let [input, setInput] = React.useState(initialValue);

	let bind={
		value: input,
		onChange: (e)=> {setInput(e.target.value)}
	}

	let reset = ()=> setInput(initialValue);

	return [
		input,
		bind,
		reset,
		setInput, 
	]
}

export default useInput;
