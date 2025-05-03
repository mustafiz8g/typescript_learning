

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




// revision  ----========================================================================


const computer = {
    operating: 'windows',
    ram: '26gb',
    software: {
        soft1: 'adobe',
        soft2: 'davinci'
    }
};

const { ram, software : {soft1}} = computer

const component = ['cpu', 'ram', 'webcam', 'keyboard', 'mouse', 'monitor'];
const [,, camera, ...restAll] = component




}



