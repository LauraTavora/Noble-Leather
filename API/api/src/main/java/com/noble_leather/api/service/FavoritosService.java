package com.noble_leather.api.service;

import com.noble_leather.api.model.*;
import com.noble_leather.api.repository.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.Optional;

@Service
public class FavoritosService {
    private final FavoritosRepository favoritosRepository;
    private final FavoritosProdutoRepository favoritosProdutoRepository;
    private final ProdutoRepository produtoRepository;
    private final UsuarioRepository usuarioRepository;

    public FavoritosService(FavoritosRepository favoritosRepository,
                            FavoritosProdutoRepository favoritosProdutoRepository,
                            ProdutoRepository produtoRepository,
                            UsuarioRepository usuarioRepository) {
        this.favoritosRepository = favoritosRepository;
        this.favoritosProdutoRepository = favoritosProdutoRepository;
        this.produtoRepository = produtoRepository;
        this.usuarioRepository = usuarioRepository;
    }

    @Transactional
    public Favoritos adicionarAosFavoritos(Long usuarioId, Long produtoId) {
        Usuario usuario = usuarioRepository.findById(usuarioId)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));

        Produto produto = produtoRepository.findById(produtoId)
                .orElseThrow(() -> new RuntimeException("Produto não encontrado"));

        Favoritos favoritos = favoritosRepository.findByUsuarioId(usuarioId)
                .orElseGet(() -> {
                    Favoritos novoFavoritos = new Favoritos();
                    novoFavoritos.setUsuario(usuario);
                    return favoritosRepository.save(novoFavoritos);
                });

        // Verifica se o produto já está nos favoritos
        FavoritosProdutoId id = new FavoritosProdutoId();
        id.setFavoritoId(favoritos.getId());
        id.setProdutoId(produtoId);

        if (!favoritosProdutoRepository.existsById(id)) {
            favoritos.setQuantidade(favoritos.getQuantidade() + 1);
            favoritosRepository.save(favoritos);

            FavoritosProduto favoritosProduto = new FavoritosProduto();
            favoritosProduto.setId(id);
            favoritosProduto.setFavorito(favoritos);
            favoritosProduto.setProduto(produto);

            favoritosProdutoRepository.save(favoritosProduto);
        }

        return favoritos;
    }

    @Transactional
    public void removerDosFavoritos(Long usuarioId, Long produtoId) {
        Favoritos favoritos = favoritosRepository.findByUsuarioId(usuarioId)
                .orElseThrow(() -> new RuntimeException("Favoritos não encontrados"));

        FavoritosProdutoId id = new FavoritosProdutoId();
        id.setFavoritoId(favoritos.getId());
        id.setProdutoId(produtoId);

        favoritosProdutoRepository.deleteById(id);

        favoritos.setQuantidade(favoritos.getQuantidade() - 1);
        favoritosRepository.save(favoritos);
    }

    public Favoritos obterFavoritos(Long usuarioId) {
        return favoritosRepository.findByUsuarioId(usuarioId)
                .orElseThrow(() -> new RuntimeException("Favoritos não encontrados"));
    }
}
