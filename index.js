let username;
document.getElementById("myButton").onclick = function()
{
    username = document.getElementById("myText").value;
    console.log(username);
    if(username=="BxAs")
    {
         document.getElementById("myLabel").innerHTML = "Hello Admin "+ username;
         window.location.href = "https://selvensas.github.io/JS/"; 
    } 
   else{
    document.getElementById("myLabel").innerHTML = "Hello  "+ username;
    window.alert("Normal User")
   }
}
