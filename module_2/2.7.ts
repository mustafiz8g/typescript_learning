{
    // generic constraint with keyof operator

    type Vehicle = {
        bike: string;
        car: string;
        ship: string
    }
    type Owner = 'bike' | 'car' | 'ship' //manually
    type Owner2 = keyof Vehicle

    const person1 : Owner = 'car'
    const person2 : Owner2 ='ship'







const getPropertyValue =<X, Y extends keyof X> (obj: X, key :Y) => 
    {
   return obj[key]
}

const user = {
    name: 'Anzu',
    age: 22,
    address: 'Mym'
}

const result1 = getPropertyValue(user,'age' )

    // const user = {
    //     name: 'Anzu',
    //     age: 22,
    //     address: 'Mym'
    // }

    // user['address']
















    //
}