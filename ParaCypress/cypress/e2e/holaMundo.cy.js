import  LoginPage  from '../pages/LoginPage';
import { STANDAR_USER, LOCKED_OUT_USER, PROBLEM_USER, PERFORMANCE_GLITCH_USER  } from '../data/LoginData';

describe('Pruebas login', () => {

  //paso antes de cada prueba
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/v1/');
  });


  //prueba de login con usuario no registrado
  it('prueba usuario no registrado', () => {
    LoginPage.login('usuario', 'password');
    cy.contains(LoginPage.userNotFoundMessage);
  });

  //prueba de login con usuario estandar
  it('prueba standard_user', () => {
    LoginPage.login(STANDAR_USER.username, STANDAR_USER.password);
    cy.url().should('include', '/inventory.html');
  });


  //prueba de login con usuario bloqueado
  it('prueba locked_out_user', () => {
    LoginPage.login(LOCKED_OUT_USER.username, LOCKED_OUT_USER.password);
    cy.contains(LoginPage.userLockedMessage);
  });

  //prueba de login con usuario con problemas
  it('prueba problem_user', () => {
    LoginPage.login(PROBLEM_USER.username, PROBLEM_USER.password);
    cy.url().should('include', '/inventory.html');
  });

  //prueba de login con usuario con problemas de rendimiento
  it('prueba performance_glitch_user', () => {
    LoginPage.login(PERFORMANCE_GLITCH_USER.username, PERFORMANCE_GLITCH_USER.password);
    cy.url().should('include', '/inventory.html');
  });

})