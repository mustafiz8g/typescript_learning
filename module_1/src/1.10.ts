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


    // revision   1 =====================================================================================================

    type NewTeacher = 'fresherTeacher' | 'goodTeacher';
    type OldTeacher = 'betterTeacher' | 'experiencedTeacher';
    type Teacher = NewTeacher | OldTeacher
    
    const hasan : NewTeacher = "fresherTeacher";
    const juwel : OldTeacher = 'experiencedTeacher';

    const jiaSir : Teacher = 'betterTeacher'




  type Character = {
    name: string;
    age: number;
    blood: 'O+' | 'B+'| 'AB+'|'O-' |'AB-' ;
    gender: 'male' | 'female'

  } 

  const sabiha  : Character = {
    name: 'Sabiha',
    age: 22,
    blood : 'O+',
    gender : "female"
  }


  type EnglishTeacher = {
    skills: string[];
    designation1 : 'English Teacher'
  }
   type MathTeacher = {
    skills: string[];
    designation2 : 'MathTeacher'
   }

  type Teacher2 = EnglishTeacher & MathTeacher;

  const teacher : Teacher2 = {
     skills: ['tense', 'verb', 'preposition'],
     designation1: "English Teacher",
     designation2: "MathTeacher"
     
  }


    //
}