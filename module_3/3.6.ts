{
    //  getter setter


    class BankAccount{
        public readonly id:number;
        public name: string;
 /**private*/ protected _balance: number;

        constructor(id: number, name: string, balance: number){
            this.id = id;
            this.name = name; 
            this._balance = balance
        }
        // addDeposit(amount: number){
        //     this._balance = this._balance + amount ;
        // }
        set deposit(amount: number){
            this._balance = this._balance + amount ;
        }
        
        // getBalance(){
        //     return this._balance
        // }
        get balance(){
            return this._balance
        }
    }

    
    const goribManusherAccount = new BankAccount(111, 'Mr Gorib', 20);
    console.log(goribManusherAccount)
 
    goribManusherAccount.deposit = 90
    
    const myBalance =  goribManusherAccount.balance
    console.log(myBalance)









    //
}