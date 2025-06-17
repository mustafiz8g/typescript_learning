
{

let str: string = 'Mustafizur';
let num: number = 22;
let isDone:boolean = true;
let arr: number[] = [33,44,22];
let strArray: string[] = ['ddfd', 'dkfjd'];
let tuple: [string, boolean, number] = ['Heloor', true, 33];
let anyVar : any = true;

}

{
    let friends: string[] = ['jan', 'pakhi'];
    let nmbers: number[] = [22,33];
    let bou: [string, number, boolean] = ['Saima', 44, true];

    let nu : null = null;
    let un: undefined = undefined;

    const user : {
        readonly name: "Mustf";
        age ?: number;
        isGood: boolean;
    } = {
        name: "Mustf",
        age: 22 ,
        isGood: true
    }

    
   
    function add(num1: number, num2: number = 10) : number {
        return num1 + num2;
    }
    add(22,29);

    const addArrow = (num1: number, num2: number): number => num1 + num2;

    const poorUser = {
        name: 'Anzuman',
        balance: 0,
        addBallence(balance: number): string{
            return `my total balance is : ${this.balance}`
        }
    }

    const arr: number[] = [11,22,33,12];

    const newArray: number[] = arr.map((ele:number) : number =>  ele * ele);



    // module 1.7 
    // spread operator 
    // rest operator
    // destrucruing 

    const bou1: string[] = ['jan', 'Koliza', 'pakhi', 'tukra'];
    const bou2: string[] = ['Humaira', 'tia', 'bou', 'baby'];

    bou1.push(...bou2)
    const bouJan: string[] = [...bou1, ...bou2]

    const mentor1 = {
        typescript : 'mezba',
        redux : 'mir',
        dbms: 'mizan'
    }
    const mentor2 = {
        prisma: 'Frioz',
        next: 'tanmoy',
        cloud: 'hanid'
    }

    const mentorList = {
        ...mentor1 , ...mentor2
    }


    const greetFriends = (...friends: string[]) => {
        friends.forEach((friend:string) => console.log(`Hi ${friend}`))
    }

    greetFriends('abul', 'babul')


// 1.8
  const userr = {
    id: 11,
    name: {
        firstName: 'Humaira', 
        middleName: 'Islam',
        lastName: 'Sorna'
    },
    contactInfor: '3423434',
    address: 'Dhaka',
    
  }

  const { contactInfor, name: {middleName} } = userr

  // array destructuring
  const myFriends = ['chandler', 'joy', 'ros', 'rahel','pross', 'moni', 'firir'];

  const [ , , bestfriend, ...rest ] = myFriends


//   1.9 type alias 


  const brother: {
    name: string;
    age: number;
    isGood: boolean
  } = {
    name: 'Mustafizsur',
    age: 33,
    isGood: true
  }

  type Friend = {
    name: string;
    age: number;
    contact?: string;
    gender: string;
    address: string;
  }

  const friend: Friend = {
    name: 'Mustafisaur',
    contact: '43324',
    age: 22,
    gender: 'male',
    address: 'ldskfjldsfj'
  }

  type userName = string;
  type age = number;
  type isGood = boolean

  const name: userName = "Mustaofuseaf";
  const bouAge: age  = 19;
  const character : isGood = true;

  type Add = (num1: number, num2 : number) => number;
  
  const add2: Add = (num1, num2) => num1 + num2;
  

  type Add2 = (num1: number, num2: number) => number;

// 1.10

type FrontendDeveloper = {
    skill: string[];
    designation1: 'FrontendDevelper'
}
type BackendDeveloper = {
    skill: string[];
    designation2: 'BackendDeveloper'
}

type FullStackDeveloepr = FrontendDeveloper & BackendDeveloper;

const fullStackDeveloper : FullStackDeveloepr = {
    skill: ['html', 'css', 'js'],
    designation1: "FrontendDevelper",
    designation2: "BackendDeveloper"
}



type User = {
    name: string;
    email?: string;
    gender: 'Male' | 'Female';
    bloodGroop: 'A' | 'B' | 'O' | 'AB'
}

const jan: User = {
    name: 'Humaira',
    email: 'lkdjfklds',
    gender: "Female",
    bloodGroop: "B"
}


// 1.11  
  // ternary operator ||  optional chiangin || nullish coalescing operator

  const age: number = 22;

  const isAdult = age > 18 ? 'Adult' : 'Infant';
  console.log(isAdult)


  const isAuthenticated = 'dkfj';
  const output1 = isAuthenticated ?? 'guest'
  const output2 = isAuthenticated ? 'Authenticate' : 'unAuthenticate';

  console.log('output11' , output1);
  console.log('output2' , output2)


  type User2 = {
    name: string;
    age: number;
    occupation: string;
    isLooking: boolean;
    address: {
        city: string;
        road: string;
        presentaddress: string;
        permanentAdress?: string
    }
  }

  const myWife: User2 = {
    name: 'Humaira',
    age: 20,
    occupation: 'dkfjjkd',
    isLooking: true,
    address: {
      city: 'fkgj',
      presentaddress: 'lfdjg',
      road: 'lkdfgjids',
      permanentAdress: 'dkfj'
    }
    
  }

  const permanentAdress = myWife?.address?.permanentAdress ?? 'No Permanent Adress';
  console.log({permanentAdress})






}

