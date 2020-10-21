// https://docs.cypress.io/api/introduction/api.html

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  });

  it('should have number button presses update the running total', () => {
    cy.get('#number1').click();
    cy.get('#number2').click();
    cy.get('#number3').click();
    cy.get('#number4').click();
    cy.get('.display').should('contain', '1234');
  });

  xit('should update the display with the result of an operation', () => {

  });

  xit('should chain multiple operations correctly', () => {

  });

  xit('should output positive numbers as normal', () => {

  });

  xit('should output negative numbers with an indictor that they are negative', () => {

  });

  xit('should output non-whole numbers as a decimal', () => {

  });

  xit('should output numbers beyond the display space of the output view as an exponent', () => {

  });

  xit('should give a safely returned error for divide non-zero by zero', () => {

  });

  xit('should return zero for zero divided by a non-zero number', () => {

  });





})
