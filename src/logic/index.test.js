const greeting = require('./index');

test("Returns a greeting with a custom name", () =>
{
	expect(greeting("Totoro")).toBe("Hello Totoro!");
});
