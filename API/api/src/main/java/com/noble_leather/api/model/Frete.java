package com.noble_leather.api.model;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.List;

@Entity
@Getter
@Setter
@Table(name = "frete")
public class Frete {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "data_entrega", nullable = false)
    private LocalDate dataEntrega;

    @Column(name = "tipo_transporte", nullable = false)
    private String tipoTransporte;

    @OneToOne
    @JoinColumn(name = "compra_id", nullable = false)
    private Compra compra;

    @OneToMany(mappedBy = "frete")
    private List<FreteProduto> produtos;

    // Getters e Setters
}