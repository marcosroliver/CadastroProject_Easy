//Javascript source code
function abreItem (a){
    var item = document.getElementById("li_"+a);

    if (item.querySelectorAll("div")[1].style.display === "none") {
        item.querySelectorAll("div")[1].style.display = "block";
        item.querySelectorAll("div")[0].style.display = "none";
    } 
};

function fechaItem (a){
    var item = document.getElementById("li_"+a);

    if (item.querySelectorAll("div")[1].style.display === "block") {
        item.querySelectorAll("div")[1].style.display = "none";
        item.querySelectorAll("div")[0].style.display = "block";
    } 
};

function excluirItem(a){
    var objLista = JSON.parse(localStorage.getItem ("lista"));
    objLista.splice(a,1);
    localStorage.setItem("lista",JSON.stringify(objLista));
    location.reload();
}

function atualizarItem(a){
    var inputs = document.getElementById("li_"+a).querySelectorAll('input');
    var objLista = JSON.parse(localStorage.getItem ("lista"));
    var novoItem = {"name": inputs[0].value, "cpf": inputs[2].value, "phone": inputs[3].value, "email":inputs[1].value};
    objLista[a] = novoItem;
    localStorage.setItem("lista",JSON.stringify(objLista));
    location.reload();
}
window.onload = function (){
    var myJson = JSON.parse(localStorage.getItem("lista"));
    var liItem ="";
    for (var i=0; i < myJson.length; i++) {
        liItem = liItem + '<li id ="li_'+i+'" onclick="abreItem('+i+')"><div id="div_name" class="div_name">'+myJson[i].name+'</div><div id="div_form" style="display:none;padding: 10px;"><table width="100%"><tr><td style="width: 98%" rowspan="3"><form method="post"><input type="text" id="id_nome"  name="nome" pattern="[A-Z][a-z].*" value="'+myJson[i].name+'" min="3" required onblur=""/><input type="email" id="id_email" name="e-mail" pattern="" value="'+myJson[i].email+'" onblur="" /><input type="text" id="id_cpf" name="cpf" value="'+myJson[i].cpf+'" onblur="" /><input type="text" id="id_tel" name="telefone" pattern="[0-9]*." value="'+myJson[i].phone+'" onblur="" /></form></td><td><a href="javascript:fechaItem('+i+')"><img class="btn_cancela"/></a></td></tr><tr><td><a href="#" onclick="javascript:atualizarItem('+i+')"><img class="btn_confirma"/></a></td></tr><tr><td><a href="javascript:excluirItem('+i+')"><img class="btn_excluir"/></a></td></tr></table></div></li>';
    };
    document.getElementById("lista").innerHTML = liItem;
};