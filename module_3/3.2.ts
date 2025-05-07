{
    //  inheritance in opp

    class Person{
        name : string;
        age: number;
        address: string

        constructor(name: string, age: number, address: string){
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getSleep(numberOfHours :number){
        console.log(`${this.name} will sleep for ${numberOfHours} `)
        }
    }


    class Student extends Person{
        constructor(name: string, age: number, address: string){
           super(name, age, address)
        }
      
    }

    const student1 = new Student ('Mustafizur', 22 , 'uganda')
    student1



    class Teacher extends Person{
        
        designation : string;

        constructor(name: string, age: number, address: string , designation: string){
            super(name, age, address)
            this.designation = designation
        }
    
        takeClass(numberOfClass : number){
            console.log(`${this.name} will take class for ${numberOfClass}`)
        }
    }

    const teacher1 = new Teacher('Jahid', 30, 'andorkila', 'Math')

 teacher1.



















    //
}