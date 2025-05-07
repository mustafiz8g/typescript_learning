{
    //  access modifier

    class BankAccount{
        public readonly id: number;
         public name : string;
  /*private */ protected _balance: number

        constructor(id: number, name: string, _balance: number) {
            this.id = id;
            this.name = name; 
            this._balance = _balance
            
        }
   public addDeposit(amount: number) {
    this._balance = this._balance + amount
   }
   public get_balance(){
    return this._balance
   }

   
}
class StudentAccount extends BankAccount{
 test(){
     this.
 }
}

    const goribAccount = new BankAccount(111,'Mr gorib', 20);
    // goribAccount._balance  = 9999 ;
    goribAccount.addDeposit(110)
    const my_balance = goribAccount.get_balance()
    console.log(my_balance)















    //
}