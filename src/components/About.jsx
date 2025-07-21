import React from "react";

export default function About(props) {
  const itemStyle = {
    color: props.mode === 'dark' ? 'white' : 'black',
    backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white',
    border: props.mode === 'dark' ? '1px solid white' : '1px solid black'
  };

  return (
    <div>
      <div
        className="container accordion"
        id="accordionExample"
      >
        <h1 className="my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
          About Us
        </h1>
        <div className="accordion-item" style={itemStyle}>
          <h2 className="accordion-header">
            <button
              style={itemStyle}
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Analyze your text
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Our application allows you to instantly analyze your text by providing useful statistics like word count, character count, and reading time. You can conveniently preview your content and utilize a range of text manipulation tools, making it ideal for students, writers, and professionals who want to optimize their text for any purpose.
            </div>
          </div>
        </div>

        <div className="accordion-item" style={itemStyle}>
          <h2 className="accordion-header">
            <button
              style={itemStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Free to use
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              This tool is fully free for everyone—there are no subscriptions, premium features, or hidden charges involved. You can access all the utilities as often as you like, making it a cost-effective solution for your everyday text processing needs without any limitations.
            </div>
          </div>
        </div>

        <div className="accordion-item" style={itemStyle}>
          <h2 className="accordion-header">
            <button
              style={itemStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Browser Compatible
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Our application is built using the latest web technologies and works seamlessly across all modern browsers, such as Chrome, Firefox, Edge, and Safari. You don’t need to install any software—just open the app in your favorite browser and start working. Enjoy a smooth, consistent experience no matter how or where you access the tool.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
