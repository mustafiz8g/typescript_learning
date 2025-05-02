

{




// destructuring

const user = {
    id: 111,
    name : {
        firstName: 'Mustafiz',
        middleName : 'Rahman',
        lastName: 'Tusher'
    },
    contactInfo : '234324',
    address: 'Uganda'
}

const {
     contactInfo  ,
     name : { middleName  } 
    } = user;




// array destructuring

const myFriends = ['chandler', 'joy', 'ros', 'rahel','pross', 'moni', 'firir'];
const [,, bestFriend, ...rest] = myFriends;




}



