import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	const [mode, setMode] = useState("light");
	const [alert, setAlert] = useState(null);

	const showAlert = (message, type) => {
		setAlert({
			msg: message,
			type: type,
		});
		setTimeout(() => {
			setAlert(null);
		}, 2000);
	};

	const toggleMode = () => {
		if (mode === "light") {
			setMode("dark");
			document.body.style.backgroundColor = "#042743";
			document.body.style.color = "white";
			showAlert("Dark mode has been enabled", "success");
			// document.title = "TextUtils - Dark Mode";
		} else {
			setMode("light");
			document.body.style.backgroundColor = "white";
			document.body.style.color = "black";
			showAlert("Light mode has been enabled", "success");
		}
	};
	return (
		<>
			{/* <Navbar title="Anas" aboutText="About"/> */}
			<Router>
				<Navbar mode={mode} toggleMode={toggleMode} />
				<Alert alert={alert} />
				<div className="container my-3">
					<Routes>
						<Route path="/about" element={<About mode={mode}/>} />
						<Route path="/" element={<TextForm
								showAlert={showAlert}
								mode={mode}
								heading="Try TextUtils - Word counter, Character Counter, Remove Extra spaces"
							/>}/>

					</Routes>
				</div>
			</Router>
		</>
	);
}

export default App;
