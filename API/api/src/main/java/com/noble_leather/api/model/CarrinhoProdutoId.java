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

}
