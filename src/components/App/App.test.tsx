import React from "react";
import { mount, ReactWrapper } from "enzyme";

import { App } from "./App";

const wrapper: ReactWrapper = mount(<App />);

describe("App", () => {
	it("should render without throwing an error", () => {
		expect(wrapper.find("div").length).toBe(1);
	});
});
