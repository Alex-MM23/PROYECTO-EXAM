package vacantes.modelo.entidades.dao;

import java.util.List;
import vacantes.modelo.entidades.Usuario;

public interface UsuarioDao {

	Usuario findByUsernameAndPassword(String username, String password);
	Usuario findById(String username);
	List<Usuario> findAll();
	Usuario insertOne(Usuario usuario);
}
