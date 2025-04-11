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

    public Integer getQuantidade() {
        return quantidade;
    }

    public Long getId() {
        return id;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public List<FavoritosProduto> getProdutos() {
        return produtos;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setProdutos(List<FavoritosProduto> produtos) {
        this.produtos = produtos;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public void setQuantidade(Integer quantidade) {
        this.quantidade = quantidade;
    }
}
