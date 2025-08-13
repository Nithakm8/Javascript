// function inputChange(){
//     console.log(document.getElementById('username').value)
// }


const form=document.getElementById('form')
const userInput=document.getElementById('username')
const passwordInput=document.getElementById('password')

const username="Nitha"
const password="nitha123";
form.addEventListener('submit',(event)=>{
    event.preventDefault()
    alert('form submitted')



if(userInput.value==username && passwordInput.value==password){
    alert('welcome nitha')
}
else{
    alert('wrong credentials')
}
})

userInput.addEventListener('change')