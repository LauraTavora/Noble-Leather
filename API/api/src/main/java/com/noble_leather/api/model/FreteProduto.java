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

}


@Data
@NoArgsConstructor
@AllArgsConstructor
@Embeddable
class FreteProdutoId implements Serializable {
    private Long freteId;
    private Long produtoId;

}
