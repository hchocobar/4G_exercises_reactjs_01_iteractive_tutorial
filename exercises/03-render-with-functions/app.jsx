import React from "react";
import ReactDOM from "react-dom";

// This function returns a string that will be rendered
export const PrintHello = () => {
	return <h1>I Love React</h1>;
};

ReactDOM.render(PrintHello(), document.querySelector("#myDiv"));
