package vacantes.modelo.entidades.dao;
import vacantes.modelo.entidades.Perfil;

public interface PerfilServicioDao {
	Perfil findById(int idPerfil);
	Perfil insertOne (Perfil perfil);
	
}
