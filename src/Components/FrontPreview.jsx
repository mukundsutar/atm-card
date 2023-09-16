import React from "react";
import chipimg from "../img/emv-chip.png";

export default function FrontPreview({ number, date, image, name }) {
	const numberString = number.toString();
	let dateString = date.toString();

	if (dateString.length == 3) {
		dateString = "0" + dateString;
	}

	let numbersArray = []; // Initialize an empty array to store the 4-digit groups
	// Split the numberString into 4-digit groups
	for (let i = 0; i < numberString.length; i += 4) {
		const group = numberString.slice(i, i + 4);
		numbersArray.push(group);
	}

	let dateArray = [];
	for (let i = 0; i < dateString.length; i += 2) {
		const group = dateString.slice(i, i + 2);
		dateArray.push(group);
	}

	return (
		<>
			<div id={image} className="front-preview">
				<div className="chip-div">
					<div id="chip" className="card-ele">
						<img src={chipimg} alt="Image not Found" />
					</div>
					<div id="chip-space" className="card-ele break"></div>
				</div>

				<div className="number-div">
					<div id="num1" className="card-ele number">
						{numbersArray[0]}
					</div>
					<div id="num2" className="card-ele number">
						{numbersArray[1]}
					</div>
					<div id="num3" className="card-ele number">
						{numbersArray[2]}
					</div>
					<div id="num4" className="card-ele number">
						{numbersArray[3]}
					</div>
				</div>

				<div className="title-div">
					<div id="holder-name" className="card-ele">
						Card Holder
					</div>
					<div id="title-space" className="card-ele break"></div>
					<div id="expiry" className="card-ele">
						Expiry
					</div>
				</div>

				<div className="name-date-div">
					<div id="name" className="card-ele">
						{name}
					</div>
					<div id="name-date-space" className="card-ele break"></div>

					<div id="date" className="card-ele">
						{dateArray[0]}/{dateArray[1]}
					</div>
				</div>
			</div>
		</>
	);
}
