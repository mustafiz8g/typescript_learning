{
    //

    // type assertion

   let anything : any;
   anything = 3;
  //  (anything as number).
   (anything as string)

   
   const kgToGram = (value: string | number) : string | number | undefined => {
    if(typeof value === 'string'){
      const convertedValue = parseFloat(value) * 1000;
      return `the converted value is ${convertedValue}`
    }
    if(typeof value === 'number'){
      return value * 1000
    }
   }


  const result1 = kgToGram(33) as number ;
  const result2 = kgToGram('22') as string
  console.log(result1)
  console.log(result2)


  type CustomError = {
    message:string
  }
  try{

  }catch(error){
    console.log((error as CustomError).message)
  }




   // revision 11 ===================================================================

   let something : any;
   something = 'hello'
   
   const litreToMili = (value : string | number) : string | number | undefined => {
      if(typeof value === 'number'){
        const convertedValue = value*1000;
        return convertedValue
      }
      else if(typeof value === 'string'){
        const [revalue, unit] = value.split(' ');
        const convertedValue = (parseFloat(revalue))*1000;
       return `The converted value is ${convertedValue}`

      }
   }
  

   type CustomError2 = {
    message : string
   }

   try{

   }catch(error){
    console.log((error as CustomError2).message)
   }



  


    //  ts-node-dev --respawn --transpile-only 2.1.ts
}