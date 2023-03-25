/// <reference types="cypress" />

describe("Locators", () => {
	beforeEach(() => {
		cy.visit("/elements");
	});

	it("locating elements with get", () => {
		//  Get all elements by tag name
		cy.get("button");

		// Get all elements by className
		cy.get(".btn-with-class");

		// Get all elements with specific classes
		cy.get("[class='Elements-btn btn-with-class']");
		cy.get("[class='Elements-btn btn-with-class more-btn-classes']");

		// Get all elements with id
		cy.get("#btn-with-id");

		// Get all elements by specific attributes
		cy.get("[type='submit']");

		// Get all elements by tag name AND class
		cy.get("button.Elements-btn");

		// Get all elements bt tag name AND class id
		cy.get("button.Elements-btn#btn-with-id");

		// Get all elements with specific data test id
		cy.getByTestId("btn-id-1");
	});

	it("locating elements with contains", () => {
		// Get element by text
		cy.contains("Unique Text");

		// Get element by text
		cy.contains("Not Unique Text");

		// With Selector
		cy.contains("[type='submit']", "Not Unique Text");
		cy.contains("form", "Not Unique Text");

		cy.get("[type='submit']").contains("Not Unique Text");
	});

	it("location elements with find", () => {
		cy.get("#form-1").find(".btn-1");
		cy.get("#form-1").find(".btn-2");
	});
});
