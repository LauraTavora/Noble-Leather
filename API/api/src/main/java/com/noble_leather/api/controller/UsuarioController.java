package com.noble_leather.api.controller;

import com.noble_leather.api.model.Usuario;
import com.noble_leather.api.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/usuario")  // Caminho base para todos os endpoints de usuário
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @PostMapping("/cadastro")  // Endpoint para cadastro de usuário
    public ResponseEntity<Usuario> cadastrarUsuario(@RequestBody Usuario usuario) {
        try {
            // Lógica para cadastrar o usuário
            Usuario novoUsuario = usuarioService.cadastrarUsuario(usuario);
            return ResponseEntity.status(HttpStatus.CREATED).body(novoUsuario);  // Retorna o novo usuário criado
        } catch (Exception e) {
            // Retorna erro 400 (Bad Request) em caso de falha
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
    }
}
