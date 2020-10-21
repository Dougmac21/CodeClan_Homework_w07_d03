// https://docs.cypress.io/api/introduction/api.html

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  xit('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  });

  xit('should have number button presses update the running total', () => {
    cy.get('#number1').click();
    cy.get('#number2').click();
    cy.get('#number3').click();
    cy.get('#number4').click();
    cy.get('.display').should('contain', '1234');
  });

  xit('should update the display with the result of an operation', () => {
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#operator_add').click();
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '20');
  });

  xit('should chain multiple operations correctly', () => {
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

  xit('should output positive numbers as normal', () => {
    cy.get('#number3').click();
    cy.get('#number3').click();
    cy.get('#operator_subtract').click();
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '23');
  });

  xit('should output negative numbers with an indictor that they are negative', () => {
    cy.get('#number2').click();
    cy.get('#number5').click();
    cy.get('#operator_subtract').click();
    cy.get('#number7').click();
    cy.get('#number5').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '-50');
  });

  xit('should output non-whole numbers as a decimal up to the display size limit', () => {
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('#operator_divide').click();
    cy.get('#number7').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '3.142857142857143');
  });

  it('should output numbers beyond the display space of the output view as an exponent', () => {
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator_multiply').click();
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '1e+30');  // result of 1_fifteen-zeros**
  });

  xit('should give a safely returned error for divide non-zero by zero', () => {
    cy.get('#number5').click();
    cy.get('#operator_divide').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', 'Error');
  });

  xit('should return zero for zero divided by a non-zero number', () => {
    cy.get('#number0').click();
    cy.get('#operator_divide').click();
    cy.get('#number8').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '0');
  });
});
