
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
  
 










    //
}