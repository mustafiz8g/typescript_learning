{
    // utitlity types
    //pick

    type Person = {
        name: string;
        age: number;
        email?: string;
        contactNo : string;
    }

    type Name = Pick<Person,'name'>
    type NameAge = Pick<Person, 'name' | 'age' >



    // omit
    type Contactinfo = Omit<Person, 'name' | 'age'>



    // Required
    type PersonRequired = Required<Person>

    // Partial
    type PersonPartial = Partial<Person>

    // Readonly
    type PersonReadonly = Readonly<Person>

    const person1 : PersonReadonly = {
         name:  'Mary',
        age: 33,
        contactNo: '3233'
    }
    // person1.name = 'Mustafizur'



    // record 
    // type MyObj = {
    //     a: string;
    //     b: string
    // }

    type MyObj = Record<string, string>
    const obj1 : MyObj = {
        a: 'aa',
        b: 'bb',
        c: 'cc',
        // d: 22 
    }

    const EmptyObj : Record<string, unknown> = {}

    EmptyObj.name = ''













    //
}