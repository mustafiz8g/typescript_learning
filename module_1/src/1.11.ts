
{
    //  ts-node-dev --respawn --transpile-only server.ts
     
    // npm i -g ts-node-dev

    // ternary operator || optional chaining || nullish coalescing operator

    const age: number = 25;

    if(age >= 18){
        console.log('adult')
    }
    else {
        console.log('not adult')
    }

   const isAdult = age >= 18 ? 'Adult' : 'Not Adult'
//    console.log({isAdult})



   //nullish coalescing operator
    // null / undefined ----> decision making

   const isAuthenticated = '';
   
   const result1= isAuthenticated ?? 'Guest' 
   const result2 =  isAuthenticated ? isAuthenticated : 'Guest'
   console.log({result1 , result2})

   const isBeautiful = '';
   const output1 = isBeautiful ?? 'guest'
   const output2 = isBeautiful ? isBeautiful : 'guest'
   

   type User = {
    name: string;
    address: {
        city: string;
        road: string;
        presentAdress: string;
        permanentAdress?: string;
    }
   }

   const user : User = {
    name: 'Mustafizur',
    address: {
        city: 'mym', 
        road: "awesome road",
        presentAdress: 'my town'
    }
   }
   
   const permanentAdress = user?.address?.permanentAdress ?? 'No Permanent Adress'
   console.log({permanentAdress})

    //


    // revision 1 ===============================================================================================

    const cLass : number = 9;
    if(cLass > 10){
        console.log('you are not eligible')
    }
    else{
        console.log('You are elgible')
    }

    const isMashallah : boolean = true
    
  const isEligible = isMashallah ? 'I wil marry you' : 'May Allah give you more good husband'
 console.log({isEligible})


  

 // nullish coalecing operator rivision 
// null / undefined -----> decision making
  
/**
 * // const isBeautiful = null;
const isBeautiful = undefined;
const result3 = isBeautiful ?? 'Guest' ;
console.log({result3})
 */

const isDindar = 0;
const result4 = isDindar ?? 'Guest'
const result5 = isDindar ? isDindar : 'Guest'
console.log({result4})
console.log({result5})



























}