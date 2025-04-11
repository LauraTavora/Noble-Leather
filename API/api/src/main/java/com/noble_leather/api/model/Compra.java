package com.noble_leather.api.model;


import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "compra")
public class Compra {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "usuario_id", nullable = false)
    private Usuario usuario;

    private Integer quantidade = 1;

    @Column(name = "cep_destino", nullable = false, length = 8)
    private String cepDestino;

    @OneToMany(mappedBy = "compra")
    private List<CompraProduto> produtos;

    @OneToOne(mappedBy = "compra")
    private Frete frete;


//    Getters e Setters

    public Usuario getUsuario() {
        return usuario;
    }

    public Integer getQuantidade() {
        return quantidade;
    }

    public Long getId() {
        return id;
    }

    public Frete getFrete() {
        return frete;
    }

    public List<CompraProduto> getProdutos() {
        return produtos;
    }

    public String getCepDestino() {
        return cepDestino;
    }


    public void setQuantidade(Integer quantidade) {
        this.quantidade = quantidade;
    }

    public void setProdutos(List<CompraProduto> produtos) {
        this.produtos = produtos;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public void setCepDestino(String cepDestino) {
        this.cepDestino = cepDestino;
    }

    public void setFrete(Frete frete) {
        this.frete = frete;
    }
}
