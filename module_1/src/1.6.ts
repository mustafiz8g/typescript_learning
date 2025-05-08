{
// Learning function 
// Normal function
// Arrow function

function add(num1 : number, num2 : number= 10):number{
    return num1 + num2
  }
  
  add(2,3)
  
  const addArrow = (num1: number, num2: number): number => num1 + num2
  
  
  
  // object --> function --> method
  // object er moddhe function thakle setake bole method 
  
  const poorUser = {
      name: 'Anzuman',
      balance: 0,
      addBallence(balance: number): string{
          return `My new balance is : ${this.balance + balance}`;
      },
  };


  
  
  const arr: number[] = [1,2,3,4,5];
  
  const newArray:number[] = arr.map((elem: number): number => elem*elem)


const newArray2: number[] = arr.map((element:number):number => element*element)



  // Revise -----------------------------------------------------------------------------------

  function sum(number1 : number , number2 : number): number{
    return number1 + number2
  }

  sum(22,33)

  const addition = (nu1: number , nu2: number) : number => nu1 + nu2;
  addition(11, 44)


  // object -> function -> method

  const richUser = {
    name: 'Ara',
    balance: 1000,
    /**    addBalance(balance: number) :number{
           return this.balance + balance;
    } */
   addBalance(balance: number): string {
    return ` My new balance is : ${this.balance + balance}`
   }
  }



  const arrr : number[] = [1,2,3,4,6]
  const square : number[] = arrr.map((double : number) : number => double * double)
  
}