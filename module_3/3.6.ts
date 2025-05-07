{
    //  getter setter

    class BankAccount{
        public readonly id: number;
         public name : string;
  /*private */ protected _balance: number

        constructor(id: number, name: string, _balance: number) {
            this.id = id;
            this.name = name; 
            this._balance = _balance
            
        }
        set deposit(amount: number){
            this._balance = this._balance + amount;
        }
//    public addDeposit(amount: number) {
//     this._balance = this._balance + amount
//    }

// getter
get Balance(){
    return this._balance;
}


//    public get_balance(){
//     return this._balance
//    }

   
}



    const goribAccount = new BankAccount(111,'Mr gorib', 20);
    // goribAccount.deposit  = 9999 ;
    // goribAccount.addDeposit(110)  // function call korte hocce
    // const my_balance = goribAccount.get_balance()
    goribAccount.deposit = 40;
    const my_balance = goribAccount.Balance;
    console.log(my_balance)















    //
}