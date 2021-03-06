//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";

let count = 0;
setInterval(() => {
	count++;
	let second1 = Math.floor(count / 1000);
	let second2 = Math.floor(count / 100);
	let second3 = Math.floor(count / 10);
	let second4 = Math.floor(count / 1);
	//render your react application
	ReactDOM.render(
		<Home
			second1={second1}
			second2={second2}
			second3={second3}
			second4={second4}
		/>,
		document.querySelector("#app")
	);
}, 1000);
