package com.noble_leather.api.repository;


import com.noble_leather.api.model.FavoritosProduto;
import com.noble_leather.api.model.FavoritosProdutoId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FavoritosProdutoRepository extends JpaRepository<FavoritosProduto, FavoritosProdutoId> {

    // Find all favorite products for a specific user's favorites list
    @Query("SELECT fp FROM FavoritosProduto fp WHERE fp.id.favoritoId = :favoritoId")
    List<FavoritosProduto> findByFavoritoId(@Param("favoritoId") Long favoritoId);

    // Find a specific product in a favorites list
    @Query("SELECT fp FROM FavoritosProduto fp WHERE fp.id.favoritoId = :favoritoId AND fp.id.produtoId = :produtoId")
    FavoritosProduto findByFavoritoIdAndProdutoId(@Param("favoritoId") Long favoritoId,
                                                  @Param("produtoId") Long produtoId);

    // Count how many items are in a favorites list
    @Query("SELECT COUNT(fp) FROM FavoritosProduto fp WHERE fp.id.favoritoId = :favoritoId")
    int countItemsInFavoritos(@Param("favoritoId") Long favoritoId);

    // Remove a specific product from favorites
    @Modifying
    @Query("DELETE FROM FavoritosProduto fp WHERE fp.id.favoritoId = :favoritoId AND fp.id.produtoId = :produtoId")
    void deleteByFavoritoIdAndProdutoId(@Param("favoritoId") Long favoritoId,
                                        @Param("produtoId") Long produtoId);

    // Remove all products from a favorites list
    @Modifying
    @Query("DELETE FROM FavoritosProduto fp WHERE fp.id.favoritoId = :favoritoId")
    void deleteAllByFavoritoId(@Param("favoritoId") Long favoritoId);

    // Check if a product exists in favorites
    @Query("SELECT CASE WHEN COUNT(fp) > 0 THEN true ELSE false END " +
            "FROM FavoritosProduto fp WHERE fp.id.favoritoId = :favoritoId AND fp.id.produtoId = :produtoId")
    boolean existsByFavoritoIdAndProdutoId(@Param("favoritoId") Long favoritoId,
                                           @Param("produtoId") Long produtoId);

    // Find all favorite products IDs for a user
    @Query("SELECT fp.id.produtoId FROM FavoritosProduto fp WHERE fp.id.favoritoId = :favoritoId")
    List<Long> findProdutoIdsByFavoritoId(@Param("favoritoId") Long favoritoId);
}
