package com.noble_leather.api.controller;


import com.noble_leather.api.model.Carrinho;
import com.noble_leather.api.service.CarrinhoService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/carrinho")
public class CarrinhoController {
    private final CarrinhoService carrinhoService;

    public CarrinhoController(CarrinhoService carrinhoService) {
        this.carrinhoService = carrinhoService;
    }

    @GetMapping("/usuario/{usuarioId}")
    public Carrinho obterCarrinho(@PathVariable Long usuarioId) {
        return carrinhoService.obterCarrinho(usuarioId);
    }

    @PostMapping
    public Carrinho adicionarItem(
            @RequestParam Long usuarioId,
            @RequestParam Long produtoId,
            @RequestParam(defaultValue = "1") Integer quantidade) {
        return carrinhoService.adicionarAoCarrinho(usuarioId, produtoId, quantidade);
    }

    @DeleteMapping
    public void removerItem(
            @RequestParam Long usuarioId,
            @RequestParam Long produtoId) {
        carrinhoService.removerDoCarrinho(usuarioId, produtoId);
    }
}
