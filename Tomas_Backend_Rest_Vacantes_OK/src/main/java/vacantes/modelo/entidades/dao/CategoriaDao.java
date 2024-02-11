package vacantes.modelo.entidades.dao;

import java.util.List;

import vacantes.modelo.entidades.Categoria;

public interface CategoriaDao {

	Categoria findById(int idCategoria);
	List<Categoria> findAll();
	int insertOne (Categoria categoria);
}
