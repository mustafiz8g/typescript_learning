{

         //    generic type

        //  const rollnumbers : number[] = [2,3,4];
         const rollnumbers : Array<number> = [2,3,4];
         const classNumber : Array<number> = [2,3,4]
         const className: Array<string> = ['22','44', 'kdfj', 'kdfj'];
         const isClass: Array<boolean> = [true, false, true]

        //  const mentors: string[] = ['mr', 'ara', 'sabi', 'ke'];
         const mentors: Array<string> = ['mr', 'ara', 'sabi', 'ke'];

        //  const boolArray : boolean[] = [true, false, true];
         const boolArray : Array<boolean> = [true, false, true];

         

       type GenericArray1 = Array<number>
       type GenericArray2 = Array<string>
       type GenericArray3 = Array<boolean>

       type GenericArraya = Array<number>
       type GenericArrayb = Array<string>
       type GenericArrayc = Array<boolean>

       const animals : GenericArraya  = [22,33,22];
       const rollNumbers : GenericArrayb = ['33', '33', 'dkf'];
       const isGoodd : GenericArrayc = [true, false, true]


       type GenericArrayr<param> = Array<param>

       const wife : GenericArrayr<string> = ['dfd', 'kdjf', 'dfk']
       const numbers : GenericArrayr<number> = [2,3,4,2,2];
       const isIs : GenericArrayr<boolean> = [true, false, true, false]
   
       type GenericArr<T> = Array<T>

       const wivess : GenericArr<string> = ['jan', 'koliz', 'tia'];
       const borss : GenericArr<number> = [22,34,22]
       const add = (x: number, y: number) => x + y ;

      add(11,22)

    /**
       type GenericArray<param> = Array<param>

      const ages : GenericArray<number> = [18, 19 , 20];
      const wives : GenericArray<string> = ['sabiha', 'sadia', 'sejuti'];
      const isSelect : GenericArray<boolean> = [true, false, false]

     */


      type GenericArray<T> = Array<T>

      const ages : GenericArray<number> = [18, 19 , 20];
      const wives : GenericArray<string> = ['sabiha', 'sadia', 'sejuti'];
      const isSelect : GenericArray<boolean> = [true, false, false]

   
      interface Wivs {
        name: string;
        age: number
      }
      const wivs : GenericArr<Wivs> = [
        {name: 'Sabiha', age: 2},
        {name: 'Anjuman',age: 21}

      ]


      //
      
      
   /*
      const user : GenericArray<{name: string, age: number}>   = [
        {
            name: 'Mustafizur',
            age: 200
        },
        {
            name: 'Jhankar',
            age: 22
        },
        
      ]
   */
  interface User  {
    name: String;
    age: number
  }


      const user : GenericArray<User>   = [
        {
            name: 'Mustafizur',
            age: 200
        },
        {
            name: 'Jhankar',
            age: 22
        },
        
      ]


    // generic tuple
    type GenericTuplee<a,b> = [a,b];

    const jantus : GenericTuplee<string, string> = ['jan', 'suna']

    
    // const manush : [string, string] = ['mr x' , 'mr y']
    
    type GenericTuple<x,y> = [x , y]
    
    const manush : GenericTuple<string,string> = ['mr x' , 'mr y']

   
    const userWithid : GenericTuple<number, {name: string, email: string}> = [1111, {name: 'Mustafizur', email : '@gmail.com'}]



    // Revision 1  =========================================================================


    const students : string[] = ['karim', 'shaown', 'shuvo'];
    const age: number[] = [22,33,21];
    const isWorth : boolean[] = [true, false, true, true];

    type GenericStringArray = Array<string>;
    type GenericNumberArray = Array<number>;
    type GenericBooleanArray = Array<boolean>;

    const students2 : GenericStringArray = ['jodu','modu', 'kodu'];
    const ages2 : GenericNumberArray = [22,33,48];
    const isWorth2 : GenericBooleanArray = [true, false, true, true]


    type GenericArray22<T> = Array<T>

    const sir : GenericArray22<string> = ['jhankar', 'mezba', 'shafayat'];
    const therAge: GenericArray22<number> = [22,33,22];
    const isWorth22 : GenericArray22<boolean> = [true, false, true, false]


  const user3 : GenericArray22<{name: string, isGood: boolean}> = [
    {name:'Ali', isGood: true},
    {name: 'tormuz', isGood: false}
  ]

   type GenericTuple2<a,b> = [a,b]

   const agesOfStudent : GenericTuple2<number,number> = [33,44]
   const userwithEmail : GenericTuple2<number, {name: string, email: string}> = [1111, {name: 'Mustafizur', email : '@gmail.com'}]




    //
}