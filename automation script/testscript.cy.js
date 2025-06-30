describe("Cura healthservice - pre-login tests", () => {

  it("Test Make appointment & Login functionality", () => {
    //"Make Appointment" button should take the user to the login screen//
    cy.visit('https://katalon-demo-cura.herokuapp.com');
    cy.get("#btn-make-appointment[href='./profile.php#login']").contains('Make Appointment').click();
    cy.url().should('include', '/profile.php#login'); // Assert login page redirect

    //Verify login functionality using Invalid login credentials//
    cy.get("[name='username']").type("testuser1");
    cy.get("[name='password']").type("password123");
    cy.get('#btn-login[type="submit"]').contains("Login").click();
    cy.get("p.lead.text-danger").contains("Login failed! Please ensure the username and password are valid.").should("be.visible");

    cy.get("[name='username']").type("John Doe");
    cy.get("[name='password']").type("password123");
    cy.get('#btn-login[type="submit"]').contains("Login").click();
    cy.get("p.lead.text-danger").contains("Login failed! Please ensure the username and password are valid.").should("be.visible");

    cy.get("[name='username']").type("testuser2");
    cy.get("[name='password']").type("ThisIsNotAPassword");
    cy.get('#btn-login[type="submit"]').contains("Login").click();
    cy.get("p.lead.text-danger").contains("Login failed! Please ensure the username and password are valid.").should("be.visible");
    

    //Verify login functionality using valid login credentials//
    cy.get("[name='username']").type("John Doe");
    cy.get("[name='password']").type("ThisIsNotAPassword");
    cy.get('#btn-login[type="submit"]').contains("Login").click();
    cy.url().should('include', '/#appointment'); // Assert login success

  });

});


describe("Cura healthservice - post-login tests", () => {
  beforeEach(() => {
    //login before each test
    cy.login("John Doe", "ThisIsNotAPassword");
  });


  it("Test Book Appointment features", () => {
    //verify users can book appointments//
    cy.get("#combo_facility").select("Hongkong CURA Healthcare Center").should('have.value', 'Hongkong CURA Healthcare Center');

    cy.get('input#radio_program_medicaid[value="Medicaid"]').should('be.visible');
    cy.get('input#radio_program_medicaid[value="Medicaid"]').check().should('be.checked');
    
    cy.get('input#txt_visit_date[placeholder="dd/mm/yyyy"]').type('08/06/2025{esc}');
    cy.get('#txt_comment[placeholder="Comment"]').type('Routine checkup');
    cy.get('#btn-book-appointment[type="submit"]').contains('Book Appointment').click();

    cy.url().should('include', '/appointment.php#summary'); // Assert appointment booking success
    cy.get("h2").contains("Appointment Confirmation").should("be.visible");


    //Verify users can navigate back to the home page//
    cy.get('[href="https://katalon-demo-cura.herokuapp.com/"]').contains('Go to Homepage').click(); //redirect to book appointment homepage

    //Verify users can see appointment booking history//
    //Book a different appointment
    cy.get("#combo_facility").select("Seoul CURA Healthcare Center").should('have.value', 'Seoul CURA Healthcare Center');

    cy.get('input#chk_hospotal_readmission[type="checkbox"]').should('be.visible');
    cy.get('input#chk_hospotal_readmission[type="checkbox"]').check().should('be.checked');

    cy.get('input#radio_program_none[value="None"]').should('be.visible');
    cy.get('input#radio_program_none[value="None"]').check().should('be.checked');

    cy.get('input#txt_visit_date[placeholder="dd/mm/yyyy"]').type('11/07/2025{esc}');
    cy.get('#txt_comment[placeholder="Comment"]').type('Fever checkup');
    cy.get('#btn-book-appointment[type="submit"]').contains('Book Appointment').click();

    cy.url().should('include', '/appointment.php#summary'); // Assert appointment booking success
    cy.get("h2").contains("Appointment Confirmation").should("be.visible");

    //Check booking history
    cy.get("#menu-toggle.btn.btn-dark.btn-lg.toggle").click();
    cy.get("a[href='history.php#history']").contains('History').click();

    cy.url().should('include', '/history.php#history'); // Assert appointment booking history page
    cy.get("h2").contains("History").should("be.visible");

    cy.get('section#history.section')
    .should('contain', '08/06/2025')
    .and('contain', 'Hongkong CURA Healthcare Center')
    .and('contain', 'Medicaid')
    .and('contain', 'Routine checkup');

    cy.get('section#history.section')
    .should('contain', '11/07/2025')
    .and('contain', 'Seoul CURA Healthcare Center')
    .and('contain', 'None')
    .and('contain', 'Fever checkup');

    //Verify users can logout //
    cy.get("#menu-toggle.btn.btn-dark.btn-lg.toggle").click();
    cy.get("a[href='authenticate.php?logout']").contains('Logout').click();

    cy.url().should('not.include', '/*'); // Assert return to landing page


  });

});
