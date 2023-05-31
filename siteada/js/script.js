document.getElementById("enviar").addEventListener("click", validardados)

function validardados(){
   if (document.getElementById("nome").value != "" && 
        document.getElementById("email").value != "" && 
        document.getElementById("phone").value != "") {
alert("Dados enviados com sucesso.")
}
else {
        alert("Dados não informados corretamente. Veja os campos Nome, Email e Telef..")
        }     
}