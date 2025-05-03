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

































    //
}