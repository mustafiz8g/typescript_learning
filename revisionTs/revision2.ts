
// 2.1  type assertion 

{

let anything : any;
anything = 3;
(anything as string)

const kgToGram = (value: string | number) : string | number | undefined => {
    if(typeof value === 'string'){
        const convertedValue = parseFloat(value) * 1000;
        return `the converted value is ${convertedValue}` ;
    }
    if(typeof value === 'number'){
        return value* 1000 ;
    }
}

const result1 = kgToGram(13) as number;
const result2 = kgToGram('33') as string;

console.log(result1);
console.log(result2)



type CustomError = {
    message: string
}


try{

}catch(error){
    console.log((error as CustomError).message)
}













}