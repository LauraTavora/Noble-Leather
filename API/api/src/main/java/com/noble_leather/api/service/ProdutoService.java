package com.noble_leather.api.service;


import com.noble_leather.api.model.Produto;
import com.noble_leather.api.repository.ProdutoRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ProdutoService {
    private final ProdutoRepository produtoRepository;

    public ProdutoService(ProdutoRepository produtoRepository) {
        this.produtoRepository = produtoRepository;
    }

    public List<Produto> findAll() {
        return produtoRepository.findAll();
    }

    public Produto findById(Long id) {
        return produtoRepository.findById(id).orElse(null);
    }

    public List<Produto> findByMarca(Long marcaId) {
        return produtoRepository.findByMarcaId(marcaId);
    }

    public List<Produto> findByCategoria(Long categoriaId) {
        return produtoRepository.findByCategoriaId(categoriaId);
    }

    public List<Produto> findByGenero(String genero) {
        return produtoRepository.findByGenero(genero);
    }
}
