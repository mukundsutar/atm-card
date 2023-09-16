import { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import InputApp from "./Components/InputApp";
import Navbar from "./Components/Navbar";
import Generate from "./Components/Generate";
import FrontPreview from "./Components/FrontPreview";
import BackPreview from "./Components/BackPreview";

export default function App() {
	const [number, setNumber] = useState(8765432187654321);
	const [name, setName] = useState("Mukund H. Sutar");
	const [date, setDate] = useState(1512);
	const [cvv, setCVV] = useState(101);

	return (
		<>
			<Navbar />

			<Routes>
				<Route
					path="/"
					element={
						<InputApp
							inputNumberCallback={setNumber}
							inputNameCallback={setName}
							inputDateCallback={setDate}
							inputCVVCallback={setCVV}
							number={number}
							name={name}
							date={date}
							cvv={cvv}
						/>
					}
				/>
				<Route
					path="/background"
					element={
						<div className="container preview">
							<FrontPreview
								number={number}
								name={name}
								date={date}
							/>
							<BackPreview cvv={cvv} />
						</div>
					}
				/>
				<Route path="/generate" element={<Generate />} />
			</Routes>
		</>
	);
}
