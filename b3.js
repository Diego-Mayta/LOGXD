function myFunction() {
    var x = document.getElementById("cont");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
}
function login()
{
var no =  document.getElementById("nom").value;
var ap =  document.getElementById("ape").value;
var co =  document.getElementById("cor").value;
var contra =  document.getElementById("cont").value;
var us=no+"123"
i=1;
usr="juan@gmail.com";
cl="12345";
document.write('Su Nombre es :'+ no + " "+ap+"<br>")
document.write("usuario "+ us+"<br>")
document.write('Su Correo es:'+ co +"<br>")
document.write('Su Contraseña es:'+contra+"<br>")

}