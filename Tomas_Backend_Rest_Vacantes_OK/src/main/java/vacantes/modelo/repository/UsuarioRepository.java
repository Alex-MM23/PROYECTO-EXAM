package vacantes.modelo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import vacantes.modelo.entidades.Categoria;
import vacantes.modelo.entidades.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, String> {

	Usuario findByUsernameAndPassword(String username, String password);
}
