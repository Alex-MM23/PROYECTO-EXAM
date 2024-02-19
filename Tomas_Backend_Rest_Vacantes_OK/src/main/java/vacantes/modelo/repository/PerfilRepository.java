package vacantes.modelo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import vacantes.modelo.entidades.Perfil;


public interface PerfilRepository extends JpaRepository<Perfil, Integer> {
	

}
