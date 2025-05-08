{
    // type guards

    // typeof --> type guard

    type AlphaNumeric = string | number ;
    
    const add = (param1: AlphaNumeric, param2: AlphaNumeric) : AlphaNumeric => {

        if(typeof param1 === 'number' && typeof param2 === 'number'){
            return param1 + param2
        }
        else {
            return param1.toString() + param2.toString();
        }
    };

    const result1 = add('2','3')
    console.log(result1)





    // in guard 
    type NormalUser = {
        name: string
    }
    type AdminUser = {
        name: string;
        role: 'admin'
    }

    const getUser = (user : NormalUser | AdminUser) => {
        if('role' in user){
            
            console.log(`${user.name} 's role is ${user.role}`)
        }
        else{
            console.log(`${user.name} 's role is  noremal`)
        }
    }

    const normalUser : NormalUser = {
        name: 'Mr normal vai'
    }
    const adminUer: AdminUser = {
        name: 'Mr Admin vai',
        role: 'admin'
    }

    // getUser(normalUser)
    getUser(adminUer)





    // Revision 1 ==========================================================

    type StrNum = string | number

    const doMath = (p1: StrNum , p2 : StrNum ) : StrNum => {
        if(typeof p1 === 'number' && typeof p2 === 'number'){
           return p1 + p2
        }
        else{
            return p1.toString() + p2.toString()
        }
    }

    const doMAth = doMath(2,'dk');
    console.log(doMAth)




    type User = {
        name: string
    }
    type Moderator = {
        name: string;
        role : 'moderator'
    }

    const whichUser = (user : User | Moderator) => {
        if('role' in user){
            return `${user.name} is Moderator`
        }
        else{
            return `${user.name} is Normal`
        }
    } 
    const sabiha : User ={
        name: 'Sabiha'
    }
    const mustafizur : Moderator ={
        name: 'Mustafizur',
        role: 'moderator'
    }

    const isUser = whichUser(sabiha);
    console.log(isUser)






    //
}