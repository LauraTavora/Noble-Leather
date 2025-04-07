package com.noble_leather.api.controller;


import com.noble_leather.api.model.Favoritos;
import com.noble_leather.api.service.FavoritosService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/favoritos")
public class FavoritosController {
    private final FavoritosService favoritosService;

    public FavoritosController(FavoritosService favoritosService) {
        this.favoritosService = favoritosService;
    }

    @GetMapping("/usuario/{usuarioId}")
    public Favoritos obterFavoritos(@PathVariable Long usuarioId) {
        return favoritosService.obterFavoritos(usuarioId);
    }

    @PostMapping
    public Favoritos adicionarItem(
            @RequestParam Long usuarioId,
            @RequestParam Long produtoId) {
        return favoritosService.adicionarAosFavoritos(usuarioId, produtoId);
    }

    @DeleteMapping
    public void removerItem(
            @RequestParam Long usuarioId,
            @RequestParam Long produtoId) {
        favoritosService.removerDosFavoritos(usuarioId, produtoId);
    }
}
