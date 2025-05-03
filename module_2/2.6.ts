{
    // constrainent

   


    const addCourseToStudent = <T extends {id:number; name: string; email: string}>(student : T) => {
        const course = 'Next Level Web Development'
        
        return {
            ...student,
            course
        }
      }

      const student3 = addCourseToStudent({
        id:33,
        name: 'Hablu',
        email: 'dfj'
      })
      console.log(student3)
    
      const student1 = addCourseToStudent<{
        id: number;
        name: string;
        email: string;
        devType: string;
    }>({
        id: 111,
        name: 'Mr x',
        email: '@gmail.com', 
        devType: 'NLWD'})

      console.log(student1)

      const student2 = addCourseToStudent({
        id: 222,
        name: 'Mr x', 
        email: '@gmail.com', 
        hasWatch: 'Apple Watch'})

      console.log(student2)
    





















    //
}