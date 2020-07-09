import React, {  useState } from 'react';

import './App.css';
import PadBank from './components/PadBank';
import Options from './components/Options';
import {bankOne, bankTwo} from './banks';



export default function App() {
 
	let [power, setPower] = useState(true);
	let [display, setDisplay] = useState("");
	let [volume, setVolume] = useState(80);
	let [bank, setBank] = useState(false);
	
	
	return (
		<div className="app" id="drum-machine">
			
			<PadBank bank={bank? bankTwo: bankOne} power={power} setDisplay={setDisplay} volume={volume}/>
			<Options setPower={setPower} setBank={setBank}
			 bank={bank} power={power} 
			 setDisplay={setDisplay} 
			 display={display} 
			 setVolume={setVolume}
			 volume={volume}/>
		</div>
	)
}
