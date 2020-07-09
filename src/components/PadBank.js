import React,{ useRef,useEffect } from 'react';
import PropTypes from 'prop-types'
import "./padbank.css"



function DrumPad({ keyData, power, setDisplay,volume }) {

	let { keyTrigger,url,keyCode,id } = keyData;
	let audio = useRef();
	let pad = useRef();

	let keyHandler = (e) => {
		if (e.keyCode === keyCode) {
			activatePad(e.keyCode);
		}
	};

	useEffect(
		() => {
			document.addEventListener("keydown", keyHandler)

			return () => {
				document.removeEventListener("keydown", keyHandler)
			}
		}
	);

	let activatePad = () => {

		pad.current.classList.toggle("pressed");
		if(power){
			playSound();
			setDisplay(id)
			pad.current.classList.add("active")
		}
		setTimeout(
			() => {
				pad.current.classList.toggle("pressed");
				pad.current.classList.remove("active")
			},150
		)
	}

	let playSound = () => {
		audio.current.volume = volume/100;
		audio.current.currentTime = 0;
		audio.current.play();
	}


	return (
		<div className="drum-pad" id={id} onClick={() => activatePad(keyCode)} ref={pad} >
			<audio src={url} ref={audio} className="clip" id={keyTrigger}/>
			{keyTrigger}
		</div>
	)
}

DrumPad.propTypes = {
	power: PropTypes.bool.isRequired,
	setDisplay: PropTypes.func.isRequired,
	volume: PropTypes.number,
	keyData: PropTypes.exact({
		keyCode: PropTypes.number,
		keyTrigger: PropTypes.string,
		id: PropTypes.string,
		url: PropTypes.string
	})
}


function PadBank({ bank,power,setDisplay,volume }) {
	return (
		<div className="pad-bank">
			{bank.map(
				(item,i)=>{
					return <DrumPad key={i} volume={volume} keyData={item} power={power} setDisplay={setDisplay}/>
				}
			)}
		</div>
	)
}

PadBank.propTypes = {
	power: PropTypes.bool.isRequired,
	setDisplay: PropTypes.func.isRequired,
	volume: PropTypes.number,
	bank: PropTypes.arrayOf(
		PropTypes.exact({
			keyCode: PropTypes.number,
			keyTrigger: PropTypes.string,
			id: PropTypes.string,
			url: PropTypes.string
		})
	)
}



export default PadBank;
