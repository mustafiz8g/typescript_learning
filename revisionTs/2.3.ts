
{
    // introduction to generics
    // generics type

    const rollNumbers : number[] = [1,2,3,4];
    const rollNumbersG : Array<number> = [2,3,2,4];

    const mentors : string[] = ['jan', 'pakhi', 'sona'];
    const mentorsG: Array<string> = ['I', 'Love', 'You'];

    const boolArray : boolean[] = [true, false, true];
    const boolArrayG: Array<boolean> = [true, false, true, false, true]

    // make reusable

    // type GenericArray = Array<string> 
    // type GenericArray = Array<boolean>
    // type GenericArray<param> = Array<param> 
    type GenericArray<T> = Array<T> 
    
    const koliza : GenericArray<string> = ['jan', 'tus', 'priya'];
    const myJanAge: GenericArray<number>
 = [33,4342,22]    ;
 const mySweetie : GenericArray<boolean>
 = [true, true, true]    ;

    const add = (x: number, y: number) => x + y;
    add(22,22)


    // object 

    const user: GenericArray<{name: string, age: number}> = [
        {
            name: 'Mustafsiaru',
            age: 22
        },
        {
            name: 'Saidur',
            age: 33
        }
    ]


    // generic tuple

    const janTuple: [string, string, string] = ['Snigdha', 'Humaira', 'Jan']


    type GenericTuple<X,Y> = [X,Y]

    const bouTuple: GenericTuple<string, string> = ['Tia', 'Moina']


    const UserWithId: GenericTuple<number,{name: string,email: string}> = [1234, {name: 'Musta', email: 'dkd@gmail.com'}]



}