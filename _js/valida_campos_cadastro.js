// JavaScript source code
function validar(x) {
    var elemento = document.getElementById("id_" + x).value;
    var msg_box = document.getElementById("msg_" + x).innerText.length;
    var re_nome = /^[A-z]{3,}/;
    var re_email = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]/i;
    var re_cpf = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
    var re_tel = /.*/;

    if (msg_box <= 0) {
        switch (x) {
            case 'nome':
                if (re_nome.test(elemento) == false) {
                    document.getElementById("id_" + x).setAttribute("style", "border-bottom-color: #eb4a46");
                    document.getElementById("msg_" + x).innerText = "Campo deve conter 3 caracteres ou mais";
                }
                break;

            case 'email':
                if (re_email.test(elemento) == false) {
                    document.getElementById("id_" + x).setAttribute("style", "border-bottom-color: #eb4a46");
                    document.getElementById("msg_" + x).innerText = "Email inv\u00e1lido";
                }
                break;

            case 'cpf':
                if (re_cpf.test(elemento) == false) {
                    document.getElementById("id_" + x).setAttribute("style", "border-bottom-color: #eb4a46");
                    document.getElementById("msg_" + x).innerText = "Cpf inv\u00e1lido";
                }
                break;
            default:
                break;
        }
    }
        //msgbox > 0
    else {
        switch (x) {
            case 'nome':
                if (re_nome.test(elemento) == false) {
                    document.getElementById("id_" + x).setAttribute("style", "border-bottom-color: #eb4a46");
                    document.getElementById("msg_" + x).innerText = "Campo deve conter 3 caracteres ou mais";
                }
                else {
                    document.getElementById("id_" + x).removeAttribute("style");
                    document.getElementById("msg_" + x).innerText = "";
                }
                break;
            case 'email':
                if (re_email.test(elemento) == false) {
                    document.getElementById("id_" + x).setAttribute("style", "border-bottom-color: #eb4a46");
                    document.getElementById("msg_" + x).innerText = "Email continua inv\u00e1lido";
                }
                else {
                    document.getElementById("id_" + x).removeAttribute("style");
                    document.getElementById("msg_" + x).innerText = "";
                }
                break;

            case 'cpf':
                if (re_cpf.test(elemento) == false) {
                    document.getElementById("id_" + x).setAttribute("style", "border-bottom-color: #eb4a46");
                    document.getElementById("msg_" + x).innerText = "Cpf inv\u00e1lido";
                }
                else {
                    document.getElementById("id_" + x).removeAttribute("style");
                    document.getElementById("msg_" + x).innerText = "";
                }
                break;
            default:
        }
    }
    return false;
}; 

function verficaInputs (){
    var inputs = document.getElementsByTagName('input');
    var ok = 0 ;
    for(var i = 0; i < inputs.length-1; i++) {
        if (inputs[i].value.length > 0) {
            ok = ok + 1;
        }
        if (ok == 4 ){
            document.getElementsByTagName("input")[4].removeAttribute("disabled");
        }
        else{
            document.getElementsByTagName("input")[4].disabled = true;
        }
    }
    return false;
}; 

function gravarRegistro (){     
    var inputs = document.getElementsByTagName('input')
    var objLista = JSON.parse(localStorage.getItem ("lista"));
    var novoItem = {"name": inputs[0].value, "cpf": inputs[2].value, "phone": inputs[3].value, "email":inputs[1].value}
    objLista.push(novoItem);
    localStorage.setItem("lista",JSON.stringify(objLista));
};