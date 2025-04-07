package com.noble_leather.api.dto;

import lombok.Data;

@Data
public class ProdutoDTO {
    private Long id;
    private String nome;
    private String foto;
    private String cor;
    private String cepOrigem;
    private Double preco;
    private Long marcaId;
    private String marcaNome;
    private Long categoriaId;
    private String categoriaNome;
}
