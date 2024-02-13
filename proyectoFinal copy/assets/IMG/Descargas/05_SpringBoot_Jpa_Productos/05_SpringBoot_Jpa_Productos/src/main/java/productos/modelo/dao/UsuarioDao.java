package productos.modelo.dao;

import java.util.List;

import productos.modelo.entitybeans.Usuario;

public interface UsuarioDao {
	
	int insertOne(Usuario usuario);
	Usuario buscarPorUsernameYPassword(String username, String password);
	Usuario buscarUsuario(String username);
	List<Usuario> todos();

}
