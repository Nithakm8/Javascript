// console.log('start');
// setTimeout(()=>{
//     console.log('Hello');
    
// },2000)
// console.log('End');


// function sayHello(callback){
//     callback();
// }
// function greet(){
//     console.log('good morning');
    
// }
// sayHello(greet)

// function sayHello(name,callback){
//     setTimeout(()=>{
//          console.log(`Hello ${name}`);
//     callback();
//     },1000)
// }

// function sayGoodbye(){
//     console.log('Goodbye');
    

// }
// sayHello('Niya',sayGoodbye)

function step1(cb){
    setTimeout(()=>{
        console.log('step 1');
        cb();
    },1000)
}
function step2(cb){
    setTimeout(()=>{
        console.log('step 2');
        cb();
    },1000)
}
function step3(cb){
    setTimeout(()=>{
        console.log('step 3');
        cb();
    },1000)
}
step1(()=>{
    step2(()=>{
        step3(()=>{
            console.log('All are done');
            
        })
    })
})