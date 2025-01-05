
describe('Автотесты для формы логина и пароля', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio');                                       // Заходим на сайт
         cy.get('#mail').type('german@dolnikov.ru');                                // Вводим верный логин
         cy.get('#pass').type('iLoveqastudio1');                                    // Вводим верный пароль
         cy.get('#loginButton').click();                                            // Нажимаем на кнопку войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно');           // Проверяю, что вижу текст после авт.
         cy.get('#messageHeader').should('be.visible');                             // Текст виден юзеру
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');             // Крестик закрытия виден юзеру
         cy.get('#exitMessageButton').click();                                      // Нажимаем на кнопку выйти из пуша
    })
 
     
     
     it('Логика восстановления пароля', function () {
         cy.visit('https://login.qa.studio');                                       // Заходим на сайт
         cy.get('#forgotEmailButton').click();                                      // Нажимаем на кнопку забыли пароль
         cy.get('#mailForgot').type('ahahha@haha.com');                             // Вводим почту (логин)
         cy.get('#restoreEmailButton').click();                                     // Нажимаем на отправить код
         cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');   // Проверяю, что вижу текст после нажатия.
         cy.get('#messageHeader').should('be.visible');                             // Текст виден юзеру
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');             // Крестик закрытия виден юзеру
         cy.get('#exitMessageButton').click();                                      // Нажимаем на кнопку выйти из пуша
    })
    
     
     it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio');                                    // Заходим на сайт
        cy.get('#mail').type('german@dolnikov.ru');                             // Вводим верный логин
        cy.get('#pass').type('iLoveqastudio2');                                 // Вводим неверный пароль
        cy.get('#loginButton').click();                                         // Нажимаем на кнопку войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет');      // Проверяю, что вижу текст после авт.
        cy.get('#messageHeader').should('be.visible');                          // Текст виден юзеру
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');          // Крестик закрытия виден юзеру
        cy.get('#exitMessageButton').click();                                   // Нажимаем на кнопку выйти из пуша
        
    })
    
    
    it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio');                                  // Заходим на сайт
        cy.get('#mail').type('ahahha@haha.com');                              // Вводим неверный логин
        cy.get('#pass').type('iLoveqastudio1');                               // Вводим верный пароль
        cy.get('#loginButton').click();                                       // Нажимаем на кнопку войти
        cy.wait(2000)                                                         // Ждем
        cy.get('#messageHeader').contains('Такого логина или пароля нет');    // Проверяю, что вижу текст после авт.
        cy.get('#messageHeader').should('be.visible');                        // Текст виден юзеру
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');        // Крестик закрытия виден юзеру
        cy.get('#exitMessageButton').click();                                 // Нажимаем на кнопку выйти из пуша
    })

    
    it('Почта без @', function () {
        cy.visit('https://login.qa.studio');                                      // Заходим на сайт
        cy.get('#mail').type('germandolnikv.ru');                                 // Вводим логин без @
        cy.get('#pass').type('iLoveqastudio1');                                   // Вводим верный пароль
        cy.wait(4000)                                                             // Ждем
        cy.get('#loginButton').click();                                           // Нажимаем на кнопку войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');  // Проверяю, что вижу текст после авт.
        cy.get('#messageHeader').should('be.visible');                            // Текст виден юзеру
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');            // Крестик закрытия виден юзеру
        cy.get('#exitMessageButton').click();                                     // Нажимаем на кнопку выйти из пуша
    })


    it('Приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio');                                       // Заходим на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru');                                // Находим поле логин и подставляем значение
        cy.get('#pass').type('iLoveqastudio1');                                    // Находим поле пароль и подставляем значение
        cy.wait(2000)                                                              // Ждем
        cy.get('#loginButton').click();                                            // Нажимаем на кнопку войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно');           // Проверяю, что вижу текст после авт.
        cy.get('#messageHeader').should('be.visible');                             // Текст виден юзеру
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');             // Крестик закрытия виден юзеру
        cy.get('#exitMessageButton').click();                                      // Нажимаем на кнопку выйти из пуша
    })

})