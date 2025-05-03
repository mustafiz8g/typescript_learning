"use strict";
{
    // spread operator 
    // rest operator
    // destructuring
    // learning spread operator
    const bros1 = ['Sabiha', 'Sadia', 'Taiba'];
    const bros2 = ['Mustafiz', 'Tuli', 'Saidur'];
    bros1.push(...bros2);
    const mentors = {
        typescript: 'Mezba',
        redux: 'Mir',
        dbms: 'Mizan'
    };
    const mentors2 = {
        prisma: 'Firoz',
        next: 'Tanmoy',
        cloud: 'Nahid'
    };
    const mentorList = Object.assign(Object.assign({}, mentors), mentors2);
    //learn rest operator
    /**
     const greetFriends = (friend1 :string, friend2 : string, friend3 : string) => {
        console.log(`Hi ${friend1} ${friend2} ${friend3}`)
    }
    
    greetFriends('Abul', 'Babul', 'Tabul', 'Ubul', 'Labul')
    
    
     */
    const greetFriends = (...friends) => {
        // console.log(`Hi ${friend1} ${friend2} ${friend3}`)
        friends.forEach((friend) => console.log(`Hi ${friend}`));
    };
    greetFriends('Abul', 'Babul', 'Tabul', 'Ubul', 'Labul');
}
