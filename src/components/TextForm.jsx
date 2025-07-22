import React, { useState } from "react";

export default function TextForm(props) {
	const handleUpperClick = () => {
		let newText = text.toUpperCase();
		setText(newText);
		props.showAlert("Converted to Uppercase", "success");
	};
	const handleLowerClick = () => {
		let newLowText = text.toLowerCase();
		setText(newLowText);
		props.showAlert("Converted to Lowercase", "success");
	};
	const handleOnChange = (event) => {
		setText(event.target.value);
	};
	const handleReverseClick = () => {
		let reversedText = "";
		for (let i = text.length - 1; i >= 0; i--) {
			reversedText += text[i];
			props.showAlert("Reversed text", "success");
		}
		setText(reversedText);
	};
	const handleClearClick = () => {
		setText("");
		props.showAlert("Text cleared", "success");
	};

	const handleCopyClick = () => {
		navigator.clipboard.writeText(text);
		props.showAlert("Copied to clipboard", "success");
	};

	const handleExtraSpaces = () => {
		let newText = text.replace(/\s+/g, " ").trim();
		setText(newText);
		props.showAlert("Extra spaces removed", "success");
	};
	const handleSpeak = () => {
		let msg = new SpeechSynthesisUtterance();
		msg.text = text;
		window.speechSynthesis.speak(msg);
		props.showAlert("Speaking...", "success");
	};
	const [text, setText] = useState("");

	return (
		<>
			<div
				className="container mb-3"
				style={{ color: props.mode === "dark" ? "white" : "black" }}
			>
				<h1 className="mb-4">{props.heading}</h1>
				<textarea
					style={{
						backgroundColor: props.mode === "dark" ? "#13466e" : "white",
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
				<button
					disabled={text.length === 0}
					onClick={handleUpperClick}
					className="mx-1 my-1 btn btn-primary mt-2"
				>
					Convert to Uppercase
				</button>
				<button
					disabled={text.length === 0}
					onClick={handleLowerClick}
					className="mx-1 my-1 btn btn-primary mt-2"
				>
					Convert to Lowercase
				</button>
				<button
					disabled={text.length === 0}
					onClick={handleReverseClick}
					className="mx-1 my-1 btn btn-primary mt-2"
				>
					Reverse
				</button>

				<button
					disabled={text.length === 0}
					onClick={handleClearClick}
					className="mx-1 my-1 btn btn-danger mt-2"
				>
					Clear Text
				</button>

				<button
					disabled={text.length === 0}
					onClick={handleCopyClick}
					className="mx-1 my-1 btn btn-primary mt-2"
				>
					Copy Text
				</button>

				<button
					disabled={text.length === 0}
					onClick={handleExtraSpaces}
					className="mx-1 my-1 btn btn-primary mt-2"
				>
					Remove Extra Spaces
				</button>

				<button
					disabled={text.length === 0}
					onClick={handleSpeak}
					className="mx-1 my-1 btn btn-success mt-2"
				>
					Speak
				</button>
			</div>
			<div
				className="container my-3"
				style={{ color: props.mode === "dark" ? "white" : "black" }}
			>
				<h2>Your text summary</h2>
				<p>
					{
						text.split(/\s+/).filter((element) => {
							return element.length !== 0;
						}).length
					}{" "}
					words and {text.length}
				</p>
				<p>
					{0.008 *
						text.split(" ").filter((element) => {
							return element.length !== 0;
						}).length}{" "}
					minutes read
				</p>
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
