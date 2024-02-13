package vacantes.modelo.entidades.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import vacantes.modelo.entidades.Vacante;
import vacantes.modelo.repository.VacanteRepository;

@Repository
public class VacanteDaoImpl implements VacanteDao{

	@Autowired
	private VacanteRepository vrepo;
	
	@Override
	public List<Vacante> findAll() {
		// TODO Auto-generated method stub
		return vrepo.findAll();
	}

	@Override
	public Vacante findById(int idVacante) {
		// TODO Auto-generated method stub
		return vrepo.findById(idVacante).orElse(null);
	}

	@Override
	public Vacante insertOne(Vacante vacante) {
		// TODO Auto-generated method stub
		try {
			return vrepo.save(vacante);
		} catch (Exception e) {
			return null;
		}
	}

	@Override
	public List<Vacante> findByCategoria(int idCategoria) {
		// TODO Auto-generated method stub
		return vrepo.productosPorCategoria(idCategoria);
	}

	@Override
	public List<Vacante> vacantePorDetalle(int idVacante) {
		// TODO Auto-generated method stub
		return vrepo.vacanteDetalle(idVacante);
	}

}
