// This is the function which is going to be tested.
// In a real project it should be imported from a module
// and the test file could be located closer to the module.
const addTwo = (value: number) => value + 2;

describe("addTwo", () => {
	it("should return the correct output given a positive number", () => {
		expect(addTwo(0)).toBe(2);
		expect(addTwo(1)).toBe(3);
		expect(addTwo(2)).toBe(4);
		expect(addTwo(3)).toBe(5);
		expect(addTwo(9)).toBe(11);
	});

	it("should return the correct output given a negative number", () => {
		expect(addTwo(-1)).toBe(1);
		expect(addTwo(-2)).toBe(0);
		expect(addTwo(-7)).toBe(-5);
		expect(addTwo(-11)).toBe(-9);
	});

	it("should maintain decimal part given a float number", () => {
		expect(addTwo(3.123)).toBe(5.123);
		expect(addTwo(0.001)).toBe(2.001);
		expect(addTwo(-7.123)).toBe(-5.123);
		expect(addTwo(-11.789)).toBe(-9.789);
	});
});
