describe('Покупка аватара', function () {                                   
    it('e2e тест на покупку нового аватара для тренера', function () {      
         cy.visit('https://pokemonbattle.ru/');                             // переходим на сайт https://pokemonbattle.ru/
         cy.get('input[type="email"]').type('LOGIN');    // вводим логин
         cy.get('input[type="password"]').type('PASSWORD');                // вводим пароль
         cy.get('button[type="submit"]').click();                           // нажимаем кнопку Подтвердить
         cy.wait(2000);
         cy.get('.header__container > .header__id').click({ force: true }); // Клик в шапке на аву тренера
         cy.get('[href="/shop"]').click();                                  // нажимаем кнопку Магазин
         cy.wait(2000);
         cy.get('.available > button').first().click({ force: true });      // кликаем Купить у первого доступного аватара
         cy.wait(2000);
         cy.get('.credit').type('4231699949993747');                        // вводим номер карты
         cy.get('.k_input_ccv').type('125');                                // вводим CVV карты
         cy.get('.k_input_date').type('1230');                              // вводим срок действия карты
         cy.get('.k_input_name').type('NAME');                              // вводим имя владельца действия карты
         cy.get('.pay-btn').click();                                        // нажимаем кнопку Оплатить
         cy.wait(2000);
         cy.get('#cardnumber').type('56456');                               // вводим код подтверждения СМС
         cy.get('.payment__submit-button').click();                         // нажимаем кнопку Отправить
         cy.contains('Покупка прошла успешно').should('be.visible');        // проверяем наличие и видимость сообщения о успешной покупке
         cy.get('.payment__back-button-success').click({ force: true });    // Возвращаемся
         cy.wait(3000);
         cy.get('.header__container > .header__id').click({ force: true })  // Переходим на страицу профиля
         cy.wait(3000);
         cy.get('.trainer-img').should('be.visible');                       // Проверяем что аватар отображается
    });
 });