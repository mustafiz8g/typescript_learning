{
    // statics


    class Counter{
        static count: number = 0;

       static increment(){
           return  (Counter.count = Counter.count + 1)
        }
      static  decrement(){
           return ( Counter.count = Counter.count - 1)
        }
    }

    // const instance1 = new Counter();
    console.log(Counter.increment())  // 1 -> different memory
    console.log(Counter.increment())  // 1 -> different memory
    console.log(Counter.increment())  // 1 -> different memory

    const instance2 = new Counter();
    console.log(instance2.increment())  // 1 --. different menty
    console.log(instance2.increment())  // 1 --. different menty
    console.log(instance2.increment())  // 1 --. different menty

    const instance3 = new Counter();
    console.log(instance3.increment())  // 1 --. different menty
    console.log(instance3.increment())  // 1 --. different menty
    console.log(instance3.increment())  // 1 --. different menty
























    //
}