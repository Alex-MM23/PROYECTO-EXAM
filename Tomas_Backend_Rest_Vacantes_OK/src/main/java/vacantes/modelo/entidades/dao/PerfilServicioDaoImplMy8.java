package vacantes.modelo.entidades.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import vacantes.modelo.entidades.Perfil;
import vacantes.modelo.repository.PerfilRepository;

@Controller
public class PerfilServicioDaoImplMy8 implements PerfilServicioDao{
	
	@Autowired
	private PerfilRepository prepo;

	@Override
	public Perfil findById(int idPerfil) {
		return prepo.findById(idPerfil).orElse(null);
	}

	@Override
	public Perfil insertOne(Perfil perfil) {
		try {
			return prepo.save(perfil);
		} catch (Exception e) {
			return null;
		}
	}

}
