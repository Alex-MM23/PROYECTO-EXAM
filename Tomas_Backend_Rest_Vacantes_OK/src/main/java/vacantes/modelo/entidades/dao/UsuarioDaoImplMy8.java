package vacantes.modelo.entidades.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import vacantes.modelo.entidades.Usuario;
import vacantes.modelo.repository.UsuarioRepository;

public class UsuarioDaoImplMy8 implements UsuarioDao{
	
	@Autowired
	private UsuarioRepository urepo;


	@Override
	public Usuario insertOne(Usuario usuario) {
		try {
			return urepo.save(usuario);
		} catch (Exception e) {
			return null;
		}
	}

	@Override
	public List<Usuario> findAll() {
		return urepo.findAll();
	}

	@Override
	public Usuario findByUsernameAndPassword(String username, String Password) {
		return urepo.findByUsernameAndPassword(username, Password);
	}

	@Override
	public Usuario findById(String username) {
		return urepo.findById(username).orElse(null);
	}

	

	

}
