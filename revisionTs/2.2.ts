
{

    // interface

    // type alias
    type User1 = {
        name : string;
        age: number;
    }

    type UserWithRole1 = User1 & {role: string}
    type UserWithRole11 = User1 & {isGood : boolean}

    const user1 : UserWithRole1 = {
        name: 'Mustaf',
        age: 33,
        role: 'Admin'
    }

    // type interface
    interface User2 {
        name: string;
        age: number
    }

    interface User2WithRole2 extends User2 {
        role : string;
    }

    const user2 : User2WithRole2 = {
        name: 'Jan pakhi',
        age: 22,
        role: 'Moderator'
    }

    type rollNumber = number 
    const age : number = 33;

    //  সকল primitive এর ক্ষেত্রে type alias ব্যবহার করব
    // object এর ক্ষেত্রে  type alias and interface দুইটাই ব্যবহার করব


    // 

    const roll1 : Roll = [1,2,3,2,21];
    type Roll = number[];
    
    interface Roll2 {
        [index : number ] : number
    }
    const roll2 : Roll2 = [1,2,3,2,21];


    // function

    type Add1 = (num1: number, num2: number) => number;

    const add : Add1 = (num1, num2) => num1 + num2 ;

     const r1 = add(2,3);
     console.log(r1)

    //  function with interface 
    interface Add2 {
        (num1: number, num2: number) : number
    }
    const add2 : Add2 = (num1, num2) => num1 + num2 ;
    const r2 = add2(2,4);
    console.log(r2)


}