
var student_name = [];
var student_email = [];
var student_id = [];
var n = 1;
var x = 0;
let userList = [];
let sendBtn = document.getElementById('send');

function submitForm() {
 
    let data = {
        name: document.getElementById('names').value,
        email: document.getElementById('emails').value,
        studentID: document.getElementById('studID').value,
    }

    userList.push(data);
    localStorage.setItem("userList", JSON.stringify(userList));
}
let UserListparsed = JSON.parse(localStorage.getItem("userList"));

function AddRow(){
			var AddRown = document.getElementById('show');
			var NewRow = AddRown.insertRow(n);
			student_name[x] = document.getElementById("names").value;
			student_email[x] = document.getElementById("emails").value;
			student_id[x] = document.getElementById("studID").value;
			var cel1 = NewRow.insertCell(0);
			var cel2 = NewRow.insertCell(1);
			var cel3 = NewRow.insertCell(2);
			cel1.innerHTML = student_name[x];
			cel2.innerHTML = student_email[x];
			cel3.innerHTML = student_id[x];

			n++;
			x++;
        }