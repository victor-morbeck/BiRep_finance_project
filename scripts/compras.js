function coletaDados(){

    //Coletando os valores na dom
    // let nome = document.getElementById("nome").value;
    // let produto = document.getElementById("produto").value;
    // let valor = document.getElementById("valor").value;

    let nome = $('#nome').val();
    let produto = $("#produto").val();
    let valor = $("#valor").val();
    
    if(validaForm(nome,"nome") == true && validaForm(produto,"produto") == true && validaForm(valor,"valor")== true){
        AddWebStorage(nome, produto, valor)
    } 
    
    recuperaDadosWS();
   
}

function AddWebStorage(nome, produto, valor){
    
    //Usar um objeto javascript para receber os dados do formulário

    const compra = {
        "nome": nome,
        "produto": produto,
        "valor": valor
    }
    const compra_string = JSON.stringify(compra);
    
    localStorage.setItem(localStorage.length + 1, compra_string);


}

function validaForm(dado,campo) {

    if(dado == ""){
        alert("Preencha o campo " + campo)
        return false;
    }
    else {
        return true;
    }
  
}


function recuperaDadosWS() {

    const storage = localStorage;
    $("tbody").empty();

    for (let i = 0; i < storage.length; i++) {
        var compra = JSON.parse(storage.getItem(storage.key(i)));

        var tr = $("<tr>");
        var nome = $("<td>").text(compra.nome);
        var produto = $("<td>").text(compra.produto);
        var valor_int = parseInt(compra.valor);
        var valor = $("<td>").text("R$ " + valor_int.toFixed(2));

        tr.append(nome).append(produto).append(valor);

        $("tbody").append(tr);

    }

    
}

///////////// MAIN ////////////////


recuperaDadosWS();

$("#send-data").click(coletaDados)
