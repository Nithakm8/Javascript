let arr=[]
let exit=false
while(!exit){
     let task=Number(prompt('Please enter a task\n1.add task\n2.Exit'))
   switch(task){
    case 1:      
       
        arr.push(prompt('Enter task:'))
        console.log(arr );
        console.log(localStorage.setItem('task',JSON.stringify(arr)))
        

        break;
    case 2:alert('Exited')
            exit=true;
            break;
        default:alert('Wrong entry')
}
}