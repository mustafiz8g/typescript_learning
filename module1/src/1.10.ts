{
    //
    // union types

    // type FrontendDeveloper = 'fakibasDeveloper' | 'juniorDeveloper'
    // type FullStackDeveloepr = 'FrontendDeveloper' | 'expertDeveloper'


    // type Developer = FrontendDeveloper | FullStackDeveloepr;



    // const newDeveloper : FrontendDeveloper = 'juniorDeveloper'

    // type User = {
    //     name: string;
    //     email? : string;
    //     gender: "male" | "female";
    //     bloodGroup : 'O+' | 'A+' | 'O+'
    // }
    
    // const user1 : User = {
    //     name: 'Mustafizur', 
    //     gender: 'male',
    //     bloodGroup: 'O+'
    // }



    type FrontendDeveloper = {
        skills : string[];
        designation1: 'Frontend Developer';
        
    }
    type BackendDeveloper = {
        skills : string[];
        designation2: 'Backend Developer';

    }
    
    type FullStackDeveloepr = FrontendDeveloper & BackendDeveloper 
    const fullStackDeveloper : FullStackDeveloepr = {
        skills: ['Html', 'Css', 'express'],
        designation1: 'Frontend Developer',
        designation2: 'Backend Developer'
    }




    //
}