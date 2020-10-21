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

  it('should update the display with the result of an operation', () => {
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#operator_add').click();
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '20');
  });

  it('should chain multiple operations correctly', () => {
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator_add').click();
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator_add').click();
    cy.get('#operator_add').click();
    cy.get('#operator_add').click();
    cy.get('.display').should('contain', '800');
  });

  it('should output positive numbers as normal', () => {
    cy.get('#number3').click();
    cy.get('#number3').click();
    cy.get('#operator_subtract').click();
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '23');
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
