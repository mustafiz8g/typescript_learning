{
    // instance of guard

    class Animal{
        name: String;
        species: string;
        constructor(name: string, species: string){
            this.name = name;
            this.species = species
        }
        makeSound(){
            console.log('I am making sound')
        }
    }

    class Dog extends Animal{
        constructor(name : string,species : string){
            super(name, species);

        }
        makeBark(){
            console.log('I am barking')
        }
    }

    class Cat extends Animal{
        constructor(name : string,species : string){
            super(name, species);

        }
        makeMeaw(){
            console.log('I am mewmew')
        }
    }

    // smart way to handle caile amra funciton use kroete pari

    const isDog = (animal: Animal) : animal is Dog => {
        return animal instanceof Dog
    }
    const isCat = (animal: Animal) : animal is Cat => {
        return animal instanceof Cat
    }

    const getAnimal  = (animal : Animal) => {
        if(isDog(animal)){
            animal.makeBark()
        }
        else if(isCat(animal)){
            animal.makeMeaw()
        }
        else{
            animal.makeSound()
        }
    }


    const dog = new Dog('Dog vai', 'dog');
    const cat = new Cat('Cat vai', 'cat');
   getAnimal(dog)
    
    



// Revision 1 =======================================================================


class Course {
    name: string;
    topic: string;

    constructor(name: string, topic: string){
        this.name = name;
        this.topic = topic
    }
    myWord(){
        console.log(`A course is better than a degree`)
    }

}
class ReactCourse extends Course {
    constructor(name: string, topic: string){
        super(name,topic)
    }
    outPutOfReactCourse(){
        console.log(`this course give you strong foundation about react and nextjs`)
    }
}

class NextlevelCourse extends Course{
    constructor(name: string, topic: string){
        super(name,topic)
    }
    outPutOfNextLevelCourse(){
        console.log(`This course make you full stack developer`)
    }
}

// smart way te handle korar jonne chaile amra funciton bebohar korte pari
const isReact = (course: Course) : course is ReactCourse => {
    return course instanceof ReactCourse
}
const isNext = (course: Course) : course is NextlevelCourse => {
    return course instanceof NextlevelCourse
}

const  getOutputOfCourse = (course: Course) => {
   /*
    if(course instanceof ReactCourse){
        course.outPutOfReactCourse()
    }
    else if(course instanceof NextlevelCourse){
        course.outPutOfNextLevelCourse()
    }
    else{
        course.myWord()
    }
   */
    if(isReact(course)){
        course.outPutOfReactCourse()
    }
    else if(isNext(course)){
        course.outPutOfNextLevelCourse()
    }
    else{
        course.myWord()
    }

}


const react = new ReactCourse('React Accelerator', 'React and NextJs')
const nextLevel = new NextlevelCourse('Next Level Web Developement', 'TypeScript , DBMS Redux, Prisma , PostGress')

getOutputOfCourse(react)
getOutputOfCourse(nextLevel)


// console.log(react);
// console.log(nextLevel)



















    //
}