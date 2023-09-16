import React, { useEffect } from "react";
import "../Input.css";
import { NavLink } from "react-router-dom";

export default function InputApp({
	inputNumberCallback,
	inputNameCallback,
	inputDateCallback,
	inputCVVCallback,
	number,
	name,
	date,
	cvv,
}) {
	// input field
	const inputNumber = (e) => {
		inputNumberCallback(e.target.value);
	};

	const inputName = (e) => {
		inputNameCallback(e.target.value);
	};

	const inputDate = (e) => {
		inputDateCallback(e.target.value);
	};

	const inputCVV = (e) => {
		inputCVVCallback(e.target.value);
	};

	// random button
	const randomNumber = () => {
		let max = 9999999999999999;
		let min = 1000000000000000;

		inputNumberCallback(Math.floor(Math.random() * (max - min) + min));
	};

	const randomName = async () => {
		const url = await fetch("https://random-data-api.com/api/v2/users");
		const data = await url.json();
		console.log(data["first_name"] + " " + data["last_name"]);

		inputNameCallback(data["first_name"] + " " + data["last_name"]);
	};

	const randomExpiry = () => {
		let max = 1240;
		let min = 100;

		inputDateCallback(Math.floor(Math.random() * (max - min) + min));
	};

	const randomCVV = () => {
		let max = 999;
		let min = 100;

		inputCVVCallback(Math.floor(Math.random() * (max - min) + min));
	};

	const randomAll=()=>{
		randomNumber();
		randomName();
		randomExpiry();
		randomCVV();
	}

	return (
		<>
			<div className="container home">
				<div className="input">
					<div className="input-ele enter-number-div">
						<div
							id="enter-number-title"
							className="enter-number-ele"
						>
							Enter Numbers:
						</div>
						<div
							id="enter-number-field"
							className="enter-number-ele"
						>
							<form>
								<input
									type="text"
									value={number}
									onChange={inputNumber}
								/>
							</form>
						</div>
						<div
							id="enter-number-button"
							className="enter-number-ele"
						>
							<button onClick={randomNumber}>Random</button>
						</div>
					</div>

					<div className="input-ele enter-name-div">
						<div id="enter-name-title" className="enter-name-ele">
							Enter Name:
						</div>
						<div id="enter-name-field" className="enter-name-ele">
							<form>
								<input
									type="text"
									value={name}
									onChange={inputName}
								/>
							</form>
						</div>
						<div id="enter-name-button" className="enter-name-ele">
							<button onClick={randomName}>Random</button>
						</div>
					</div>

					<div className="input-ele enter-expiry-div">
						<div
							id="enter-expiry-title"
							className="enter-expiry-ele"
						>
							Enter Expiry:
						</div>
						<div
							id="enter-expiry-field"
							className="enter-expiry-ele"
						>
							<form>
								<input
									type="text"
									value={date}
									onChange={inputDate}
								/>
							</form>
						</div>
						<div
							id="enter-expiry-button"
							className="enter-expiry-ele"
						>
							<button onClick={randomExpiry}>Random</button>
						</div>
					</div>

					<div className="input-ele enter-cvv-div">
						<div id="enter-cvv-title" className="enter-cvv-ele">
							Enter CVV:
						</div>
						<div id="enter-cvv-field" className="enter-cvv-ele">
							<form>
								<input
									type="text"
									value={cvv}
									onChange={inputCVV}
									placeholder="456"
								/>
							</form>
						</div>
						<div id="enter-cvv-button" className="enter-cvv-ele">
							<button onClick={randomCVV}>Random</button>
						</div>
					</div>

					<div className="input-ele enter-button-div">
						<NavLink
							className=""
							to={"/background"}
							style={{ textDecoration: "none" }}
						>
							<button className="input-button">
								Choose Background
							</button>
						</NavLink>
						<NavLink
							className=""
							to={"/background"}
							style={{ textDecoration: "none" }}
						>
							<button className="input-button" onClick={randomAll}>
								Randomize
							</button>
						</NavLink>
					</div>
				</div>
			</div>
		</>
	);
}
