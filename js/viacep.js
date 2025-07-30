function pesquisa() {
    const cep = document.getElementById("cep").value;
    if (cep.length != 9) {
        return;
    }
    const xhttp = new XMLHttpRequest();
    // XMLHttpRequset é um objeto que permite acessar alguma página. 
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    xhttp.open("GET", url);
    xhttp.responseType = 'json';
    xhttp.send();
    console.log(xhttp.response);
    xhttp.onload = function () {
        const dados = xhttp.response;
        console.log(dados);
        if(dados.erro){
            alert("CEP não encontrado");
            return;
        }
        document.getElementById("endereco").value = dados.logradouro;
        document.getElementById("bairro").value = dados.bairro;
        document.getElementById("cidade").value = dados.localidade;
        document.getElementById("uf").value = dados.uf;
        document.getElementById("numero").focus();

    }

}