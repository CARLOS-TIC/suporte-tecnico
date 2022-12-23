function buscaCnpj(){
    let cnpj = document.getElementById('cnpj').value;
    if(cnpj !== ""){
        let url = "https://brasilapi.com.br/api/cnpj/v1/" + cnpj;

        let req = new XMLHttpRequest();
        req.open("GET", url);
        req.send();

        req.onload = function(){
            if(req.status === 200){
                let empresa = JSON.parse(req.response);
                document.getElementById("cnpj").value = empresa.cnpj;
                document.getElementById("datadeabertura").value = empresa.data_situacao_cadastral;
                document.getElementById("nomeempresarial").value = empresa.razao_social;
                document.getElementById("nome_fantasia").value = empresa.nome_fantasia;
                document.getElementById("porte").value = empresa.codigo_porte;
                document.getElementById("cnaeprincipal").value = empresa.cnae_fiscal;
                document.getElementById("capitalsocial").value = empresa.capital_social;
                document.getElementById("naturezajurifica").value = empresa.codigo_natureza_juridica;
                document.getElementById("cep").value = empresa.cep;
                document.getElementById("Logradouro").value = empresa.logradouro;
                document.getElementById("tipologradouro").value = empresa.descricao_tipo_de_logradouro;
                document.getElementById("numero").value = empresa.numero;
                document.getElementById("complemento").value = empresa.complemento;
                document.getElementById("bairro").value = empresa.bairro;
                document.getElementById("municipio").value = empresa.municipio;
                document.getElementById("estado").value = empresa.uf;
                document.getElementById("e-mail").value = empresa.email;
                document.getElementById("telefone").value = empresa.ddd_telefone_1;  
                document.getElementById("ibge").value = empresa.codigo_municipio_ibge;
                document.getElementById("cnae1").value = empresa.cnaes_secundarios[0].codigo;
                document.getElementById("cnae2").value = empresa.cnaes_secundarios[1].codigo;
                document.getElementById("cnae3").value = empresa.cnaes_secundarios[2].codigo;
                document.getElementById("cnae4").value = empresa.cnaes_secundarios[3].codigo;
                document.getElementById("cnae5").value = empresa.cnaes_secundarios[4].codigo;
                document.getElementById("cnae6").value = empresa.cnaes_secundarios[5].codigo;
                document.getElementById("cnae7").value = empresa.cnaes_secundarios[6].codigo;
                document.getElementById("cnae8").value = empresa.cnaes_secundarios[7].codigo;
                document.getElementById("cnae9").value = empresa.cnaes_secundarios[8].codigo;
                document.getElementById("cnae10").value = empresa.cnaes_secundarios[9].codigo;
                document.getElementById("cnae11").value = empresa.cnaes_secundarios[10].codigo;
                document.getElementById("cnae12").value = empresa.cnaes_secundarios[11].codigo;
                document.getElementById("cnae13").value = empresa.cnaes_secundarios[12].codigo;
                document.getElementById("cnae14").value = empresa.cnaes_secundarios[13].codigo;
                document.getElementById("cnae15").value = empresa.cnaes_secundarios[14].codigo;
                document.getElementById("cnae16").value = empresa.cnaes_secundarios[15].codigo;
                document.getElementById("cnae17").value = empresa.cnaes_secundarios[16].codigo;
                document.getElementById("cnae18").value = empresa.cnaes_secundarios[17].codigo;
                document.getElementById("cnae19").value = empresa.cnaes_secundarios[18].codigo;
                document.getElementById("cnae20").value = empresa.cnaes_secundarios[19].codigo;
                document.getElementById("cnae21").value = empresa.cnaes_secundarios[20].codigo;
                document.getElementById("cnae22").value = empresa.cnaes_secundarios[21].codigo;
                document.getElementById("cnae23").value = empresa.cnaes_secundarios[22].codigo;
                document.getElementById("cnae24").value = empresa.cnaes_secundarios[23].codigo;
                document.getElementById("cnae25").value = empresa.cnaes_secundarios[24].codigo;
            }

            else if(req.status === 404){
                alert("CNPJ inválido");
            }
            else{
                alert("Entre com o CNPJ correto");
            }
        }
    }
}

window.onload = function(){
    let cnpj = document.getElementById("cnpj");
    cnpj.addEventListener("blur", buscaCnpj);
}