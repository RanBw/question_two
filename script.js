const button = document.getElementById("submit");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");



button.addEventListener("click", function(){
    if(firstName.value!=='' &&lastName.value!=='' )
    alert("!Congratulations "+firstName.value+" "+lastName.value+" you are now signed up")
})