package com.noble_leather.api.service;


import com.noble_leather.api.model.*;
import com.noble_leather.api.repository.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.math.BigDecimal;
import java.util.Optional;

@Service
public class CarrinhoService {
    private final CarrinhoRepository carrinhoRepository;
    private final CarrinhoProdutoRepository carrinhoProdutoRepository;
    private final ProdutoRepository produtoRepository;
    private final UsuarioRepository usuarioRepository;

    public CarrinhoService(CarrinhoRepository carrinhoRepository,
                           CarrinhoProdutoRepository carrinhoProdutoRepository,
                           ProdutoRepository produtoRepository,
                           UsuarioRepository usuarioRepository)
    {
        this.carrinhoRepository = carrinhoRepository;
        this.carrinhoProdutoRepository = carrinhoProdutoRepository;
        this.produtoRepository = produtoRepository;
        this.usuarioRepository = usuarioRepository;
    }

    @Transactional
    public Carrinho adicionarAoCarrinho(Long usuarioId, Long produtoId, Integer quantidade) {
        Usuario usuario = usuarioRepository.findById(usuarioId)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));

        Produto produto = produtoRepository.findById(produtoId)
                .orElseThrow(() -> new RuntimeException("Produto não encontrado"));

        Carrinho carrinho = carrinhoRepository.findByUsuarioId(usuarioId)
                .orElseGet(() -> {
                    Carrinho novoCarrinho = new Carrinho();
                    novoCarrinho.setUsuario(usuario);
                    return carrinhoRepository.save(novoCarrinho);
                });

        // Atualiza valor total
        BigDecimal novoTotal = carrinho.getValorTotal().add(
                produto.getPreco().multiply(BigDecimal.valueOf(quantidade))
        );
        carrinho.setValorTotal(novoTotal);
        carrinho.setQuantidade(carrinho.getQuantidade() + quantidade);

        carrinhoRepository.save(carrinho);

        // Adiciona produto ao carrinho
        CarrinhoProduto carrinhoProduto = new CarrinhoProduto();
        CarrinhoProdutoId id = new CarrinhoProdutoId();
        id.setCarrinhoId(carrinho.getId());
        id.setProdutoId(produtoId);
        carrinhoProduto.setId(id);
        carrinhoProduto.setCarrinho(carrinho);
        carrinhoProduto.setProduto(produto);

        carrinhoProdutoRepository.save(carrinhoProduto);

        return carrinho;
    }

    @Transactional
    public void removerDoCarrinho(Long usuarioId, Long produtoId) {
        Carrinho carrinho = carrinhoRepository.findByUsuarioId(usuarioId)
                .orElseThrow(() -> new RuntimeException("Carrinho não encontrado"));

        Produto produto = produtoRepository.findById(produtoId)
                .orElseThrow(() -> new RuntimeException("Produto não encontrado"));

        CarrinhoProdutoId id = new CarrinhoProdutoId();
        id.setCarrinhoId(carrinho.getId());
        id.setProdutoId(produtoId);

        carrinhoProdutoRepository.deleteById(id);

        // Atualiza valor total e quantidade
        carrinho.setValorTotal(
                carrinho.getValorTotal().subtract(produto.getPreco())
        );
        carrinho.setQuantidade(carrinho.getQuantidade() - 1);

        carrinhoRepository.save(carrinho);
    }

    public Carrinho obterCarrinho(Long usuarioId) {
        return carrinhoRepository.findByUsuarioId(usuarioId)
                .orElseThrow(() -> new RuntimeException("Carrinho não encontrado"));
    }
}
