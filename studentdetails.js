 const form=document.getElementById('form1')
const cardformat=document.getElementById('students')
form.addEventListener('submit',(e)=>{
    e.preventDefault();

const name1=document.getElementById('nameinp').value;
const rollno1=document.getElementById('rollinp').value;
const class1=document.getElementById('classinp').value;


    let card=`
        <div id="student">
  <h5 id="namecard">Name:${name1}</h5>  
  <h5 id="rnocard">RollNo:${rollno1}</h5>
  <h5 id="classcard">Class:${class1}</h5>
</div>
    `


cardformat.innerHTML+=card;
form.reset();
})