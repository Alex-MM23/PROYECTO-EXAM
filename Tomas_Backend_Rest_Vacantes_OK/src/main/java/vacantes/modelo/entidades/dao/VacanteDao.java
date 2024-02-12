package vacantes.modelo.entidades.dao;

import java.util.List;

import vacantes.modelo.entidades.Vacante;

public interface VacanteDao {

	List<Vacante> findAll();
	Vacante findById(int idVacante);
	Vacante insertOne(Vacante vacante);
	List<Vacante> findByCategoria(int idCategoria);
	List<Vacante> vacantePorDetalle(int idVacante);
	
}