package com.noble_leather.api.model;

import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Embeddable
public class FavoritosProdutoId implements Serializable {
    private Long favoritoId;
    private Long produtoId;

//    Getters e Setters

    public Long getProdutoId() {
        return produtoId;
    }

    public Long getFavoritoId() {
        return favoritoId;
    }


    public void setProdutoId(Long produtoId) {
        this.produtoId = produtoId;
    }

    public void setFavoritoId(Long favoritoId) {
        this.favoritoId = favoritoId;
    }
}
