import React, { useState } from "react";

export default function TextForm(props) {
	const handleUpperClick = () => {
		let newText = text.toUpperCase();
		setText(newText);
		props.showAlert("Converted to Uppercase","success");
	};
	const handleLowerClick = () => {
		let newLowText = text.toLowerCase();
		setText(newLowText);
		props.showAlert("Converted to Lowercase","success");
	};
	const handleOnChange = (event) => {
		setText(event.target.value);
	};
	const handleReverseClick = () => {
		let reversedText = "";
		for (let i = text.length - 1; i >= 0; i--) {
			reversedText += text[i];
			props.showAlert("Reversed text","success");
		}
		console.log(reversedText);
		setText(reversedText);
	};
	const [text, setText] = useState("");

	return (
		<>
			<div className="container mb-3" style={{ color: props.mode === "dark" ? "white" : "black" }}>
				<h1>{props.heading}</h1>
				<textarea
					style={{
						backgroundColor: props.mode === "dark" ? "grey" : "white",
						color: props.mode === "dark" ? "white" : "black",
					}}
					value={text}
					onChange={handleOnChange}
					className="form-control"
					id="myBox"
					rows="8"
					cols="175"
				>
					{text}
				</textarea>
				<button onClick={handleUpperClick} className="btn btn-primary mt-2">
					Convert to Uppercase
				</button>
				<button
					onClick={handleLowerClick}
					className="mx-4 btn btn-primary mt-2"
				>
					Convert to Lowercase
				</button>
				<button onClick={handleReverseClick} className="btn btn-primary mt-2">
					Reverse
				</button>
			</div>
			<div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "black" }}>
				<h2>Your text summary</h2>
				<p>
					{text.split(" ").length} words and {text.length}
				</p>
				<p>{0.008 * text.split(" ").length} minutes read</p>
				<h2>Preview</h2>
				<p>
					{text.length > 0
						? text
						: "Enter something in the textbox above to preview it here"}
				</p>
			</div>
		</>
	);
}
