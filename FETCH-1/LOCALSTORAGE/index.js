let myForm = document.getElementById("form");
let btn = document.getElementById("getData");

myForm.addEventListener('submit',function(event){
    event.preventDefault();
    let name = myForm.querySelector('[name="name"]').value;
    let age = myForm.querySelector('[name="age"]').value;
    localStorage.setItem("name",name);
    localStorage.setItem("age",age);
    
    console.log(localStorage);

    btn.addEventListener('click',function(){
        const storedName = localStorage.getItem('name');
        const storedAge = localStorage.getItem('age');
        document.getElementById("display").innerHTML="Your name is "+storedName+" and your age is "+storedAge;;

    })
    
})



   
    
   
      





