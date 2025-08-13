const mypromise=new Promise((resolve,reject)=>{
    let result=true
    if(result){
        resolve('success')
    }
    else{
        reject('failed')
    }
})
mypromise.then((result)=>{
    console.log(result);
    
})
.catch((err)=>{
    console.log('error occured');
    console.log(err);
    
})