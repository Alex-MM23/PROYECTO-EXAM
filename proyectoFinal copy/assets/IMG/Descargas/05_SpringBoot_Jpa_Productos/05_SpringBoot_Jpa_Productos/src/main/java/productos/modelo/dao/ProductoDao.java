package productos.modelo.dao;

import java.util.List;

import productos.modelo.entitybeans.Producto;

public interface ProductoDao {
	List<Producto> findAll();
	Producto findById(int idProducto);
	Producto insertOne(Producto producto);
	int modificarOne(Producto producto);
	int eliminarOne(int idProducto);
	List<Producto> findPorFamilia(int idFamilia);
	List<Producto> findByMarca(String marca);
	List<Producto> buscarDescripcion(String cadena);
	

}
