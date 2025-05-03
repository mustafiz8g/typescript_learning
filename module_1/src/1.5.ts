
// Reference Type --> object

const user: {
    readonly company : string; // type --> literal types
    firstName : string;
    middleName? : string;  // optional type
    lastName : string;
    isMarried : boolean
} = {
    company : 'Programming Hero',
    firstName: 'Mustafizur',
    middleName: 'Rahman',
    lastName: 'Tusher',
    isMarried : false
}


// revise ----------------------------------------------------------------

const mobile : {
    readonly name: 'Mustafizur';
    camera: string;
    price: number;
    color? : string;
    isBeautiful: boolean

} = {
    name: 'Mustafizur',
    camera : '48px',
    price: 190000,
    // color: 'white',
    isBeautiful : true
}

// mobile.
// user. 

// mobile.name = 33
// mobile.name = 33
