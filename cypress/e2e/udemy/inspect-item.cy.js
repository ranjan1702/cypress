describe("Test contact us form", () => {
  it("Click using text", () => {
    cy.visit("http://www.automationteststore.com/");
    cy.get(".prdocutname").contains("Skinsheen Bronzer Stick").click();
  });

  it("Click using index", () => {
    cy.visit("http://www.automationteststore.com/");
    cy.get(".fixed_wrapper").find(".productname").eq(0).click();
  });
});
