$( document ).ready(function() {
  $('.prompt').click(()=>{
    let age = prompt('Hoq are you age?')
    console.log('Wrinet age: ',age)
  })

//   Глава 1. Задача 1.
 /* Напишите программу для вычисления общей стоимости покупки телефона.
    Вы будете продолжать покупать телефоны (подсказка: циклы!), пока у вас не закончатся деньги на банковском счете.
    Вы также будете покупать аксессуары для каждого из телефонов до тех пор, пока сумма покупки не превысит ваш мысленный предел трат.
  */

  const PRICE_PRONE = 18000
  const PRICE_ACCESSORIES = 500
  $('.task-1 button').click(()=>{
    let balance = $('.task-1 .balance').val()
    let start_balance = balance
    let purchased_phones=0 //количество телефонов, котрые может позвонить пользователь
    let purchased_accessories=0

    if(balance > PRICE_PRONE){
      for (let i= 0; balance > PRICE_PRONE; i++){
        purchased_phones++
        balance -= PRICE_PRONE
        if (balance > PRICE_ACCESSORIES) {
          purchased_accessories += 1
          balance -= PRICE_ACCESSORIES
        }
      }

      console.log(`При балансе в ${start_balance}$,
       вы можете себе позволить ${purchased_phones} телефонов
       и ${purchased_accessories} аксуссуаров.
       У вас останется ${balance}$`)
    }else{
      console.log('Увы, вы не можете себе позволить этот телефон')
    }

  })
});
