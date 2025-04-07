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

}

@Data
@NoArgsConstructor
@AllArgsConstructor
@Embeddable
class CompraProdutoId implements Serializable {
    private Long compraId;
    private Long produtoId;

    // Getters, Setters, equals, hashCode
}
