

var firstName = document.getElementById('firstName');
var lastName = document.getElementById('lastName');
var birthdayDate = document.getElementById('birthdayDate');
var emailAddress = document.getElementById('emailAddress');
var Username = document.getElementById('Username');
var Country = document.getElementById('Country');
var registerForm = document.getElementById('registerForm');
var password = document.getElementById('password');
if(localStorage.getItem('user')!= null){

  var userList = JSON.parse(localStorage.getItem('user'));
}
else{
  var userList = [];

}

registerForm.addEventListener('submit', function(event){
    event.preventDefault();

 // console.log(firstName.value);
  //console.log(lastName.value);
  //console.log(birthdayDate.value);
//console.log(emailAddress.value);
 // console.log(Username.value);
 // console.log(Country.value);
 // console.log(password.value);
//localStorage.setItem('firstName',firstName.value);
//localStorage.setItem('lastName',lastName.value);
//localStorage.setItem('birthdayDate',birthdayDate.value);
//localStorage.setItem('emailAddress',emailAddress.value);
//localStorage.setItem('Username',Username.value);
//localStorage.setItem('Country',Country.value);
//localStorage.setItem('password',password.value);
var user = {
firstName: firstName.value,
lastName: lastName.value,
birthdayDate: birthdayDate.value,
emailAddress: emailAddress.value,
UsernamefirstName: firstName.value,
Country: Country.value,
password: password.value,

}
userList.push(user);

localStorage.setItem('user', JSON.stringify(userList));

alert('you have successfuly register');
window.location.href = './Login.html'
})

 

    
