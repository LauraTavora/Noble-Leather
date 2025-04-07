package com.noble_leather.api.repository;

import com.noble_leather.api.model.CarrinhoProduto;
import com.noble_leather.api.model.CarrinhoProdutoId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CarrinhoProdutoRepository extends JpaRepository<CarrinhoProduto, CarrinhoProdutoId> {

    // Find all products in a specific cart
    @Query("SELECT cp FROM CarrinhoProduto cp WHERE cp.id.carrinhoId = :carrinhoId")
    List<CarrinhoProduto> findByCarrinhoId(@Param("carrinhoId") Long carrinhoId);

    // Find a specific product in a specific cart
    @Query("SELECT cp FROM CarrinhoProduto cp WHERE cp.id.carrinhoId = :carrinhoId AND cp.id.produtoId = :produtoId")
    CarrinhoProduto findByCarrinhoIdAndProdutoId(@Param("carrinhoId") Long carrinhoId,
                                                 @Param("produtoId") Long produtoId);

    // Count how many items are in a cart
    @Query("SELECT COUNT(cp) FROM CarrinhoProduto cp WHERE cp.id.carrinhoId = :carrinhoId")
    int countItemsInCarrinho(@Param("carrinhoId") Long carrinhoId);

    // Remove a specific product from a cart
    @Modifying
    @Query("DELETE FROM CarrinhoProduto cp WHERE cp.id.carrinhoId = :carrinhoId AND cp.id.produtoId = :produtoId")
    void deleteByCarrinhoIdAndProdutoId(@Param("carrinhoId") Long carrinhoId,
                                        @Param("produtoId") Long produtoId);

    // Remove all products from a cart
    @Modifying
    @Query("DELETE FROM CarrinhoProduto cp WHERE cp.id.carrinhoId = :carrinhoId")
    void deleteAllByCarrinhoId(@Param("carrinhoId") Long carrinhoId);

    // Check if a product exists in a cart
    @Query("SELECT CASE WHEN COUNT(cp) > 0 THEN true ELSE false END " +
            "FROM CarrinhoProduto cp WHERE cp.id.carrinhoId = :carrinhoId AND cp.id.produtoId = :produtoId")
    boolean existsByCarrinhoIdAndProdutoId(@Param("carrinhoId") Long carrinhoId,
                                           @Param("produtoId") Long produtoId);
}
