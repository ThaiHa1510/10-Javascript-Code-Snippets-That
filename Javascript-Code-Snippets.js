# Async /Await forEach 

const arr =[1,2,3];

const waitFor = (ms)=>new Promise(r=>setTimeout(r,ms));

const start = async (array)=>{
 await Promise.all(array.map(async (value,index)=>{
    await waitFor(20);
    console.log(`value : ${value} , index: ${index}`);
  }))
}
                        
