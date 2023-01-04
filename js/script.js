function carregaTexto() {

    let elemento = document.getElementById('resultado');


    //dados da empresa//
    
    let matriz_filial1 = document.getElementById('matriz');
    let razao_social = document.getElementById('nomeempresarial');
    let nome_fantasia = document.getElementById('nome_fantasia');
    let naturezajurifica = document.getElementById('naturezajurifica');
    let datadeabertura = document.getElementById('datadeabertura');
    let cnaeprincipal = document.getElementById('cnaeprincipal');
    let tipologradouro1 = document.getElementById('tipologradouro');
    let logradouro2 = document.getElementById('Logradouro');
    let numero2 = document.getElementById('numero');
    let complemento2 = document.getElementById('complemento');
    let bairro2 = document.getElementById('bairro');
    let cep2 = document.getElementById('cep');
    let uf2 = document.getElementById('estado');
    let municipio2 = document.getElementById('municipio');
    let fone2 = document.getElementById('telefone');
    let email2 = document.getElementById('e-mail');
    let capitalsocial = document.getElementById('capitalsocial');
    let porte = document.getElementById('porte');

        
    let matrizFilial = document.getElementById('matriz').value;
    let razaoSocial = document.getElementById('nomeempresarial').value;
    let nomeFantasia = document.getElementById('nome_fantasia').value;
    let naturezaJurifica = document.getElementById('naturezajurifica').value;
    let datadeAbertura = document.getElementById('datadeabertura').value;
    let cnaePrincipal = document.getElementById('cnaeprincipal').value;
    let tipoLogradouro = document.getElementById('tipologradouro').value;
    let logradouro02 = document.getElementById('Logradouro').value;
    let numero1 = document.getElementById('numero').value;
    let complemento01 = document.getElementById('complemento').value;
    let bairro01 = document.getElementById('bairro').value;
    let cep02 = document.getElementById('cep').value;
    let uf02 = document.getElementById('estado').value;
    let municipio02 = document.getElementById('municipio').value;
    let fone02 = document.getElementById('telefone').value;
    let email02 = document.getElementById('e-mail').value;
    let capitalSocial = document.getElementById('capitalsocial').value;
    let porte0 = document.getElementById('porte').value;



    // campo endecos//
    let cep = document.getElementById('cep');
    let tipologradouro = document.getElementById('tipologradouro');
    let logradouro = document.getElementById('Logradouro');
    let numero = document.getElementById('numero');
    let complemento = document.getElementById('complemento');
    let bairro = document.getElementById('bairro');
    let municipio = document.getElementById('municipio');
    let uf = document.getElementById('estado');
    let email = document.getElementById('e-mail');
    let fone = document.getElementById('telefone');
    let ibge = document.getElementById('ibge');
    let ddd = document.getElementById('ddd');
    
    let cep1 = document.getElementById('cep').value;
    let logradouro1 = document.getElementById('Logradouro').value;
    let complemento1 = document.getElementById('complemento').value;
    let bairro1 = document.getElementById('bairro').value;
    let municipio1 = document.getElementById('municipio').value;
    let uf1 = document.getElementById('estado').value;
    let ibge1 = document.getElementById('ibge').value;
    let ddd1 = document.getElementById('ddd').value;
    
    //campo dos cnae//
    let cnae1 = document.getElementById('cnae1');
    let cnae2 = document.getElementById('cnae2');
    let cnae3 = document.getElementById('cnae3');
    let cnae4 = document.getElementById('cnae4');
    let cnae5 = document.getElementById('cnae5');
    let cnae6 = document.getElementById('cnae6');
    let cnae7 = document.getElementById('cnae7');
    let cnae8 = document.getElementById('cnae8');
    let cnae9 = document.getElementById('cnae9');
    let cnae10 = document.getElementById('cnae10');
    let cnae11 = document.getElementById('cnae11');
    let cnae12 = document.getElementById('cnae12');
    let cnae13 = document.getElementById('cnae13');
    let cnae14 = document.getElementById('cnae14');
    let cnae15 = document.getElementById('cnae15');
    let cnae16 = document.getElementById('cnae16');
    let cnae17 = document.getElementById('cnae17');
    let cnae18 = document.getElementById('cnae18');
    let cnae19 = document.getElementById('cnae19');
    let cnae20 = document.getElementById('cnae20');
    let cnae21 = document.getElementById('cnae21');
    let cnae22 = document.getElementById('cnae22');
    let cnae23 = document.getElementById('cnae23');
    let cnae24 = document.getElementById('cnae24');
    let cnae25 = document.getElementById('cnae25');
    
    
    let cnpj = document.getElementById('cnpj').value;
    let cnae_ordem = '0';
    let cnae01 = document.getElementById('cnae1').value;
    let cnae02 = document.getElementById('cnae2').value;
    let cnae03 = document.getElementById('cnae3').value;
    let cnae04 = document.getElementById('cnae4').value;
    let cnae05 = document.getElementById('cnae5').value;
    let cnae06 = document.getElementById('cnae6').value;
    let cnae07 = document.getElementById('cnae7').value;
    let cnae08 = document.getElementById('cnae8').value;
    let cnae09 = document.getElementById('cnae9').value;
    let cnae010 = document.getElementById('cnae10').value;
    let cnae011 = document.getElementById('cnae11').value;
    let cnae012 = document.getElementById('cnae12').value;
    let cnae013 = document.getElementById('cnae13').value;
    let cnae014 = document.getElementById('cnae14').value;
    let cnae015 = document.getElementById('cnae15').value;
    let cnae016 = document.getElementById('cnae16').value;
    let cnae017 = document.getElementById('cnae17').value;
    let cnae018 = document.getElementById('cnae18').value;
    let cnae019 = document.getElementById('cnae19').value;
    let cnae020 = document.getElementById('cnae20').value;
    let cnae021 = document.getElementById('cnae21').value;
    let cnae022 = document.getElementById('cnae22').value;
    let cnae023 = document.getElementById('cnae23').value;
    let cnae024 = document.getElementById('cnae24').value;
    let cnae025 = document.getElementById('cnae25').value;

    let texto1 = `INSERT INTO public.empresas( cnpj,matriz_filial, razao_social, nome_fantasia, situacao, data_situacao, motivo_situacao, nm_cidade_exterior, cod_pais, nome_pais, cod_nat_juridica, data_inicio_ativ, cnae_fiscal, tipo_logradouro, logradouro, numero, complemento, bairro, cep, uf, cod_municipio, municipio, ddd_1, telefone_1, ddd_2, telefone_2, ddd_fax, num_fax, email, qualif_resp, capital_social, porte, opc_simples, data_opc_simples, data_exc_simples, opc_mei, sit_especial, data_sit_especial )
    VALUES
    ('${cnpj}', '${matrizFilial}', '${razaoSocial}', '${nomeFantasia}', '', '', '', '', '', '', '${naturezaJurifica}', '${datadeAbertura}', '${cnaePrincipal}', '${tipoLogradouro}', '${logradouro02}', '${numero1}', '${complemento01}', '${bairro01}', '${cep02}', '${uf02}', '', '${municipio02}', '${ddd1}', '${fone02}', '', '', '', '', '${email02}', '', '${capitalSocial}', '${porte0}', '', '', '', '', '', '' );\<br>`

    let texto2 = `INSERT INTO public.endereco(cep, logradouro, complemento, bairro, cidade, uf, codigo_ibge, gia) VALUES ('${cep1}', '${logradouro1}', '${complemento1}', '${bairro1}', '${municipio1}', '${uf1}', '${ibge1}', '');\<br>` 
    let texto3 = `INSERT INTO public.empresas( cnpj,matriz_filial, razao_social, nome_fantasia, situacao, data_situacao, motivo_situacao, nm_cidade_exterior, cod_pais, nome_pais, cod_nat_juridica, data_inicio_ativ, cnae_fiscal, tipo_logradouro, logradouro, numero, complemento, bairro, cep, uf, cod_municipio, municipio, ddd_1, telefone_1, ddd_2, telefone_2, ddd_fax, num_fax, email, qualif_resp, capital_social, porte, opc_simples, data_opc_simples, data_exc_simples, opc_mei, sit_especial, data_sit_especial ) \<br>
    VALUES\<br> 
    ('${cnpj}', '${matrizFilial}', '${razaoSocial}', '${nomeFantasia}', '', '', '', '', '', '', '${naturezaJurifica}', '${datadeAbertura}', '${cnaePrincipal}', '${tipoLogradouro}', '${logradouro02}', '${numero1}', '${complemento01}', '${bairro01}', '${cep02}', '${uf02}', '', '${municipio02}', '${ddd1}', '${fone02}', '', '', '', '', '${email02}', '', '${capitalSocial}', '${porte0}', '', '', '', '', '', '' );\<br> \<br> \<br> \<br>  INSERT INTO public.endereco(cep, logradouro, complemento, bairro, cidade, uf, codigo_ibge, gia) VALUES ('${cep1}', '${logradouro1}', '${complemento1}', '${bairro1}', '${municipio1}', '${uf1}', '${ibge1}', '');\<br> \<br> \<br> \<br>  INSERT INTO public.cnaes_secundarios(cnpj, cnae_ordem, cnae)\<br>
                    VALUES \<br>
                    ('${cnpj}', ${cnae_ordem},'${cnae01}'),\<br>
                    ('${cnpj}', ${cnae_ordem},'${cnae02}'),\<br>
                    ('${cnpj}', ${cnae_ordem},'${cnae03}'),\<br>
                    ('${cnpj}', ${cnae_ordem},'${cnae04}'),\<br>
                    ('${cnpj}', ${cnae_ordem},'${cnae05}'),\<br>
                    ('${cnpj}', ${cnae_ordem},'${cnae06}'),\<br>
                    ('${cnpj}', ${cnae_ordem},'${cnae07}'),\<br>
                    ('${cnpj}', ${cnae_ordem},'${cnae08}'),\<br>
                    ('${cnpj}', ${cnae_ordem},'${cnae09}'),\<br>
                    ('${cnpj}', ${cnae_ordem},'${cnae010}'),\<br>
                    ('${cnpj}', ${cnae_ordem},'${cnae011}'),\<br>
                    ('${cnpj}', ${cnae_ordem},'${cnae012}'),\<br>
                    ('${cnpj}', ${cnae_ordem},'${cnae013}'),\<br>
                    ('${cnpj}', ${cnae_ordem},'${cnae014}'),\<br>
                    ('${cnpj}', ${cnae_ordem},'${cnae015}'),\<br>
                    ('${cnpj}', ${cnae_ordem},'${cnae016}'),\<br>
                    ('${cnpj}', ${cnae_ordem},'${cnae017}'),\<br>
                    ('${cnpj}', ${cnae_ordem},'${cnae018}'),\<br>
                    ('${cnpj}', ${cnae_ordem},'${cnae019}'),\<br>
                    ('${cnpj}', ${cnae_ordem},'${cnae020}'),\<br>
                    ('${cnpj}', ${cnae_ordem},'${cnae021}'),\<br>
                    ('${cnpj}', ${cnae_ordem},'${cnae022}'),\<br>
                    ('${cnpj}', ${cnae_ordem},'${cnae023}'),\<br>
                    ('${cnpj}', ${cnae_ordem},'${cnae024}'),\<br>
                    ('${cnpj}', ${cnae_ordem},'${cnae025}')`

    elemento.innerHTML = texto1,
    elemento.innerHTML = texto2,
    elemento.innerHTML = texto3;
}

function limpaTela(){
    let elemento = document.getElementById('resultado');
    elemento.innerHTML = '';
}

// carregaTexto();

function applyMask(event) {
    // Obtém o valor atual do input
    let value = event.target.value;

    // Remove tudo que não é número
    value = value.replace(/\D/g, '');

    // Aplica a máscara
    value = value.replace(/(\d{2})(\d{2})(\d)(\d{2})/, '$1.$2-$3-$4');

    // Atualiza o valor do input
    event.target.value = value;
  }

  // Adiciona o evento de "input" ao input
  document.querySelector('#cnae1').addEventListener('input', applyMask);
  document.querySelector('#cnae2').addEventListener('input', applyMask);
  document.querySelector('#cnae3').addEventListener('input', applyMask);
  document.querySelector('#cnae4').addEventListener('input', applyMask);
  document.querySelector('#cnae5').addEventListener('input', applyMask);
  document.querySelector('#cnae6').addEventListener('input', applyMask);
  document.querySelector('#cnae7').addEventListener('input', applyMask);
  document.querySelector('#cnae8').addEventListener('input', applyMask);
  document.querySelector('#cnae9').addEventListener('input', applyMask);
  document.querySelector('#cnae10').addEventListener('input', applyMask);
  document.querySelector('#cnae11').addEventListener('input', applyMask);
  document.querySelector('#cnae12').addEventListener('input', applyMask);
  document.querySelector('#cnae13').addEventListener('input', applyMask);
  document.querySelector('#cnae14').addEventListener('input', applyMask);
  document.querySelector('#cnae15').addEventListener('input', applyMask);
  document.querySelector('#cnae16').addEventListener('input', applyMask);
  document.querySelector('#cnae17').addEventListener('input', applyMask);
  document.querySelector('#cnae18').addEventListener('input', applyMask);
  document.querySelector('#cnae19').addEventListener('input', applyMask);
  document.querySelector('#cnae20').addEventListener('input', applyMask);
  document.querySelector('#cnae21').addEventListener('input', applyMask);
  document.querySelector('#cnae22').addEventListener('input', applyMask);
  document.querySelector('#cnae23').addEventListener('input', applyMask);
  document.querySelector('#cnae24').addEventListener('input', applyMask);
  document.querySelector('#cnae25').addEventListener('input', applyMask);


  function applyMask2(event) {
    // Obtém o valor atual do input
    let value = event.target.value;

    // Remove tudo que não é número
    value = value.replace(/\D/g, '');

    // Aplica a máscara
    value = value.replace(/(\d{2})(\d{3})(\d)(\d{2})/, '$1.$2-$3$4');

    // Atualiza o valor do input
    event.target.value = value;
  }

  // Adiciona o evento de "input" ao input
  document.querySelector('#cep').addEventListener('input', applyMask2);
