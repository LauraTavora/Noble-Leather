package com.noble_leather.api.controller;

import com.noble_leather.api.model.Usuario;
import com.noble_leather.api.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class LoginController {

    @Autowired
    private UsuarioService usuarioService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Usuario usuario) {
        try {
            // Chama o método de login na camada de serviço
            Usuario usuarioExistente = usuarioService.login(usuario.getEmail(), usuario.getSenha());

            // Se o usuário e senha estiverem corretos, retorna o usuário autenticado
            if (usuarioExistente != null) {
                return ResponseEntity.ok(usuarioExistente); // Ou você pode retornar um token JWT aqui
            } else {
                // Se usuário ou senha estiverem incorretos
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Email ou senha incorretos");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Erro ao processar login");
        }
    }
}
