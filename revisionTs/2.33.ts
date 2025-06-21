{


    
const rollNumber : number[] = [1,2,3,34,23,2];

const rollNumber1: Array<number> = [2,2,23,23,3,32,2]

const wivesNames: Array<string> = ['34', 'kjik']

const isAttactive: Array<boolean> = [true, false, false]

//

type GenericArray<T> = Array<T>;

const janTus : GenericArray<string> = ['Hello', 'Suna', "i ", 'Love'];

const myJanAge: GenericArray<number> = [22,33,2,23,2];

const mySunduri: GenericArray<boolean> = [true, true, true];


type A = {name: string, age: number}
const myWife: GenericArray<A> =[
    {
    name: 'Kolizar Pakhi',
    age: 20
    } ,
    {
        name: 'koliza',
        age: 33
    }
]


// Generic Tuple 
   const janTuple : [string, string, string] = ['kaila', 'talia' , 'paia'];

   type GenericeTuple<X, Y> = [X , Y];

   const bouPagol : GenericeTuple<string, string> = ['Lokkhi','tumi'];

   const jamaiPagol: GenericeTuple<string,number> = ['jan', 33];

   


}