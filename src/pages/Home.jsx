import React from 'react';

//importing typewriter-effect

// Typewrite effect NPM and code from https://www.geeksforgeeks.org/how-to-create-typewriter-effect-in-reactjs/

import Typewriter from "typewriter-effect";
import '../App.css'

function Home() {
	return (
		<div className="type">
			<Typewriter

      loop: true

				onInit={(typewriter) => {
					typewriter
  
						.typeString("Need MongoDB?")
						.pauseFor(1000)
						.deleteAll()
						.typeString("Need help hosting Express.js?")
            .pauseFor(1000)
						.deleteAll()
            .typeString("Want to upgrade to the power of React?")
            .pauseFor(1000)
						.deleteAll()
            .typeString("Need to keep it secure on Nodejs?")
            .pauseFor(1000)
						.deleteAll()
            .typeString("Let me be your MERN developer!")
						.start()
            
				}}
			/>
		</div>
	);
}

export default Home;
