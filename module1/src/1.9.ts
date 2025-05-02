
{
// Type alias

type Student =  {
    name: string;
    age: number;
    contactNo?: string;
    gender: string;
    address: string
}

const student1 : Student = {
    name: 'MUstasfizur',
    age: 22,
    gender: 'male',
    contactNo: '234234',
    address: 'mym'
}

const student2 : Student = {
    name: 'Sabiha',
    age: 23,
    gender: 'male',
    address: 'jamalpur'
}
const student3 : Student = {
    name: 'Sabiha',
    age: 23,
    gender: 'male',
    address: 'jamalpur'
}


type UserName = string
type IsAdmin = boolean
const userName: UserName = 'Persian'
const isAdmin : IsAdmin = true


// const add = (num1 : number , num2 : number) => num1 + num2
type Add = (num1: number, num2 : number) => number
const add : Add = (num1  , num2 ) => num1 + num2


}



