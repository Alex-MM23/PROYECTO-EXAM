package vacantes.modelo.entidades.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import vacantes.modelo.entidades.Categoria;
import vacantes.modelo.repository.CategoriaRepository;

@Repository
public class CategoriaDaoImpl implements CategoriaDao{

	@Autowired
	private CategoriaRepository crepo;

	@Override
	public Categoria findById(int idCategoria) {
		// TODO Auto-generated method stub
		return crepo.findById(idCategoria).orElse(null);
	}

	@Override
	public List<Categoria> findAll() {
		// TODO Auto-generated method stub
		return crepo.findAll();
	}

	@Override
	public int insertOne(Categoria categoria) {
		// TODO Auto-generated method stub
		try {
			crepo.save(categoria);
			return 1;
		} catch (Exception e) {
			// TODO: handle exception
			 
			return 0;
			}
	}
	
	
	
}
