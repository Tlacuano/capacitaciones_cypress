class LoginPage {
    constructor() {
        // Elementos de la página
        this.username = '#user-name';
        this.password = '#password';
        this.submitButton = '#login-button';
        // Mensajes de la página
        this.userNotFoundMessage = 'Epic sadface: Username and password do not match any user in this service';
        this.userLockedMessage = 'Epic sadface: Sorry, this user has been locked out.';
    }

    login(username, password) {
        cy.get(this.username).type(username);
        cy.get(this.password).type(password);
        cy.get(this.submitButton).click();
    }
}

export default new LoginPage()