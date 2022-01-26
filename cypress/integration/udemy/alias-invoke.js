describe("Allias and invoke", () => {
  it("validate specific product", () => {
    cy.visit("http://www.automationteststore.com/");
    cy.get(".fixed_wrapper .productname")
      .eq(0)
      .invoke("text")
      .as("productThumbnail");

    cy.get("@productThumbnail").its("length").should("be.gt", 5);
    cy.get("@productThumbnail").should("include", "Seaweed Conditioner");
  });

  it.only("validate specific product", () => {
    cy.visit("http://www.automationteststore.com/");
    cy.get(".thumbnail").as("prodThumbNail");
    cy.get("@prodThumbNail").should("have.length", 16);
    cy.get("@prodThumbNail")
      .find(".productcart")
      .invoke("attr", "title")
      .should("include", "Add to Cart");
  });
});
