package com.noble_leather.api.repository;

import com.noble_leather.api.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    // Encontrar um usuário pelo email
    Usuario findByEmail(String email);

    // Encontrar um usuário pelo CPF
    Usuario findByCpf(String cpf);

    // Verificar se já existe um usuário com o mesmo email
    boolean existsByEmail(String email);

    // Adicionar um método para buscar por nome, caso precise
    Usuario findByNome(String nome);
}
