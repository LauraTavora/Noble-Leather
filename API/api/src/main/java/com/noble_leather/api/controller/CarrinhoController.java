package com.noble_leather.api.controller;

import com.noble_leather.api.dto.CarrinhoProdutoDTO;
import com.noble_leather.api.model.Carrinho;
import com.noble_leather.api.service.CarrinhoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/carrinho")
public class CarrinhoController {

    @Autowired
    private CarrinhoService carrinhoService;

    // Endpoint para adicionar produto ao carrinho
    @PostMapping
    public ResponseEntity<?> adicionarAoCarrinho(@RequestBody CarrinhoProdutoDTO carrinhoProdutoDto) {
        try {
            Carrinho carrinho = carrinhoService.adicionarAoCarrinho(
                    carrinhoProdutoDto.getUsuarioId(),
                    carrinhoProdutoDto.getProdutoId(),
                    carrinhoProdutoDto.getQuantidade()
            );
            return ResponseEntity.ok(carrinho);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Erro ao adicionar produto ao carrinho");
        }
    }

    // Endpoint para remover produto do carrinho
    @DeleteMapping
    public ResponseEntity<?> removerDoCarrinho(@RequestParam Long usuarioId, @RequestParam Long produtoId) {
        try {
            carrinhoService.removerDoCarrinho(usuarioId, produtoId);
            return ResponseEntity.ok("Produto removido do carrinho");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Erro ao remover produto do carrinho");
        }
    }

    // Endpoint para obter todos os itens do carrinho do usuário
    @GetMapping("/usuario/{usuarioId}")
    public ResponseEntity<?> obterCarrinho(@PathVariable Long usuarioId) {
        try {
            Carrinho carrinho = carrinhoService.obterCarrinho(usuarioId);
            return ResponseEntity.ok(carrinho);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Carrinho não encontrado");
        }
    }
}
