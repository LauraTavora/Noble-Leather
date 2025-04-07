package com.noble_leather.api.controller;


import com.noble_leather.api.model.Produto;
import com.noble_leather.api.service.ProdutoService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/produtos")
public class ProdutoController {
    private final ProdutoService produtoService;

    public ProdutoController(ProdutoService produtoService) {
        this.produtoService = produtoService;
    }

    @GetMapping
    public List<Produto> listarTodos() {
        return produtoService.findAll();
    }

    @GetMapping("/{id}")
    public Produto buscarPorId(@PathVariable Long id) {
        return produtoService.findById(id);
    }

    @GetMapping("/marca/{marcaId}")
    public List<Produto> buscarPorMarca(@PathVariable Long marcaId) {
        return produtoService.findByMarca(marcaId);
    }

    @GetMapping("/categoria/{categoriaId}")
    public List<Produto> buscarPorCategoria(@PathVariable Long categoriaId) {
        return produtoService.findByCategoria(categoriaId);
    }

    @GetMapping("/genero/{genero}")
    public List<Produto> buscarPorGenero(@PathVariable String genero) {
        return produtoService.findByGenero(genero);
    }
}
