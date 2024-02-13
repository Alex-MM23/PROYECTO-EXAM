package productos.modelo.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import productos.modelo.entitybeans.Usuario;
import productos.repository.UsuarioRepository;

@Repository
public class UsuarioDaoImplMy8Jpa implements UsuarioDao{
	
	@Autowired
	private UsuarioRepository urepo;

	@Override
	public int insertOne(Usuario usuario) {
		try {
			urepo.save(usuario);
			return 1;
		} catch (Exception e) {
			System.err.println(e.getMessage());
			return 0;
		}
	}

	@Override
	public Usuario buscarPorUsernameYPassword(String username, String password) {
		// TODO Auto-generated method stub
		return urepo.findByUsernameAndPassword(username, password);
	}

	@Override
	public Usuario buscarUsuario(String username) {
		// TODO Auto-generated method stub
		return urepo.findById(username).orElse(null);
	}

	@Override
	public List<Usuario> todos() {
		// TODO Auto-generated method stub
		return urepo.findAll();
	}
	
	

}
