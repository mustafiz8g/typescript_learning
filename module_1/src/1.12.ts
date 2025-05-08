{
    //nullable types / unknown types
    
  const searchName = (value: string | null) => {
    if(value){
        console.log('searching')
    }
    else{
        console.log('there is nothing to search')
    }
  }
  searchName(null)

  const getSpeedInMeterPerSecond = (value:unknown) => {
    if(typeof value === 'number'){
        const convertedSpeed = value*1000/3600;
        console.log(`the speed is ${convertedSpeed} kmh`);
    }
   else if(typeof value === 'string'){
        const [valueis, unit] = value.split(' ');
        const convertedSpeed = parseFloat(valueis)*1000/3600;
        console.log(`the speed is ${convertedSpeed} kmh`);
    }
    else{
        console.log('wrong input')
    }
  }
  getSpeedInMeterPerSecond('2323 kmh')
  getSpeedInMeterPerSecond(null)


  const throwError = (msg:string) : never =>{
    throw new Error(msg)
  } 

  throwError('dkfj')







    //
}