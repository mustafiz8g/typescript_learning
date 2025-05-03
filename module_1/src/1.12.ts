{
    //nullable types / unknown types
    
    const searchName = (value: unknown) => {
        if(value){
            console.log('searching')
        }
        else{
            console.log('There is nothing to search')
        }
    }

    searchName(null)

    // unknown typeof

    const getSpeedinMeterPerSecond = (value: unknown) => {
        if(typeof value === 'number'){
            const convertedSpeed = value*1000/3600;
            console.log(`The speed is ${convertedSpeed} ms^-1`)
        }
        else if(typeof value === 'string'){
            // const valueInNumber = value.split(' ')
            // console.log(valueInNumber)
            // const IntegerNumber = parseFloat(valueInNumber[0])
            // const convertedSpeed = IntegerNumber*1000/3600;
            // console.log(`The speed is ${convertedSpeed} ms^-1`)

            const [result, unit] = value.split(' ')
            const convertedSpeed = (parseFloat(result))*1000/3600;

            console.log(`The speed is ${convertedSpeed} ms^-1`)

        }
        else{
            console.log('wrong input')
        }

    }

    getSpeedinMeterPerSecond(null)
        





    const throwError = (msg:string) : never =>  {
        throw new Error(msg)
    }
   
    throwError('muskil se error hogaya')

















    //
}