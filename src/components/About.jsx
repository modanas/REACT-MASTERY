import React, { useState } from "react";

export default function About() {
	const [myStyle, setMyStyle] = useState({
		color: "black",
		backgroundColor: "white",
	});
 
 const [btnText, setBtnText] = useState("Enable Light Mode")
 const toggleTheme = () => {
  if(myStyle.color === "black") {
   setMyStyle({
    color : "white",
    backgroundColor : "black",
    border: "1px solid white",
   })
   setBtnText("Enable Light Mode")
  } else {
   setMyStyle({
    color : "black",
    backgroundColor : "white"
   })
   setBtnText("Enable Dark Mode")
  }
 }

	return (
		<div>
			<div
				className="container accordion"
				id="accordionExample"
				style={myStyle}
			>
				<h2 className="my-3">About Us</h2>
				<div className="accordion-item" style={myStyle}>
					<h2 className="accordion-header">
						<button
							style={myStyle}
							className="accordion-button"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseOne"
							aria-expanded="true"
							aria-controls="collapseOne"
						>
							Accordion Item #1
						</button>
					</h2>
					<div
						id="collapseOne"
						className="accordion-collapse collapse show"
						data-bs-parent="#accordionExample"
					>
						<div className="accordion-body">
							<strong>This is the first item's accordion body.</strong> It is
							shown by default, until the collapse plugin adds the appropriate
							class that we use to style each element. These class control the
							overall appearance, as well as the showing and hiding via CSS
							transitions. You can modify any of this with custom CSS or
							overriding our default variables. It's also worth noting that just
							about any HTML can go within the <code>.accordion-body</code>,
							though the transition does limit overflow.
						</div>
					</div>
				</div>

				<div className="accordion-item" style={myStyle}>
					<h2 className="accordion-header">
						<button
							style={myStyle}
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseTwo"
							aria-expanded="false"
							aria-controls="collapseTwo"
						>
							Accordion Item #2
						</button>
					</h2>
					<div
						id="collapseTwo"
						className="accordion-collapse collapse"
						data-bs-parent="#accordionExample"
					>
						<div className="accordion-body">
							<strong>This is the second item's accordion body.</strong> It is
							hidden by default, until the collapse plugin adds the appropriate
							class that we use to style each element. These class control the
							overall appearance, as well as the showing and hiding via CSS
							transitions. You can modify any of this with custom CSS or
							overriding our default variables. It's also worth noting that just
							about any HTML can go within the <code>.accordion-body</code>,
							though the transition does limit overflow.
						</div>
					</div>
				</div>

				<div className="accordion-item" style={myStyle}>
					<h2 className="accordion-header">
						<button
							style={myStyle}
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseThree"
							aria-expanded="false"
							aria-controls="collapseThree"
						>
							Accordion Item #3
						</button>
					</h2>
					<div
						id="collapseThree"
						className="accordion-collapse collapse"
						data-bs-parent="#accordionExample"
					>
						<div className="accordion-body">
							<strong>This is the third item's accordion body.</strong> It is
							hidden by default, until the collapse plugin adds the appropriate
							class that we use to style each element. These class control the
							overall appearance, as well as the showing and hiding via CSS
							transitions. You can modify any of this with custom CSS or
							overriding our default variables. It's also worth noting that just
							about any HTML can go within the <code>.accordion-body</code>,
							though the transition does limit overflow.
						</div>
					</div>
				</div>
				<div className="container my-4">
					<button onClick={toggleTheme} type="button" className="btn btn-dark">
					 {btnText}
					</button>
				</div>
			</div>
		</div>
	);
}
