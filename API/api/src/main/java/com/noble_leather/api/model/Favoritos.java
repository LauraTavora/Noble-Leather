package com.noble_leather.api.model;


import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
@Table(name = "favoritos")
public class Favoritos {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "usuario_id", nullable = false)
    private Usuario usuario;

    private Integer quantidade = 1;

    @OneToMany(mappedBy = "favorito")
    private List<FavoritosProduto> produtos;

    // Getters e Setters
}
