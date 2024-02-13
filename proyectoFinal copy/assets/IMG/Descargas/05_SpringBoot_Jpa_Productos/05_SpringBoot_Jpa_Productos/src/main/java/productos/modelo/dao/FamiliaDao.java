package productos.modelo.dao;

import java.util.List;

import productos.modelo.entitybeans.Familia;

public interface FamiliaDao {
	
	Familia findById(int idFamilia);
	List<Familia> findAll();
	Familia insertOne(Familia familia);
	List<Familia> buscarContenido(String contenido);
	int modificar(Familia familia);
	int eliminar(int idFamilia);
	

}
