package com.noble_leather.api.model;


import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;


@Entity
@Getter
@Setter
@Table(name = "carrinho_produto")
public class CarrinhoProduto {
    @EmbeddedId
    private CarrinhoProdutoId id;

    @ManyToOne
    @MapsId("carrinhoId")
    @JoinColumn(name = "carrinho_id")
    private Carrinho carrinho;

    @ManyToOne
    @MapsId("produtoId")
    @JoinColumn(name = "produto_id")
    private Produto produto;


//    Getters e Setters

    public Carrinho getCarrinho() {
        return carrinho;
    }

    public CarrinhoProdutoId getId() {
        return id;
    }

    public Produto getProduto() {
        return produto;
    }

    public void setId(CarrinhoProdutoId id) {
        this.id = id;
    }

    public void setCarrinho(Carrinho carrinho) {
        this.carrinho = carrinho;
    }

    public void setProduto(Produto produto) {
        this.produto = produto;
    }
}

