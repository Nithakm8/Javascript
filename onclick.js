const students=[
    {name:'Sriyaan',class:10,rno:1},
    {name:'Srithik',class:10,rno:2},
    {name:'Sreedath',class:10,rno:3},
    {name:'Nithin',class:10,rno:4},
    {name:'Jitha',class:10,rno:5},
]

// document.getElementById('showstudents').removeEventListener('click',setStudents)
function setStudents(){
    let str=''
    students.forEach(student=>{
        str+=`
        <div id="student">
    <h2>Name:${student.name}</h2>
    <h3>Class:${student.class}</h3>
    <h4>Rollno:${student.rno}</h4>
    </div>`
    }
)
document.getElementById('students').innerHTML=str
document.getElementById('students').style.backgroundColor='blue'
}
//setStudents()