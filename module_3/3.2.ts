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

 


    // Revision 1 ==========================================================

    // inheritance in opp 

    class Computer {
        constructor(public name: string , public processor : string,  public price: number){
        }
        iChoose(hour :  number){
            console.log(`${this.name} is good for ${this.processor} which cost ${this.price} and I use ${hour} hour`)
        }
    }

    class MyComputer extends Computer{
        constructor(public name: string , public processor : string,  public price: number, public ram : string , public motherboard: string){
            super(name,processor,price);
        }
        codingPC(hour :number){
            console.log(`${this.name} is for coding i use ${hour} hour`)
        }
       
   
    }
    
    class HerComputer extends Computer{
        constructor(public name: string , public processor : string,  public price: number, public grafix: string){
            super(name,processor,price);
        }
        gamingPC(gameName : string){
            console.log(`${this.name} is for gaming . ${gameName}`)
        }
       
    }



    const computer = new Computer('Asus', 'Ryzen',60000);
    const myComputer = new MyComputer('Apple','bionicChip', 200000,'16GB', 'strong' );
    const herComputer = new HerComputer('Dell', 'Amd', 90000, 'RTX- 5090')


    console.log(computer);
    console.log(myComputer);
    console.log(herComputer)

    computer.iChoose(22);
    myComputer.iChoose(33);
    myComputer.codingPC(23);
    herComputer.gamingPC('free fire')















    //
}