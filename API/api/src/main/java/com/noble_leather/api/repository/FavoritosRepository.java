package com.noble_leather.api.repository;


import com.noble_leather.api.model.Favoritos;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface FavoritosRepository extends JpaRepository<Favoritos, Long> {
    Optional<Favoritos> findByUsuarioId(Long usuarioId);
}
