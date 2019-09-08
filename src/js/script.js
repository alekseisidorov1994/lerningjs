'use strict';



const money = prompt("Ваш бюджет в месяц?","");
const time = prompt("Введите дату в формате YYYY-MM-DD","");
const answerOne = prompt("Введите обязательную статью расходов в этом месяце", "");
const answerTwo = prompt("Во сколько обойдется?", "");
const appData = {
	 moneyHave: money,
	 timeData: time, 
	 expenses: {answerOne, answerTwo}, 
	 optionalExpenses: null, 
	 income: null
	};
alert(parseFloat(appData.moneyHave)/30);

	
