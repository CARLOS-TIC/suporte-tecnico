function buscaCep(){
    let cep = document.getElementById('cep').value;
    if(cep !== ""){
        let url = "https://brasilapi.com.br/api/cep/v2/" + cep;

        let req = new XMLHttpRequest();
        req.open("GET", url);
        req.send();

        req.onload = function(){
            if(req.status === 200){
                let endereco = JSON.parse(req.response);
                document.getElementById("Logradouro").value = endereco.street;
                document.getElementById("bairro").value = endereco.neighborhood;
                document.getElementById("municipio").value = endereco.city;
                document.getElementById("estado").value = endereco.state;
                
            }

            else if(req.status === 404){
                alert("CEP inválido");
            }
            else{
                alert("Erro ao fazer a requisição");
            }
        }
    }
}

window.onload = function(){
    let cep = document.getElementById("cep");
    cep.addEventListener("blur", buscaCep);
}