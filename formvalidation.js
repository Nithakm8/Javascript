const form1=document.getElementById('form')
form1.addEventListener("submit",(e)=>{
    e.preventDefault()
   
const username=document.getElementById('name').value
const paswd=document.getElementById('password1').value
const db=document.getElementById('dob1').value
const email=document.getElementById('email1').value
const phone=document.getElementById('phone1').value

let result=true;


const regexname=/^[a-zA-Z]{1,20}$/;
if(!regexname.test(username)){
    document.getElementById("usernameError").textContent='Name must be 1-20 letters'
    result=false;
}
else{
    document.getElementById('usernameError').textContent="";
}
const regexpassword=/^(?=.*a-z)(?=.*A-Z)(?=.*[0-9])(?=.*[!@#$%^&*].{8,}$)/
if(!regexpassword.test(paswd)){
    document.getElementById("passwordError").textContent='please enter valid password'
    result=false;
}
else{
    document.getElementById('passwordError').textContent="";
}
  const regexemail=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
 if(!regexemail.test(email)){
   document.getElementById('emailError').textContent='Enter valid email address'
   result=false
}
else{
    document.getElementById('emailError').textContent="";
}
const regexphone=/^[6-9][0-9]{9}$/
if(!regexphone.test(phone)){
    document.getElementById('phoneError').textContent='Enter 10 digits valid number'
}
else{
    document.getElementById('phoneError').textContent="";
}


let regexdob=/^(0[1-9]|[12][0-9]|3[01])\-(0[1-9]|1[0-2])\-\d{4}$/
if(!regexdob.test(db)){
    document.getElementById('dobError').textContent='Enter valid date'
}
else{
    document.getElementById('dobError').textContent="";
}
if(result){
    alert('Form submitted successfully')
}
})