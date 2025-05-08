{
    //  interface - generic

    interface Developer<T,X = null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear : number;
        };
        smartWatch: T;
        bike? : X
    }

    type OraimaWatch = {
        brand: string;
        model: string;
        display: string;
    }

    const poorDeveloper : Developer<OraimaWatch> = {
        name: 'mustafizur',
        computer: {
            brand: 'asus',
            model: 'dfjdlkfj',
            releaseYear: 34324
        },
        smartWatch:{
            brand: 'oraima',
            model: '22mkk',
            display: 'oled'
        }

    }

    interface AppleWatch {
        brand: string;
        model: string;
        heartTrack: boolean;
        sleepTrack: boolean
    }    
    

    interface YamahaBike {
        model: string;
        engineCapacity: string
    }

    const richDeveloper : Developer<AppleWatch, YamahaBike> = {
        name: 'Rich Develoepr',
        computer: {
            brand: 'apple',
            model: 'dfjdlkfj',
            releaseYear: 34324
        },
        smartWatch:{
            brand: 'apple',
            model: 'somthing',
            heartTrack: true,
            sleepTrack: true
        },
        bike: {
            model: 'yamaha',
            engineCapacity: '100cc'
        }

    }


    /////////////////////////////////////////////////////////


    interface Student<A,B = null> {
        name: string;
        age: number; 
        mobile:{
            brand: string;
            model: string;
            rom: number
        }
        laptop: A;
        bike?: B;
    }

    const poorStudent : Student<string,string> = {
        name: "Mustafizur",
        age: 22,
        mobile: {
            brand: 'Apple',
            model: '16',
            rom: 228
        },
        laptop: 'Lenovo',
        bike: 'royal'
        
    }

    interface Laptop {
        name: string;
        ssd: boolean
    }

    const myWife: Student<Laptop>  = {
        name: 'Anzuman',
        age:21,
        mobile:{
            brand:'apple',
            model: '22',
            rom: 32
        },
        laptop: {
            name: 'Apple',
            ssd: true
        }
    }

   type Iphone = {
    model : string;
    ram: number;
    charger: string
   }

   interface Mackbook {
     name: string;
     ssd:  number
   }

   const bou : Student<Iphone,Mackbook> = {
    name : 'Anzuman Ara Sabiha',
    age: 21,
    mobile: {
        brand: 'Apple',
        model: 'dfkj',
        rom: 64,
    },
    laptop : {
        model: 'fjk',
        ram: 128,
        charger: '80watt'
    },
    bike: {
        name: 'Mackbook air 24',
        ssd: 512,
    }
   }







 type Wives<B> = Array<A>
 
 const jan: Wives<string>  = [2, 22]























    //
}