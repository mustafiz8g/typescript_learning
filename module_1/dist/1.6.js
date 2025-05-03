"use strict";
{
    // Learning function 
    // Normal function
    // Arrow function
    function add(num1, num2 = 10) {
        return num1 + num2;
    }
    add(2, 3);
    const addArrow = (num1, num2) => num1 + num2;
    // object --> function --> method
    const poorUser = {
        name: 'Anzuman',
        balance: 0,
        addBallence(balance) {
            return `My new balance is : ${this.balance + balance}`;
        },
    };
    const arr = [1, 2, 3, 4, 5];
    const newArray = arr.map((elem) => elem * elem);
}
