describe("Test contact us form", () => {
  it("Should be able to submit the contact us form", () => {
    // cy.visit("http://www.webdriveruniversity.com/");
    cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    //cy.get("#contact-us").click({ force: true });
    cy.get('[name="first_name"]').type("Ranjan");
    cy.get('[name="last_name"]').type("Sahu");
    cy.get('[name="email"]').type("abc.cds@gmail.com");
    cy.get("textarea.feedback-input").type("This is a tesing commet");
    cy.get('[type="submit"]').click();
    cy.get("h1").contains("Thank You for your Message!");
  });

  it("Should be not able to submit the contact us form as all fields are required", () => {
    cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    cy.get('[name="first_name"]').type("Ranjan");
    cy.get('[name="last_name"]').type("Sahu");
    cy.get('[type="submit"]').click();
    cy.get("body").contains("Error");
  });
});
