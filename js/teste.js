
        var cnpj = "cnpj ";
        var matriz = " ";
        var Nomeempresarial = " ";
        var fantasia = " ";
        
        var query = "INSERT INTO public.empresas( cnpj,matriz_filial, razao_social, nome_fantasia," +
        " situacao, data_situacao, motivo_situacao, nm_cidade_exterior, cod_pais, nome_pais, cod_nat_juridica, " +
        " data_inicio_ativ, cnae_fiscal, tipo_logradouro, logradouro, numero, complemento, bairro, cep, " +
        "uf, cod_municipio, municipio, ddd_1, telefone_1, ddd_2, telefone_2, ddd_fax, num_fax, email, qualif_resp," +
        " capital_social, porte, opc_simples, data_opc_simples, data_exc_simples, opc_mei, sit_especial, data_sit_especial )" +
        "VALUES ( '" + cnpj + "', '" + Datadeabertura + "', '" + Nomeempresarial + "', '" + Nome_fantasia + "', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '' );";
        alert .mostrar(query);
