package productos.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import productos.modelo.entitybeans.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, String>{
	
	public Usuario findByUsernameAndPassword(String username, String password);

}
