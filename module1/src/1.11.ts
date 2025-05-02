
{
    //
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
}