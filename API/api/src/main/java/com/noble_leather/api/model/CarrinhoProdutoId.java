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
public class CarrinhoProdutoId implements Serializable {
    private Long carrinhoId;
    private Long produtoId;


//    Getters e Setters

    public Long getCarrinhoId() {
        return carrinhoId;
    }

    public Long getProdutoId() {
        return produtoId;
    }

    public void setCarrinhoId(Long carrinhoId) {
        this.carrinhoId = carrinhoId;
    }

    public void setProdutoId(Long produtoId) {
        this.produtoId = produtoId;
    }
}
