package com.noble_leather.api.repository;

import com.noble_leather.api.model.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface CategoriaRepository extends JpaRepository<Categoria, Long> {
    List<Categoria> findByGenero(String genero);
}
