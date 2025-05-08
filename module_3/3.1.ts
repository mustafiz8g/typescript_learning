
{
    //

  class Animal {
    // public  name: string;
    // public  species: string;
    // public  sound: string;

    // parameter properties

      constructor(public name: string, public species: string, public sound: string){
        // this.name = name;
        // this.species = species;
        // this.sound = sound
      }

      makeSound(){
        console.log(`the ${this.name} says ${this.sound}`)
      }
  }

  const dog = new Animal('German Shepard', 'dog', 'barking');
  const cat = new Animal('rakhal', 'cat', 'mewmew')
  cat.makeSound()
  dog.makeSound()
  
 

  // revision 1 =============================================

  class Car {
    constructor(public name: string, public price: number){
    }
    makeRun(){
      console.log(`Now on the way ${this.name} which cost ${this.price}`)
    }
  }
  const royal = new Car('Royal Enfield', 30000);
  console.log(royal);
  
  const r15 = new Car('Yamaha', 400000);
  console.log(r15);

  royal.makeRun();
  r15.makeRun()










    //
}