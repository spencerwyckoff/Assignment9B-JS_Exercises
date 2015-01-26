//Part 1

var sum = function(a, b) {
    var result = a + b;
    return result + " (" + a + "+" + b + ")"
  }

console.log(sum(8, 11));

//Part 2

var runner1  = {
    finishingTime1: 240, //in minutes
    finishingTime2: 210.4,
    finishingTime3: 235.1,
    finishingTime4: 208.9,
    finishingTime5: 197.5
};

var runner2 = {
    finishingTime1: 120, //in minutes
    finishingTime2: 110.4,
    finishingTime3: 135.1,
    finishingTime4: 108.9,
    finishingTime5: 97.5
};

var total = 0;

var getAverageTime = function(person) {
	var races = Object.keys(person).length;

	for (var time in person) {
		total += person[time];
	}

	return "Runs a marathon in an average of " + (total / races).toFixed(2) + " minutes.";

	total = 0;
}

console.log(getAverageTime(runner1));
console.log(getAverageTime(runner2));

//Part 3

var TimsBankAccount = {
    checking: 0,
    savings: 0,
    retirement: 0
};

var RobertosBankAccount = {
    checking: 0,
    savings: 0,
    retirement: 0
};

function addToBank(account, savings, retirement, checking) {
    account.savings = account.savings + savings;
    account.retirement = account.retirement + retirement;
    account.checking = account.checking + checking;
}

function getSumOfAccounts(account) {
    return (account.savings + account.checking + account.retirement);
}

addToBank(TimsBankAccount, 100, 10, 1);
addToBank(RobertosBankAccount, 200, 50, 19);

var sumOfTims = getSumOfAccounts(TimsBankAccount);
var sumOfRobertos = getSumOfAccounts(RobertosBankAccount);

console.log(sumOfTims - sumOfRobertos); // should calculate to -158











