function step1(value){
    return new Promise((resolve)=>{
        console.log('step1');
        resolve(value)
        
    })
}
function step2(value){
    return new Promise((resolve,reject)=>{
        console.log('step2');
        // resolve(value*2)
        reject('Rejected at step2')
        
    })
}
function step3(value){
    return new Promise((resolve)=>{
        console.log('step3');
        resolve(value+10)
        
    })
}

// step1(10).then(step2).then(step3)
// // then((result)=>{
// //     console.log('Final result=',result);
//     .catch((err)=>{
//     console.log(err);
    
// })
async function getData(){
    const result1=await step1(6)
  
    const result2=await step2(result1).catch((err)=>{
        console.log(err);
        })  
    const result3=await step3(result2)
    console.log(result3);
    
}
getData()


