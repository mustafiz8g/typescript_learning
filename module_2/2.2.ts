
{
    // interface

    type User1 = {
        name: string;
        age: number
    }

  

    type UserWithRole1 = User1 & { role : string }

    const user1 : UserWithRole1 = {
        name: "Mustafziur",
        age: 22,
        role: 'Main'
    }


    type rollNumber = number;
    

    interface User2 {
        name: string;
        age: number
    }

    interface UserWithRole2 extends User2 {
        role: string;
    }

    const user2 : UserWithRole2 = {
        name: "Mustafziur",
        age: 22,
        role: 'Main'
    }


    type Person = {
      name :string;
      status: string
    }
   type Mustafiz = Person & {isGood: boolean}

    const mustafizur : Mustafiz = {
      name: 'Mustafizur',
      status: 'good',
      isGood: true
    }

    interface Person2{
      name: string;
      status: string
    }

    interface Jan extends Person2 {
      isMayabi: boolean
    }

    const myWife : Jan = {
      name: 'Anzuman',
      isMayabi: true,
      status: 'good'
    }



    // js --> object , array --> object funciton -> object


    type Roll1 = number[];

    interface Roll2 {
        [index : number] : number
    }

    interface Roll3 {
      [index: number ]: number
    }
    const rool: Roll3 = [2,2,3]
    
    // const rollNumber : Roll1 = [1,2,3]
    const rollNumber : Roll2 = [1,2,3]



   //
//    type declare in funciton 
   type Add = (num1 : number , num2 : number) => number
   type Sum = (a: number, b: number) => number;

   interface Sum2 {
    (a:number, b:number) : number
   }

   const add : Add = (num1 , num2) => num1 + num2 ;
  // interface declare  in funcition

  interface Add2 {
    (num1 : number, num2 : number) : number
  }
  
  const add2 : Add2 = (num1, num2) => num1 + num2



//   revision 1 ==========================================
   
//   type 
   
  type Sir1 = {
    name: string;
    grade : number
  }

  type SirWith1 = Sir1 & { isGood: boolean}

  const jahidSir : SirWith1 = {
     name : 'Jahid',
     grade : 222,
     isGood : true
  }


//   interface 

   interface Sir2 {
    name : string;
    grade: number
   }

   interface SirWith2 extends Sir2 {
     isExpert : boolean
   }

   const karimSir : SirWith2 = {
    name: 'Karim',
    grade : 11,
    isExpert: false
   }
  




   type  Roll6 = number[];
   const roll1 : Roll6 = [22,33,22]


   interface Roll8 {
      [index : number] : number
   }
   const roll8 : Roll8 = [3,4,6]




    type Sum1 = (a: number, b: number) => number;
    const sum : Sum1 = (a,b) => a + b;

     interface Sum2 {
        (a:number, b: number) : number
     }
     const sum2 : Sum2  = (a,b) => a + b







    //
}