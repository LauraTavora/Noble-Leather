package com.noble_leather.api.model;


import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;


@Entity
@Getter
@Setter
@Table(name = "favoritos_produto")
public class FavoritosProduto {
    @EmbeddedId
    private FavoritosProdutoId id;

    @ManyToOne
    @MapsId("favoritoId")
    @JoinColumn(name = "favorito_id")
    private Favoritos favorito;

    @ManyToOne
    @MapsId("produtoId")
    @JoinColumn(name = "produto_id")
    private Produto produto;

//    Getters e Setters

    public Produto getProduto() {
        return produto;
    }

    public Favoritos getFavorito() {
        return favorito;
    }

    public FavoritosProdutoId getId() {
        return id;
    }

    public void setProduto(Produto produto) {
        this.produto = produto;
    }

    public void setId(FavoritosProdutoId id) {
        this.id = id;
    }

    public void setFavorito(Favoritos favorito) {
        this.favorito = favorito;
    }
}


