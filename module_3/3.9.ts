{
    //  Abstraction   1.interface   2. abstract


    // idear
    interface Vehicle1 {
        startEngine(): void;
        stopEngine(): void;
        move(): void;
    }

 
    // real implementation
    class Car implements Vehicle1 {
        startEngine(): void {
            console.log(`I am staring the car engine`)
        }
        stopEngine(): void {
            console.log(`i am stoping the car engine`)
        }
        move(): void {
            console.log(`i am moving the car`)
        }
        test(){
            console.log('I am just testing')
        }
    }



    const toyotaCar = new Car();
    toyotaCar.startEngine();






























    //
}