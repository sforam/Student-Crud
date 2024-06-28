var addBtn = document.querySelector('#add-btn');
// gloable variable declartion


var userData = [];
var ide1 = document.querySelector('id')
var nm=document.querySelector('#name')
var em = document.querySelector('#email')


var registerForm = document.querySelector('#registerForm');
var registerbtn = document.querySelector('#register-btn-1');



registerbtn.onclick = function(e){
    e.preventDefault();
    registerData();
    // registerForm.reset('');
    window.location.reload();


}

function registerData(){
    userData.push({
       
                name : nm.value,
                email : em.value

        });
        var userString = JSON.stringify(userData);
        localStorage.setItem("userData",userString);
}





// registerbtn.addEventListener('click',function(e)
// {
//     e.preventDefault()

//    userData.push({
       
//         name : nm.value,
//         email : em.value


//    });
  
   
//    var userString = JSON.stringify(userData);
//    localStorage.setItem("userData",userString);
//    registerForm.reset(' ');
// })





