const greeting = require('./greeting');

test("Returns a greeting with a custom name", () =>
{
	expect(greeting("Totoro")).toBe("Hello Totoro!");
});
