const students=[
    {name:'Nithya',class:10,rno:1},
    {name:'Srithik',class:10,rno:2},
    {name:'Nithin',class:10,rno:3},
    {name:'Jitha',class:10,rno:4},
    {name:'Reena',class:10,rno:5}
]
// document.getElementById('showstudent').addEventListener('click',setStudent)   
document.getElementById('showstudent').addEventListener('dbclick',setStudent) 
// document.getElementById('showstudent').removeEventListener('click',setStudent)
function setStudent(){
    let str=''
    students.forEach(stud=>{
        str+=`
            <div id="student">
            <h2>Name:${stud.name}</h2>
            <h3>Class:${stud.class}</h3>
            <h4>Rollno:${stud.rno}</h4>
            </div>
        `
    })
    document.getElementById('students').innerHTML=str
    document.getElementById('students').style.backgroundColor='blue'
    // document.getElementById('students').innerHTML +='<button id="removeStudents">Remove students></button> '
    // document.getElementById('removeStudents').addEventListener('click',()=>{
    //     document.getElementById('students').style.display='none';
    // })
}
// setStudent();