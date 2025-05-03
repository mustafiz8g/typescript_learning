{
    // CONDITIONAL TYPE
    type a1 = null;
    type b2  = undefined;

    type x = a1 extends null ? true : false   // conditional type
  

    type b1 = number;
    type c2  = undefined;

    type y = b1 extends null ? true : false   // conditional type
  
   
    type m = a1 extends null ? true : b1 extends undefined ? undefined : any ;



    type Sheikh = {
        bike: string;
        car: string;
        ship: string
    }

    // car ase kina /  bike ase kina / ship ase kina / tracktor ase kina

    type CheckVehicle<T> = T extends keyof Sheikh ? true : false ;

    type HasBike = CheckVehicle<'car'>





























    //
}