alert('Query Gerada!')

var Cnpj = "";
var empresa = "";
var Nomeempresarial = "";
var Nome_fantasia = "";
var Naturezajurifica = "";
var Datadeabertura = "";
var cnaeprincipal = "";
var tipologradouro = "";
var Logradouro = "";
var numero = "";
var complemento = "";
var bairro = "";
var cep = "";
var estado = "";
var municipio = "";
var telefone = "";
var Email = "";
var ibge = "";
var capitalsocial = "";
var porte = "";



function mostrar(){
    Cnpj = document.getElementById('cnpj')
    empresa = document.getElementById('empresa')
    Nomeempresarial = document.getElementById('nomeempresarial')
    Nome_fantasia = document.getElementById('nome_fantasia')
    Naturezajurifica = document.getElementById('naturezajurifica')
    Datadeabertura = document.getElementById('datadeabertura')
    cnaeprincipal = document.getElementById('cnaeprincipal')
    tipologradouro = document.getElementById('tipologradouro')
    Logradouro = document.getElementById('Logradouro')
    numero = document.getElementById('numero')
    complemento = document.getElementById('complemento')
    bairro = document.getElementById('bairro')
    cep = document.getElementById('cep')
    estado = document.getElementById('estado')
    municipio = document.getElementById('municipio')
    telefone = document.getElementById('telefone')
    Email = document.getElementById('Email')
    ibge = document.getElementById('ibge')
    capitalsocial = document.getElementById('capitalsocial')
    porte = document.getElementById('porte')
    matriz = document.getElementById('matriz')
   

    alert(Cnpj.value +" "+ matriz.value +" "+ Nomeempresarial.value +" "+ Nome_fantasia.value +" "+ '' +" "+ '' +" "+ '' +" "+ '' +" "+ '' +" "+ '' +" "+ Naturezajurifica.value +" "+ Datadeabertura.value +" "+ cnaeprincipal.value +" "+ tipologradouro)


document.write("INSERT INTO public.empresas( cnpj,matriz_filial, razao_social, nome_fantasia, situacao, data_situacao, motivo_situacao, nm_cidade_exterior, cod_pais, nome_pais, cod_nat_juridica, data_inicio_ativ, cnae_fiscal, tipo_logradouro, logradouro, numero, complemento, bairro, cep, uf, cod_municipio, municipio, ddd_1, telefone_1, ddd_2, telefone_2, ddd_fax, num_fax, email, qualif_resp, capital_social, porte, opc_simples, data_opc_simples, data_exc_simples, opc_mei, sit_especial, data_sit_especial ) VALUES ( '"+ Cnpj.value +"', '"+ empresa.value +"', '"+ Nomeempresarial.value +"', '"+ Nome_fantasia.value +"', '"+ Naturezajurifica.value +"', '"+ Datadeabertura.value +"' "); +

documetnt.write("INSERT INTO public.endereco(cep, logradouro, complemento, bairro, cidade, uf, codigo_ibge, gia) VALUES ('"+ cep.value +"', '"+ Logradouro.value +"', '"+ complemento.value +"', '"+ bairro.value +"', '"+ municipio.value +"' , '"+ estado.value +"', '"+ ibge.value +"', ''");

}
