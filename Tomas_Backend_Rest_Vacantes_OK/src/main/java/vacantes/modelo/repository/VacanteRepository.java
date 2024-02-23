package vacantes.modelo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import vacantes.modelo.entidades.Vacante;

public interface VacanteRepository extends JpaRepository<Vacante, Integer> {

	@Query("SELECT v FROM Vacante v WHERE v.categoria.idCategoria = ?1 AND v.estatus = 'CREADA'")
	public List<Vacante> productosPorCategoria(int idCategoria);
	
	@Query("SELECT v FROM Vacante v WHERE v.estatus = 'CREADA'")
	public List<Vacante> obtenerVacantesCreadas();
	
	@Query("SELECT v FROM Vacante v WHERE v.idVacante = ?1")
	public List<Vacante> vacanteDetalle(int idVacante);

	@Query("SELECT v FROM Vacante v WHERE v.nombre LIKE %:keyword% OR v.descripcion LIKE %:keyword%")
    List<Vacante> findByNombreOrDescripcionContaining(String keyword);
	
}
