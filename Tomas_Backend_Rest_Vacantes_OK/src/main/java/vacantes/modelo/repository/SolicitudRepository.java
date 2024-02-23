package vacantes.modelo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import vacantes.modelo.entidades.Solicitud;

public interface SolicitudRepository extends JpaRepository<Solicitud, Integer> {

	@Query("SELECT s FROM Solicitud s WHERE s.usuario.username = :username")
	List<Solicitud> findAllByUsuarioUsername(String username);

}
