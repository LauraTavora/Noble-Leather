package com.noble_leather.api.repository;


import com.noble_leather.api.model.Produto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

public interface ProdutoRepository extends JpaRepository<Produto, Long> {
    List<Produto> findByMarcaId(Long marcaId);
    List<Produto> findByCategoriaId(Long categoriaId);

    @Query("SELECT p FROM Produto p JOIN p.categoria c WHERE c.genero = :genero")
    List<Produto> findByGenero(String genero);
}