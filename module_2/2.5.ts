{
  //
 
 
   const createArray = (param: string) : string[] => {
    return [param]
  }
  const res1 = createArray('Bangladesh')
  console.log(res1)


  const createArrayWithGeneric = <T>(param: T) : T[] => {
    return [param]
  }
  const resGeneric  = createArrayWithGeneric<string>('bangal')
  type User = {id: number ; name: string}
  const resGenericObj = createArrayWithGeneric<User>({id:222, name:'Mr'})
  console.log(resGeneric)
  console.log(resGenericObj)
  



  const createArrayWithTuple = <T,Q>(param1: T, param2: Q) : [T,Q]  => {
    return [param1 , param2]
  }
  const resGenericTuple  = createArrayWithTuple<string, number>('bangal', 33)

  const resGenericTuple1  = createArrayWithTuple<string, {name: string}>('bangal' , {name: 'Mustafizur'})


  console.log(resGenericTuple)
  console.log(resGenericTuple1)


  
  const addCourseToStudent = <T>(student : T) => {
    const course = 'Next Level Web Development'
    
    return {
        ...student,
        course
    }
  }

  const student1 = addCourseToStudent({name: 'Mr x', email: '@gmail.com', devType: 'NLWD'})
  console.log(student1)
  const student2 = addCourseToStudent({name: 'Mr x', email: '@gmail.com', hasWatch: 'Apple Watch'})
  console.log(student2)




// revision ==================================================

const getName = (param:string) : string[] => {
  return [param]
}
const name = getName('Mustafizur d');
console.log(name)



const createArrayWithGeneric1 = <T>(param:T) : T[] => {
  return [param]
}







 

  //
}