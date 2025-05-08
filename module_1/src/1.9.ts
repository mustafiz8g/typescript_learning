
{
// Type alias

const brothers : {
    name: string;
    age: number;
    isGood: boolean;
} ={
    name: "Sabiha",
    age: 33,
    isGood: true
}


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

type Add1 = (num: number, num2: number) => number


// Revision 1 -=================================================================

type Cousin = {
    name: string;
    gender: string;
    age: number;
    contact?: number;
}

const bigBrother : Cousin = {
    name: 'Monirul Islam',
    gender: 'male',
    age: 22,
    contact: 234234
}
const elderBrother : Cousin = {
    name: 'Monirul Islam',
    gender: 'male',
    age: 22,
}


type brosName = string;
type isFit = boolean;

const name: brosName = 'Karim'
const isGood: isFit =  true;


type Total = (num1: number , num2: number) => number

const total : Total = (num1, num2) => num1 + num2



}



