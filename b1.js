// funcion para entrar al sistema //
function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
function login()
{
var u =  document.getElementById("usuario").value;
var c =  document.getElementById("myInput").value;
i=1;
usr="juan@gmail.com";
cl="12345";
      if (u == usr && (c==cl || c=="54321"))
       {
            document.write("bienvenido al sistema")
            i=4;
       }
       else {
                      document.write('contraseña y usuario incorrecto')
       }
       

}