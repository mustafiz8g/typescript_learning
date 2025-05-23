{
    //

    class Person{
        getSleep(){
            console.log(`I am sleeping for 8 hours per day`);
        }
    }

    class Student extends Person{
        getSleep(){
            console.log(`I am sleeping for 7 hours per day`);
        } 
    }

    class Developer extends Person{
        getSleep(){
            console.log(`I am sleeping for 6 hours per day`);
        }
    }

    const getSleepingHours = (param : Person) => {
        param.getSleep()
    }
   
    const person1 = new Person();
    const person2 = new Student();
    const person3 = new Developer();


    getSleepingHours(person1)
    getSleepingHours(person2)
    getSleepingHours(person3)



    class Shape {
        getArea(): number{
            return 0;

        }
    }
// pi * r* r
    class Circle extends Shape{
        radius: number;
        constructor(radius:number){
            super();
            this.radius = radius;
        }

        getArea(): number{
            return Math.PI * this.radius * this.radius
        }
    }
// Rectangle height width
    class Rectangle extends Shape{
        height: number;
        width: number
        constructor(height:number, width: number){
            super();
            this.height = height;
            this.width = width;

        }

        getArea(): number{
            return this.height * this.width
        }
        
    }

    const getShapArea = (param : Shape) => {
        console.log(param.getArea())
    }

   const shape1 = new Shape()
   const shape2 = new Circle(10)
   const shape3 = new Rectangle(11,22)

   getShapArea(shape1)
   getShapArea(shape2)
   getShapArea(shape3)


    //
}



// revision =================================================

class Dev {
    doCode(){
        console.log('I am coding 10 hour')
    }
}
class Frontend extends Dev{
    doCode() {
        console.log('I am coding 9 hour')

    }
}
class Backend extends Dev{
    doCode() {
        console.log('I am coding 8 hour')

    }
}

const dev1 = new Dev()
const dev2 = new Frontend()
const dev3 = new Backend()
dev1.doCode()
dev2.doCode()
dev3.doCode()
