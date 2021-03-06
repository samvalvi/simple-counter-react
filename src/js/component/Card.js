import React from "react";
import PropTypes from "prop-types";

function Card(props) {
	return (
		<div className="row">
			<div className="col">
				<div className="card p-5 bg-dark border-light">
					<div className="card-body text-white text-center">
						<i className="fa-3x far fa-clock"></i>
					</div>
				</div>
			</div>

			<div className="col">
				<div className="card p-5 bg-dark border-light">
					<div className="card-body text-white text-center">
						<h2 className="font-weight-bold">
							{props.second1 % 10}
						</h2>
					</div>
				</div>
			</div>

			<div className="col">
				<div className="card p-5 bg-dark border-light">
					<div className="card-body text-white text-center">
						<h2 className="font-weight-bold">
							{props.second2 % 10}
						</h2>
					</div>
				</div>
			</div>

			<div className="col">
				<div className="card p-5 bg-dark border-light">
					<div className="card-body text-white text-center">
						<h2 className="font-weight-bold">
							{props.second3 % 10}
						</h2>
					</div>
				</div>
			</div>

			<div className="col">
				<div className="card p-5 bg-dark border-light">
					<div className="card-body text-white text-center">
						<h2 className="font-weight-bold">
							{props.second4 % 10}
						</h2>
					</div>
				</div>
			</div>
		</div>
	);
}

Card.propTypes = {
	second1: PropTypes.number,
	second2: PropTypes.number,
	second3: PropTypes.number,
	second4: PropTypes.number
};

export default Card;
