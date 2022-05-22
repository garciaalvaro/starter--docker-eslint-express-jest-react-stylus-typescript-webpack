import React from "react";
import { createRoot } from "react-dom/client";

import { App } from "../components/App";

const $container = document.getElementById("app");

if (!$container) {
	throw new Error("#app HTML element was not found");
} else {
	const root = createRoot($container);

	root.render(<App />);
}
