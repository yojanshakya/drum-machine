import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import "./options.css"


function SelectButton({onChange, state = true}) {
	let [on, setOn] = useState(state);
	let divRef = useRef();


	let handleClick = (e) => {
		onChange(!on);
		setOn((state)=>  !state);

	}

	return (
		<div className={"select " } ref={divRef} onClick={handleClick} >
			<div className={"switch " + (on?"on":"")}>

			</div>
		</div>
	)
}


function Options({setPower,setBank,display,bank,power, setVolume,volume}) {
	

	return (
		<div className="options">
			<div style={{textAlign:"center"}}>
				<span>Power</span>
				<SelectButton onChange={(power)=>setPower(power)} state={power} />
			</div>

			<div id="display" className="mt-3 mb-3">
				{display}
			</div>

			<input type="range" style={{width: "100%"}} 
				className="mb-3" 
				value={volume}
				onChange={(e)=>setVolume(+e.target.value)} />

			<div style={{textAlign:"center"}}>
				<span>Bank</span>
				<SelectButton onChange={(bank)=>{setBank(bank)}} state={bank} />
			</div>
		</div>
	)
}

Options.propTypes = {
	setPower: PropTypes.func.isRequired,
	setVolume: PropTypes.func.isRequired,
	setBank: PropTypes.func.isRequired,
	display: PropTypes.string.isRequired
}

export default Options;
