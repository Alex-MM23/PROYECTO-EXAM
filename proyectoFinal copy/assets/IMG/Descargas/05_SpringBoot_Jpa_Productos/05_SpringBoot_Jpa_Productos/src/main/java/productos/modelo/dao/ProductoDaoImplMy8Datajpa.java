package productos.modelo.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import productos.modelo.entitybeans.Producto;
import productos.repository.ProductoRepository;

@Repository
public class ProductoDaoImplMy8Datajpa implements ProductoDao{
	
	@Autowired
	private ProductoRepository prepo;

	@Override
	public List<Producto> findAll() {
		// TODO Auto-generated method stub
		return prepo.findAll();
	}

	@Override
	public Producto findById(int idProducto) {
		// TODO Auto-generated method stub
		return prepo.findById(idProducto).orElse(null);
	}

	@Override
	public Producto insertOne(Producto producto) {
		try {
			return prepo.save(producto);
		} catch (Exception e) {
			return null;
		}
	}

	@Override
	public int modificarOne(Producto producto) {
		if (findById(producto.getIdProducto()) != null) {
			prepo.save(producto);
			return 1;
		}
		return 0;
	}

	@Override
	public int eliminarOne(int idProducto) {
		try {
			if (findById(idProducto) != null) {
				prepo.deleteById(idProducto);
				return 1;
			}
			return 0;
	} catch (Exception e) {
		//e.printStackTrace();
		System.err.println(e.getMessage());
		return -1;
	}
	}

	@Override
	public List<Producto> findPorFamilia(int idFamilia) {
		// TODO Auto-generated method stub
		return prepo.productosPorFamilia(idFamilia);
	}

	@Override
	public List<Producto> findByMarca(String marca) {
		// TODO Auto-generated method stub
		return prepo.findByMarca(marca);
	}

	@Override
	public List<Producto> buscarDescripcion(String cadena) {
		// TODO Auto-generated method stub
		return prepo.findByDescripcionContains(cadena);
	}
	
	
	

}
