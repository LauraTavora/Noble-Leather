package com.noble_leather.api.model;


import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;


@Entity
@Getter
@Setter
@Table(name = "frete_produto")
public class FreteProduto {
    @EmbeddedId
    private FreteProdutoId id;

    @ManyToOne
    @MapsId("freteId")
    @JoinColumn(name = "frete_id")
    private Frete frete;

    @ManyToOne
    @MapsId("produtoId")
    @JoinColumn(name = "produto_id")
    private Produto produto;

//    Getters e Setters


    public Produto getProduto() {
        return produto;
    }

    public Frete getFrete() {
        return frete;
    }

    public FreteProdutoId getId() {
        return id;
    }

    public void setProduto(Produto produto) {
        this.produto = produto;
    }

    public void setId(FreteProdutoId id) {
        this.id = id;
    }

    public void setFrete(Frete frete) {
        this.frete = frete;
    }
}


@Data
@NoArgsConstructor
@AllArgsConstructor
@Embeddable
class FreteProdutoId implements Serializable {
    private Long freteId;
    private Long produtoId;

//    Getters e Setters

    public Long getProdutoId() {
        return produtoId;
    }

    public Long getFreteId() {
        return freteId;
    }

    public void setProdutoId(Long produtoId) {
        this.produtoId = produtoId;
    }

    public void setFreteId(Long freteId) {
        this.freteId = freteId;
    }
}
