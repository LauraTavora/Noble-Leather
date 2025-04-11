package com.noble_leather.api.model;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
@Table(name = "usuario")
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String username;

    @Column(unique = true, nullable = false)
    private String nome;

    @Column(unique = true, nullable = false, length = 11)
    private String cpf;

    @Column(nullable = false)
    private String endereco;

    @Column(nullable = false, length = 8)
    private String cep;

    private Boolean cedex = false;

    @Column(nullable = false, length = 16)
    private String cartao;

    @Column(unique = true, nullable = false)
    private String email;

    @OneToMany(mappedBy = "usuario")
    private List<Carrinho> carrinhos;

    @OneToMany(mappedBy = "usuario")
    private List<Favoritos> favoritos;

    @OneToMany(mappedBy = "usuario")
    private List<Compra> compras;

//    Getters e Setters

    public String getNome() {
        return nome;
    }

    public Long getId() {
        return id;
    }

    public String getEndereco() {
        return endereco;
    }

    public String getCpf() {
        return cpf;
    }

    public Boolean getCedex() {
        return cedex;
    }

    public String getCartao() {
        return cartao;
    }

    public List<Carrinho> getCarrinhos() {
        return carrinhos;
    }

    public List<Compra> getCompras() {
        return compras;
    }

    public List<Favoritos> getFavoritos() {
        return favoritos;
    }

    public String getCep() {
        return cep;
    }

    public String getUsername() {
        return username;
    }

    public String getEmail() {
        return email;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
