{
    // REMAINDER::: due to practice and understanding

    // promise


    // simulate
    const createPromise = () : Promise<string> => {
        return new Promise<string>((resolve, reject) => {
            const data : string = 'something'
            if(data){
                resolve(data)
            }
            else{
                reject('failed to load data')
            }
        })
    }
   

    // calling create promise funciton

    const showData = async() : Promise<string> => {
        const data : string = await createPromise();
        return data
        // console.log(data)
    }

    showData()





















    //
}