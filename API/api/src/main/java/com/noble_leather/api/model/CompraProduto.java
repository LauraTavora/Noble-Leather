package com.noble_leather.api.model;


import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;

@Entity
@Getter
@Setter
@Table(name = "compra_produto")
public class CompraProduto {
    @EmbeddedId
    private CompraProdutoId id;

    @ManyToOne
    @MapsId("compraId")
    @JoinColumn(name = "compra_id")
    private Compra compra;

    @ManyToOne
    @MapsId("produtoId")
    @JoinColumn(name = "produto_id")
    private Produto produto;


//    Getters e Setters

    public Produto getProduto() {
        return produto;
    }

    public Compra getCompra() {
        return compra;
    }

    public CompraProdutoId getId() {
        return id;
    }

    public void setId(CompraProdutoId id) {
        this.id = id;
    }

    public void setProduto(Produto produto) {
        this.produto = produto;
    }

    public void setCompra(Compra compra) {
        this.compra = compra;
    }
}

@Data
@NoArgsConstructor
@AllArgsConstructor
@Embeddable
class CompraProdutoId implements Serializable {
    private Long compraId;
    private Long produtoId;

    // Getters, Setters, equals, hashCode

    public Long getProdutoId() {
        return produtoId;
    }

    public Long getCompraId() {
        return compraId;
    }

    public void setProdutoId(Long produtoId) {
        this.produtoId = produtoId;
    }

    public void setCompraId(Long compraId) {
        this.compraId = compraId;
    }

}
