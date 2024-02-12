var email = document.getElementById('email');
var Password = document.getElementById('Password');
var LoginForm = document.getElementById('LoginForm');



LoginForm.addEventListener('submit',function(event){
event.preventDefault();
console.log(email.value);
console.log(Password.value);  
var userList = JSON.parse(localStorage.getItem('user'));
var passLogin = false;
for(let i = 0; i < userList.length; i++){
if(email.value == userList[i].email && password.value == userList[i].password  ){
passLogin = true;
break;

}

}
if(passLogin == true){
    window.location.href = './STARHOTELS.html';
   
}
else{
    alert('wrong email or password')
}


})
