import React, { useEffect } from "react";
import Card from "./Card";
import PropTypes from "prop-types";

//create your first component
export function Home(props) {
	return (
		<div className="m-2 p-3 bg-dark">
			<Card
				second1={props.second1}
				second2={props.second2}
				second3={props.second3}
				second4={props.second4}
			/>
		</div>
	);
}

Home.propTypes = {
	second1: PropTypes.number,
	second2: PropTypes.number,
	second3: PropTypes.number,
	second4: PropTypes.number
};
