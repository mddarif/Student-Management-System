function register(){

alert("Registered Successfully");
window.location="login.html";

}

function login(){

window.location="students.html";

}

function addStudent(){

fetch("/students/add",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

name:document.getElementById("name").value,
email:document.getElementById("email").value,
course:document.getElementById("course").value

})

})
.then(res=>res.json())
.then(()=>{
alert("Student Added Successfully");
loadStudents();
})

}

function loadStudents(){

fetch("/students/all")
.then(res=>res.json())
.then(data=>{

let list=document.getElementById("list");

if(!list) return;

list.innerHTML="";

data.forEach(s=>{

list.innerHTML+=`
<tr>
<td>${s.name}</td>
<td>${s.email}</td>
<td>${s.course}</td>
</tr>
`;

})

})

}

loadStudents();
function registerUser(){

let username = document.getElementById("regUser").value;
let password = document.getElementById("regPass").value;

if(username=="" || password==""){
alert("Please fill all fields");
return;
}

alert("Registration Successful");

window.location="login.html";

}