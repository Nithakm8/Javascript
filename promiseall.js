const p1=new Promise((resolve,reject)=>{
    resolve('promise1')
})
const p2=new Promise((resolve,reject)=>{
    // resolve('promise2')
    reject('rejected at promise2')
})
const p3=new Promise((resolve,reject)=>{
    resolve('promise3')
})
const p4=new Promise((resolve,reject)=>{
    resolve('promise4')
})
// Promise.all([p1,p2,p3,p4])
// .then((result)=>{
//     console.log(result);
    
// })
// .catch((err)=>{
//     console.log(err);
// })

//race
// Promise.race([p1,p2,p3,p4])
// .then((result)=>{
//     console.log(result);
    
// })
// .catch((err)=>{
//     console.log(err);
    
// })

//allsettled

// Promise.allSettled([p1,p2,p3,p4])
// .then((result)=>{
    
// console.log(result);
// })


//any
Promise.any([p1,p2,p3,p4])
.then((result)=>{
    console.log(result);
    
})
.catch((err)=>{
    console.log(err);
    
})