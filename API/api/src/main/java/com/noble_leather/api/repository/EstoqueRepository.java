package com.noble_leather.api.repository;


import com.noble_leather.api.model.Estoque;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

public interface EstoqueRepository extends JpaRepository<Estoque, Long> {
    Estoque findByProdutoId(Long produtoId);

    @Query("SELECT e FROM Estoque e WHERE e.quantidade < :quantidade")
    List<Estoque> findByQuantidadeLessThan(Integer quantidade);
}
