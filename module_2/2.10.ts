{
    // Mapped Types

 
    const arrOfNumbers : number[] = [1,2,3,6];
    
    const arrOfStr : string[] = ['1', '2', '3']

    const arrayOfString : string[] = arrOfNumbers.map((number) => number.toString())
    console.log(arrayOfString)

 

    type Areanumber = {
    height: number;
    width: number;
    };

    type Height = Areanumber['height']  // lookup type

    // type AreaString = {
    //     height: string;
    //     width: string;
    // }

    // type AreaString = {
    //     [key in keyof Areanumber] :  string
    // }

    type AreaString<T> = {
        [key in keyof T] :  T[key];
    }

    

    const area1 : AreaString<{height: string ; width: number}> ={
        height : '10',
        width : 20
    }


























    
    //
}