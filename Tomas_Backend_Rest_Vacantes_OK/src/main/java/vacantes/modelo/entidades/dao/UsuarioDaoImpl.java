package vacantes.modelo.entidades.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import vacantes.modelo.entidades.Usuario;
import vacantes.modelo.repository.UsuarioRepository;

@Repository
public class UsuarioDaoImpl implements UsuarioDao{

	@Autowired
	public UsuarioRepository urepo;

	@Override
	public Usuario findByUsernameAndPassword(String username, String password) {
		// TODO Auto-generated method stub
		return urepo.findByUsernameAndPassword(username, password);
	}

	@Override
	public Usuario findById(String username) {
		// TODO Auto-generated method stub
		return urepo.findById(username).orElse(null);
	}

	@Override
	public List<Usuario> findAll() {
		// TODO Auto-generated method stub
		return urepo.findAll();
	}

	@Override
	public Usuario insertOne(Usuario usuario) {
		// TODO Auto-generated method stub
		try {
			 return urepo.save(usuario);
			
		} catch (Exception e) {
			System.err.println(e.getMessage());
			 
			return null;
			}
		}
	}

