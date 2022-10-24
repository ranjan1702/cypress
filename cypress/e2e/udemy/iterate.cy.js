describe("Test contact us form", () => {
  it("Iterate through all product ald log to console", () => {
    cy.visit("http://www.automationteststore.com/");
    cy.get(".fixed_wrapper").each(($el, index, $list) => {
      cy.log("Index: " + index + " : " + $el.text());
    });
  });

  it("Add specific producta to cart", () => {
    cy.visit("http://www.automationteststore.com/");
    cy.get("a[href*='product/category']").contains("Hair Care").click();
    cy.get(".fixed_wrapper").each(($el, index, $list) => {
      if ($el.text().includes("Curls to straight Shampoo")) {
        cy.wrap($el).click();
      }
    });
  });
});
